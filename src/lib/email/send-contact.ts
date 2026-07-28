import { Resend } from "resend";
import type { ContactInput } from "@/lib/validations";
import { getEmailConfig, resolveRecipients } from "@/lib/email/config";
import { buildAutoReply, buildTeamNotification } from "@/lib/email/templates";

export type SendContactResult =
  | { ok: true; autoReplySent: boolean }
  | { ok: false; code: "not_configured" | "send_failed"; message: string };

export async function sendContactEmails(data: ContactInput): Promise<SendContactResult> {
  const config = getEmailConfig();
  if (!config) {
    return {
      ok: false,
      code: "not_configured",
      message: "Email delivery is not configured yet.",
    };
  }

  const resend = new Resend(config.apiKey);
  const recipients = resolveRecipients(data);
  const notification = buildTeamNotification(data);

  const teamResult = await resend.emails.send({
    from: config.fromEmail,
    to: recipients.to,
    replyTo: recipients.replyTo,
    subject: notification.subject,
    text: notification.text,
    html: notification.html,
  });

  if (teamResult.error) {
    console.error("[contact] Team notification failed:", teamResult.error);
    return {
      ok: false,
      code: "send_failed",
      message: teamResult.error.message || "Email delivery failed.",
    };
  }

  let autoReplySent = false;

  if (config.autoReplyEnabled) {
    const autoReply = buildAutoReply(data);
    const replyResult = await resend.emails.send({
      from: config.fromEmail,
      to: [data.email],
      subject: autoReply.subject,
      text: autoReply.text,
      html: autoReply.html,
    });

    if (replyResult.error) {
      // Don't fail the submission if only the auto-reply fails.
      console.error("[contact] Auto-reply failed:", replyResult.error);
    } else {
      autoReplySent = true;
    }
  }

  return { ok: true, autoReplySent };
}
