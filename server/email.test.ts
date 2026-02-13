import { describe, it, expect } from "vitest";
import { sendContactFormNotification, sendEmail } from "./_core/email";
import { ENV } from "./_core/env";

describe("Email Notifications", () => {
  it("should have ADMIN_EMAIL configured", () => {
    expect(ENV.adminEmail).toBeDefined();
    expect(ENV.adminEmail.length).toBeGreaterThan(0);
  });

  it("should have SendGrid credentials configured", () => {
    expect(ENV.sendgridApiKey).toBeDefined();
    expect(ENV.sendgridApiKey.length).toBeGreaterThan(0);
    expect(ENV.sendgridApiKey).toMatch(/^SG\./); // SendGrid API keys start with "SG."
    
    expect(ENV.senderEmail).toBeDefined();
    expect(ENV.senderEmail.length).toBeGreaterThan(0);
    
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(ENV.senderEmail)).toBe(true);
  });

  it("should validate email format", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(ENV.adminEmail)).toBe(true);
  });

  it("should send test email via SendGrid", async () => {
    // Send a simple test email to verify SendGrid credentials
    const result = await sendEmail({
      to: ENV.adminEmail,
      subject: "SendGrid Integration Test",
      text: "This is a test email to verify SendGrid integration is working correctly.",
      html: "<p>This is a test email to verify SendGrid integration is working correctly.</p>",
    });

    // Should return true if SendGrid is properly configured
    expect(result).toBe(true);
  }, 10000); // 10 second timeout for API call

  it("should send contact form notification", async () => {
    const result = await sendContactFormNotification({
      fullName: "Test User",
      email: "test@example.com",
      organization: "Test Org",
      phone: "+92 300 1234567",
      subject: "Test Inquiry",
      message: "This is a test message for email notification validation.",
    });

    // Should return true with SendGrid configured
    expect(result).toBe(true);
  }, 10000); // 10 second timeout for API call
});
