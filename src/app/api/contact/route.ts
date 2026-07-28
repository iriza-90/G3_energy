import { NextResponse } from "next/server";
import { getPublicFallbackEmail } from "@/lib/email/config";
import { sendContactEmails } from "@/lib/email/send-contact";
import { contactSchema } from "@/lib/validations";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";

/**
 * Contact endpoint — validates + sanitizes input, rate-limits by IP,
 * rejects honeypot fills, then emails via Resend.
 */
export async function POST(request: Request) {
  const ip = getClientIp(request);
  const limit = checkRateLimit(`contact:${ip}`);

  if (!limit.ok) {
    return NextResponse.json(
      { error: "Too many requests. Please wait a minute and try again." },
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
    return NextResponse.json({ error: "Invalid request. Please refresh and try again." }, { status: 400 });
  }

  const parsed = contactSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json(
      {
        error: parsed.error.issues[0]?.message ?? "Please check your details.",
        issues: parsed.error.flatten().fieldErrors,
      },
      { status: 400 },
    );
  }

  // Honeypot tripped — pretend success so bots don't learn.
  if (parsed.data.website) {
    return NextResponse.json({ ok: true, autoReplySent: false });
  }

  const fallbackEmail = getPublicFallbackEmail();
  const result = await sendContactEmails(parsed.data);

  if (!result.ok) {
    if (result.code === "not_configured") {
      console.error("[contact] Missing RESEND_API_KEY or CONTACT_TO_EMAIL");
      return NextResponse.json(
        {
          error: `We're finishing email setup. Please contact us directly at ${fallbackEmail}.`,
          fallbackEmail,
        },
        { status: 503 },
      );
    }

    console.error("[contact] Send failed:", result.message);
    return NextResponse.json(
      {
        error: `We couldn't send your message right now. Please email us at ${fallbackEmail}.`,
        fallbackEmail,
      },
      { status: 502 },
    );
  }

  return NextResponse.json({
    ok: true,
    autoReplySent: result.autoReplySent,
  });
}

export function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
