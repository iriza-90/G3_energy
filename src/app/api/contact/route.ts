import { NextResponse } from "next/server";
import { contactSchema } from "@/lib/validations";
import { checkRateLimit, getClientIp } from "@/lib/rate-limit";

export const runtime = "nodejs";

/**
 * Contact endpoint — validates + sanitizes input, rate-limits by IP,
 * rejects honeypot fills. Wire email delivery (Resend / SendGrid) here for production.
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

  // Production: send email / write to CRM.
  // Intentionally no echo of full payload in response (avoid info leak).
  if (process.env.NODE_ENV === "development") {
    console.info("[contact]", {
      name: `${parsed.data.firstName} ${parsed.data.lastName}`,
      email: parsed.data.email,
      enquiryType: parsed.data.enquiryType,
    });
  }

  return NextResponse.json({ ok: true });
}

/** Reject non-POST methods explicitly. */
export function GET() {
  return NextResponse.json({ error: "Method not allowed" }, { status: 405 });
}
