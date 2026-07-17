import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactSchema } from "@/lib/validations";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

/**
 * Contact endpoint — validates + sanitizes input, rate-limits by IP,
 * rejects honeypot fills, then emails via Resend.
 */
export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limit = checkRateLimit(`contact:${ip}`);

  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please try again shortly." },
      {
        status: 429,
        headers: { "Retry-After": String(limit.retryAfterSec) },
      },
    );
  }

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid JSON payload." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: parsed.error.issues[0]?.message ?? "Validation failed.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  // Honeypot tripped — pretend success so bots don't learn.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const toEmail = process.env.CONTACT_TO_EMAIL;
  const fromEmail = process.env.RESEND_FROM_EMAIL ?? "G3 Energy <onboarding@resend.dev>";

  if (!apiKey || !toEmail) {
    console.error("[contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
    return NextResponse.json(
      {
        error:
          "Email delivery is not configured yet. Please email us directly at info@g3energy.com.",
      },
      { status: 503 },
    );
  }

  const data = parsed.data;
  const fullName = `${data.firstName} ${data.lastName}`;
  const subject = `G3 website enquiry · ${data.enquiryType} · ${fullName}`;

  const text = [
    `New enquiry from the G3 Energy website`,
    ``,
    `Name: ${fullName}`,
    `Email: ${data.email}`,
    `Organisation: ${data.organisation || "—"}`,
    `Enquiry type: ${data.enquiryType}`,
    ``,
    `Message:`,
    data.message || "(no message)",
  ].join("\n");

  const html = `
    <div style="font-family:Arial,sans-serif;line-height:1.6;color:#0C1812">
      <h2 style="margin:0 0 12px">New G3 website enquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(fullName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(data.email)}</p>
      <p><strong>Organisation:</strong> ${escapeHtml(data.organisation || "—")}</p>
      <p><strong>Enquiry type:</strong> ${escapeHtml(data.enquiryType)}</p>
      <p><strong>Message:</strong></p>
      <p style="white-space:pre-wrap">${escapeHtml(data.message || "(no message)")}</p>
    </div>
  `;

  try {
    const resend = new Resend(apiKey);
    const result = await resend.emails.send({
      from: fromEmail,
      to: [toEmail],
      replyTo: data.email,
      subject,
      text,
      html,
    });

    if (result.error) {
      console.error("[contact] Resend error:", result.error);
      return NextResponse.json(
        { error: "We couldn't send your message right now. Please try again or email us directly." },
        { status: 502 },
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[contact] Send failed:", err);
    return NextResponse.json(
      { error: "We couldn't send your message right now. Please try again or email us directly." },
      { status: 502 },
    );
  }
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
