"use client";

import { FormEvent, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Icon } from "@/components/ui/Icon";
import { Reveal } from "@/components/ui/Reveal";
import { ENQUIRY_TYPES, SITE } from "@/data/content";
import { contactSchema } from "@/lib/validations";

type Status = "idle" | "loading" | "success" | "error";

type SubmitResponse = {
  ok?: boolean;
  autoReplySent?: boolean;
  error?: string;
  fallbackEmail?: string;
};

export function Contact() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);
  const [fallbackEmail, setFallbackEmail] = useState<string | null>(null);
  const [successNote, setSuccessNote] = useState<string | null>(null);

  function resetFeedback() {
    if (status === "success" || status === "error") {
      setStatus("idle");
      setError(null);
      setFallbackEmail(null);
      setSuccessNote(null);
    }
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setError(null);
    setFallbackEmail(null);
    setSuccessNote(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    const raw = {
      firstName: String(data.get("firstName") ?? ""),
      lastName: String(data.get("lastName") ?? ""),
      email: String(data.get("email") ?? ""),
      organisation: String(data.get("organisation") ?? ""),
      enquiryType: String(data.get("enquiryType") ?? ""),
      message: String(data.get("message") ?? ""),
      website: String(data.get("website") ?? ""),
    };

    const parsed = contactSchema.safeParse(raw);
    if (!parsed.success) {
      setStatus("error");
      setError(parsed.error.issues[0]?.message ?? "Please check your details.");
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(parsed.data),
      });

      const body = (await res.json().catch(() => null)) as SubmitResponse | null;

      if (!res.ok) {
        setFallbackEmail(body?.fallbackEmail ?? SITE.email);
        throw new Error(body?.error ?? "Something went wrong. Please try again.");
      }

      setStatus("success");
      setSuccessNote(
        body?.autoReplySent
          ? "We've sent a confirmation to your email. We'll reply within 2 business days."
          : "We'll reply within 2 business days.",
      );
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <section className="section section--contact" id="contact">
      <Container className="contact-grid">
        <Reveal className="contact-info">
          <div className="section-label">Get In Touch</div>
          <h2 className="section-title section-title--light">
            Let&apos;s Build Africa&apos;s Energy Future Together
          </h2>
          <p className="section-desc section-desc--light">
            Investors, utilities, DFIs, government partners and technology collaborators — we want to
            hear from you.
          </p>

          <ul className="contact-list">
            <li>
              <div className="contact-icon">
                <Icon name="map" />
              </div>
              <div>
                <strong>Headquarters</strong>
                <span>{SITE.location}</span>
              </div>
            </li>
            <li>
              <div className="contact-icon">
                <Icon name="mail" />
              </div>
              <div>
                <strong>Email</strong>
                <span>
                  <a href={`mailto:${SITE.email}`}>{SITE.email}</a>
                </span>
              </div>
            </li>
            <li>
              <div className="contact-icon">
                <Icon name="globe" />
              </div>
              <div>
                <strong>Website</strong>
                <span>{SITE.website}</span>
              </div>
            </li>
            <li>
              <div className="contact-icon">
                <Icon name="shield" />
              </div>
              <div>
                <strong>Registered With</strong>
                <span>{SITE.registered}</span>
              </div>
            </li>
          </ul>
        </Reveal>

        <Reveal delay={100}>
          <form className="contact-form" onSubmit={onSubmit} noValidate>
            <h3>Send Us a Message</h3>
            <p className="form-sub">We respond within 2 business days.</p>

            {/* Honeypot — hidden from users, traps bots */}
            <div className="hp-field" aria-hidden="true">
              <label htmlFor="website">Website</label>
              <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
            </div>

            <div className="form-row">
              <div className="field">
                <label htmlFor="firstName">First Name</label>
                <input id="firstName" name="firstName" type="text" placeholder="First name" required maxLength={80} autoComplete="given-name" onChange={resetFeedback} />
              </div>
              <div className="field">
                <label htmlFor="lastName">Last Name</label>
                <input id="lastName" name="lastName" type="text" placeholder="Last name" required maxLength={80} autoComplete="family-name" onChange={resetFeedback} />
              </div>
            </div>

            <div className="field">
              <label htmlFor="email">Email Address</label>
              <input id="email" name="email" type="email" placeholder="your@email.com" required maxLength={254} autoComplete="email" onChange={resetFeedback} />
            </div>

            <div className="field">
              <label htmlFor="organisation">Organisation</label>
              <input id="organisation" name="organisation" type="text" placeholder="Company / Institution" maxLength={120} autoComplete="organization" onChange={resetFeedback} />
            </div>

            <div className="field">
              <label htmlFor="enquiryType">Enquiry Type</label>
              <select id="enquiryType" name="enquiryType" defaultValue={ENQUIRY_TYPES[0]} onChange={resetFeedback}>
                {ENQUIRY_TYPES.map((type) => (
                  <option key={type} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            <div className="field">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" rows={4} placeholder="Tell us about your interest or project..." required minLength={10} maxLength={2000} onChange={resetFeedback} />
            </div>

            <div aria-live="polite">
              {error ? (
                <div className="form-error" role="alert">
                  <p>{error}</p>
                  {fallbackEmail ? (
                    <p className="form-fallback">
                      Or email us directly at{" "}
                      <a href={`mailto:${fallbackEmail}`}>{fallbackEmail}</a>
                    </p>
                  ) : null}
                </div>
              ) : null}
              {status === "success" ? (
                <p className="form-success" role="status">
                  Thank you — your message was sent. {successNote}
                </p>
              ) : null}
            </div>

            <button
              type="submit"
              className="btn btn--primary btn--full"
              disabled={status === "loading"}
            >
              {status === "loading" ? "Sending…" : "Send Message"}
            </button>
          </form>
        </Reveal>
      </Container>
    </section>
  );
}
