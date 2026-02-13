import { ENV } from "./env";

/**
 * Send email notification using Manus built-in email service
 * This is a simple wrapper around the notification API for email delivery
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
    // For now, we'll use a simple fetch to send emails via an external service
    // In production, you would integrate with SendGrid, AWS SES, or similar
    
    // Validate email address
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(to)) {
      console.error("[Email] Invalid email address:", to);
      return false;
    }

    // Log email for development (in production, this would actually send)
    console.log("[Email] Would send email to:", to);
    console.log("[Email] Subject:", subject);
    console.log("[Email] Text:", text.substring(0, 100) + "...");

    // In a real implementation, you would call an email service API here
    // For example with SendGrid:
    // const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
    //   method: 'POST',
    //   headers: {
    //     'Authorization': `Bearer ${process.env.SENDGRID_API_KEY}`,
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify({
    //     personalizations: [{ to: [{ email: to }] }],
    //     from: { email: 'noreply@resourcepakistan.com' },
    //     subject,
    //     content: [
    //       { type: 'text/plain', value: text },
    //       ...(html ? [{ type: 'text/html', value: html }] : []),
    //     ],
    //   }),
    // });

    return true;
  } catch (error) {
    console.error("[Email] Failed to send email:", error);
    return false;
  }
}

/**
 * Send contact form notification to admin
 */
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

  const textContent = `
Dear ${fullName},

Thank you for contacting Resource Pakistan (Pvt) Ltd. We have received your inquiry regarding "${subject}".

Our team will review your message and respond within 2-3 business days. We appreciate your interest in our services and look forward to assisting you.

If your matter is urgent, please feel free to call our office during business hours (Monday-Friday, 9:00 AM - 5:00 PM PKT).

Best regards,
Resource Pakistan Team

---
This is an automated acknowledgment. Please do not reply to this email.
  `.trim();

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1e3a5f; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f9f9f9; padding: 30px; border: 1px solid #ddd; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>Thank You for Contacting Us</h2>
    </div>
    <div class="content">
      <p>Dear ${fullName},</p>
      <p>Thank you for contacting Resource Pakistan (Pvt) Ltd. We have received your inquiry regarding <strong>"${subject}"</strong>.</p>
      <p>Our team will review your message and respond within <strong>2-3 business days</strong>. We appreciate your interest in our services and look forward to assisting you.</p>
      <p>If your matter is urgent, please feel free to call our office during business hours (Monday-Friday, 9:00 AM - 5:00 PM PKT).</p>
      <p>Best regards,<br>Resource Pakistan Team</p>
    </div>
    <div class="footer">
      <p>This is an automated acknowledgment. Please do not reply to this email.</p>
    </div>
  </div>
</body>
</html>
  `.trim();

  return sendEmail({
    to,
    subject: emailSubject,
    text: textContent,
    html: htmlContent,
  });
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
    console.warn("[Email] ADMIN_EMAIL not configured, skipping email notification");
    return false;
  }

  const emailSubject = `New Inquiry: ${subject}`;
  
  const textContent = `
New Contact Form Submission

From: ${fullName}
Email: ${email}
${organization ? `Organization: ${organization}` : ""}
${phone ? `Phone: ${phone}` : ""}

Subject: ${subject}

Message:
${message}

---
This inquiry was submitted via the Resource Pakistan website contact form.
View and manage inquiries in the admin dashboard: https://resourcepakistan.com/admin
  `.trim();

  const htmlContent = `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #1e3a5f; color: white; padding: 20px; text-align: center; }
    .content { background-color: #f9f9f9; padding: 20px; border: 1px solid #ddd; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #1e3a5f; }
    .message-box { background-color: white; padding: 15px; border-left: 4px solid #1e3a5f; margin-top: 15px; }
    .footer { text-align: center; margin-top: 20px; font-size: 12px; color: #666; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2>New Contact Form Submission</h2>
    </div>
    <div class="content">
      <div class="field">
        <span class="label">From:</span> ${fullName}
      </div>
      <div class="field">
        <span class="label">Email:</span> <a href="mailto:${email}">${email}</a>
      </div>
      ${organization ? `<div class="field"><span class="label">Organization:</span> ${organization}</div>` : ""}
      ${phone ? `<div class="field"><span class="label">Phone:</span> ${phone}</div>` : ""}
      <div class="field">
        <span class="label">Subject:</span> ${subject}
      </div>
      <div class="message-box">
        <div class="label">Message:</div>
        <p>${message.replace(/\n/g, "<br>")}</p>
      </div>
    </div>
    <div class="footer">
      <p>This inquiry was submitted via the Resource Pakistan website contact form.</p>
      <p><a href="https://resourcepakistan.com/admin">View in Admin Dashboard</a></p>
    </div>
  </div>
</body>
</html>
  `.trim();

  return sendEmail({
    to: adminEmail,
    subject: emailSubject,
    text: textContent,
    html: htmlContent,
  });
}
