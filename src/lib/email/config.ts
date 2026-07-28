import { SITE } from "@/data/content";
import type { ContactInput } from "@/lib/validations";

export type EmailConfig = {
  apiKey: string;
  fromEmail: string;
  autoReplyEnabled: boolean;
};

export type ResolvedRecipients = {
  to: string[];
  replyTo: string;
};

function parseEmailList(value: string | undefined): string[] {
  if (!value) return [];
  return value
    .split(",")
    .map((entry) => entry.trim())
    .filter(Boolean);
}

/** Resolve team inbox(es) from enquiry type and env vars. */
export function resolveRecipients(data: ContactInput): ResolvedRecipients {
  const defaultInbox = process.env.CONTACT_TO_EMAIL?.trim() || SITE.email;
  const partnershipInbox =
    process.env.CONTACT_PARTNERSHIP_EMAIL?.trim() || SITE.partnershipsEmail;
  const ccList = parseEmailList(process.env.CONTACT_CC_EMAIL);

  const isPartnership = data.enquiryType === "Investment Partnership";
  const primary = isPartnership ? partnershipInbox : defaultInbox;

  const to = [primary, ...ccList.filter((email) => email !== primary)];

  return {
    to: [...new Set(to)],
    replyTo: data.email,
  };
}

export function getEmailConfig(): EmailConfig | null {
  const apiKey = process.env.RESEND_API_KEY?.trim();
  const toEmail = process.env.CONTACT_TO_EMAIL?.trim() || SITE.email;

  if (!apiKey || !toEmail) {
    return null;
  }

  const fromEmail =
    process.env.RESEND_FROM_EMAIL?.trim() ||
    `G3 Energy International <noreply@${SITE.website.replace(/^www\./, "")}>`;

  const autoReplyEnabled = process.env.CONTACT_AUTO_REPLY !== "false";

  return { apiKey, fromEmail, autoReplyEnabled };
}

export function getPublicFallbackEmail(): string {
  return process.env.CONTACT_TO_EMAIL?.trim() || SITE.email;
}
