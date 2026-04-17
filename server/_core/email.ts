import { ENV } from "./env";

/**
 * Send email using Resend API (no external package needed - uses native fetch)
 */
export async function sendEmail({
  to,
  subject,
  text,
  html,
}: {
  to: string;
  subject: string;
  text: string;
  html?: string;
}): Promise<boolean> {
  try {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
      console.error("[Email] Invalid email address:", to);
      return false;
    }
    if (!ENV.resendApiKey) {
      console.warn("[Email] RESEND_API_KEY not configured, skipping email");
      return false;
    }
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${ENV.resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: `Resource Pakistan <${ENV.senderEmail}>`,
        to: [to],
        subject,
        text,
        html: html || text,
      }),
    });
    if (!response.ok) {
      const errorBody = await response.text().catch(() => "");
      console.error("[Email] Resend API error:", response.status, errorBody);
      return false;
    }
    console.log("[Email] Successfully sent email to:", to);
    return true;
  } catch (error) {
    console.error("[Email] Failed to send email:", error);
    return false;
  }
}

/**
 * Send auto-response acknowledgment to inquiry submitter
 */
export async function sendAutoResponse({
  to,
  fullName,
  subject,
}: {
  to: string;
  fullName: string;
  subject: string;
}): Promise<boolean> {
  const emailSubject = "Thank you for contacting Resource Pakistan";
  const textContent = [
    `Dear ${fullName},`,
    "",
    `Thank you for contacting Resource Pakistan (Pvt) Ltd. We have received your inquiry regarding "${subject}".`,
    "",
    "Our team will review your message and respond within 2-3 business days.",
    "",
    "Best regards,",
    "Resource Pakistan Team",
  ].join("\n");

  const htmlContent = `<html><body style="font-family:Arial,sans-serif;color:#333"><div style="max-width:600px;margin:0 auto"><div style="background:#2d5016;color:white;padding:20px;text-align:center"><h2>Thank You for Contacting Us</h2></div><div style="background:#f9f9f9;padding:30px;border:1px solid #ddd"><p>Dear ${fullName},</p><p>Thank you for contacting Resource Pakistan (Pvt) Ltd. We have received your inquiry regarding <strong>"${subject}"</strong>.</p><p>Our team will review your message and respond within <strong>2-3 business days</strong>.</p><p>Best regards,<br>Resource Pakistan Team</p></div></div></body></html>`;

  return sendEmail({ to, subject: emailSubject, text: textContent, html: htmlContent });
}

/**
 * Send contact form notification to admin
 */
export async function sendContactFormNotification({
  fullName,
  email,
  organization,
  phone,
  subject,
  message,
}: {
  fullName: string;
  email: string;
  organization?: string | null;
  phone?: string | null;
  subject: string;
  message: string;
}): Promise<boolean> {
  const adminEmail = ENV.adminEmail;
  if (!adminEmail) {
    console.warn("[Email] ADMIN_EMAIL not configured, skipping notification");
    return false;
  }
  const emailSubject = `New Inquiry: ${subject}`;
  const lines = [
    "New Contact Form Submission",
    `From: ${fullName}`,
    `Email: ${email}`,
  ];
  if (organization) lines.push(`Organization: ${organization}`);
  if (phone) lines.push(`Phone: ${phone}`);
  lines.push(`Subject: ${subject}`, "Message:", message);
  const textContent = lines.join("\n");

  const orgHtml = organization ? `<p><strong>Organization:</strong> ${organization}</p>` : "";
  const phoneHtml = phone ? `<p><strong>Phone:</strong> ${phone}</p>` : "";
  const htmlContent = `<html><body style="font-family:Arial,sans-serif;color:#333"><div style="max-width:600px;margin:0 auto"><div style="background:#2d5016;color:white;padding:20px;text-align:center"><h2>New Contact Form Submission</h2></div><div style="background:#f9f9f9;padding:20px;border:1px solid #ddd"><p><strong>From:</strong> ${fullName}</p><p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>${orgHtml}${phoneHtml}<p><strong>Subject:</strong> ${subject}</p><div style="background:white;padding:15px;border-left:4px solid #2d5016;margin-top:15px"><p>${message.replace(/\n/g, "<br>")}</p></div></div></div></body></html>`;

  return sendEmail({ to: adminEmail, subject: emailSubject, text: textContent, html: htmlContent });
}
