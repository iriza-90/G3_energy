import { SITE } from "@/data/content";
import type { ContactInput } from "@/lib/validations";

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

const BRAND = {
  green: "#0C1812",
  accent: "#3D9B5F",
  muted: "#5A7268",
  border: "#E2EBE6",
  bg: "#F4F8F6",
};

function emailShell(title: string, body: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>${escapeHtml(title)}</title>
</head>
<body style="margin:0;padding:0;background:${BRAND.bg};font-family:Arial,Helvetica,sans-serif;color:${BRAND.green};">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:${BRAND.bg};padding:32px 16px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:560px;background:#ffffff;border:1px solid ${BRAND.border};border-radius:12px;overflow:hidden;">
          <tr>
            <td style="padding:24px 28px;background:${BRAND.green};color:#ffffff;">
              <div style="font-size:12px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.85;">${escapeHtml(SITE.shortName)} Energy</div>
              <div style="font-size:20px;font-weight:600;margin-top:4px;">${escapeHtml(title)}</div>
            </td>
          </tr>
          <tr>
            <td style="padding:28px;line-height:1.6;font-size:15px;">
              ${body}
            </td>
          </tr>
          <tr>
            <td style="padding:16px 28px 24px;border-top:1px solid ${BRAND.border};font-size:12px;color:${BRAND.muted};">
              ${escapeHtml(SITE.legalName)} · ${escapeHtml(SITE.location)}<br />
              ${escapeHtml(SITE.email)} · ${escapeHtml(SITE.website)}
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

function detailRow(label: string, value: string): string {
  return `
    <tr>
      <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};width:140px;vertical-align:top;color:${BRAND.muted};font-size:13px;">
        ${escapeHtml(label)}
      </td>
      <td style="padding:10px 0;border-bottom:1px solid ${BRAND.border};font-size:14px;">
        ${escapeHtml(value)}
      </td>
    </tr>`;
}

export function buildTeamNotification(data: ContactInput) {
  const fullName = `${data.firstName} ${data.lastName}`;

  const subject = `Website enquiry · ${data.enquiryType} · ${fullName}`;

  const text = [
    `New enquiry from the ${SITE.name} website`,
    "",
    `Name: ${fullName}`,
    `Email: ${data.email}`,
    `Organisation: ${data.organisation || "—"}`,
    `Enquiry type: ${data.enquiryType}`,
    "",
    "Message:",
    data.message,
  ].join("\n");

  const html = emailShell(
    "New website enquiry",
    `
      <p style="margin:0 0 20px;">A visitor submitted the contact form on <strong>${escapeHtml(SITE.website)}</strong>.</p>
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="margin-bottom:20px;">
        ${detailRow("Name", fullName)}
        ${detailRow("Email", data.email)}
        ${detailRow("Organisation", data.organisation || "—")}
        ${detailRow("Enquiry type", data.enquiryType)}
      </table>
      <p style="margin:0 0 8px;font-size:13px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.06em;">Message</p>
      <div style="background:${BRAND.bg};border:1px solid ${BRAND.border};border-radius:8px;padding:16px;white-space:pre-wrap;font-size:14px;">
        ${escapeHtml(data.message)}
      </div>
      <p style="margin:20px 0 0;font-size:13px;color:${BRAND.muted};">
        Reply directly to this email to reach ${escapeHtml(fullName)}.
      </p>
    `,
  );

  return { subject, text, html };
}

export function buildAutoReply(data: ContactInput) {
  const fullName = `${data.firstName} ${data.lastName}`;

  const subject = `We received your enquiry — ${SITE.shortName} Energy International`;

  const text = [
    `Dear ${data.firstName},`,
    "",
    `Thank you for contacting ${SITE.name}. We have received your ${data.enquiryType.toLowerCase()} enquiry and will respond within 2 business days.`,
    "",
    "Your message:",
    data.message,
    "",
    `If you need to reach us sooner, email ${SITE.email}.`,
    "",
    SITE.legalName,
    SITE.location,
  ].join("\n");

  const html = emailShell(
    "Thank you for getting in touch",
    `
      <p style="margin:0 0 16px;">Dear ${escapeHtml(data.firstName)},</p>
      <p style="margin:0 0 16px;">
        Thank you for contacting <strong>${escapeHtml(SITE.name)}</strong>.
        We have received your <strong>${escapeHtml(data.enquiryType.toLowerCase())}</strong> enquiry
        and will respond within <strong>2 business days</strong>.
      </p>
      <p style="margin:0 0 8px;font-size:13px;color:${BRAND.muted};text-transform:uppercase;letter-spacing:0.06em;">Your message</p>
      <div style="background:${BRAND.bg};border:1px solid ${BRAND.border};border-radius:8px;padding:16px;white-space:pre-wrap;font-size:14px;margin-bottom:20px;">
        ${escapeHtml(data.message)}
      </div>
      <p style="margin:0;font-size:14px;color:${BRAND.muted};">
        Need to reach us sooner? Email
        <a href="mailto:${escapeHtml(SITE.email)}" style="color:${BRAND.accent};">${escapeHtml(SITE.email)}</a>.
      </p>
    `,
  );

  return { subject, text, html, fullName };
}
