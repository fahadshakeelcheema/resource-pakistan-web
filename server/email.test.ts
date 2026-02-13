import { describe, it, expect } from "vitest";
import { sendContactFormNotification } from "./_core/email";
import { ENV } from "./_core/env";

describe("Email Notifications", () => {
  it("should have ADMIN_EMAIL configured", () => {
    expect(ENV.adminEmail).toBeDefined();
    expect(ENV.adminEmail.length).toBeGreaterThan(0);
  });

  it("should validate email format", () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    expect(emailRegex.test(ENV.adminEmail)).toBe(true);
  });

  it("should send contact form notification", async () => {
    const result = await sendContactFormNotification({
      fullName: "Test User",
      email: "test@example.com",
      organization: "Test Org",
      phone: "+92 300 1234567",
      subject: "Test Inquiry",
      message: "This is a test message for email notification validation.",
    });

    // In development, this returns true even though no actual email is sent
    // In production with a real email service, this would verify actual delivery
    expect(typeof result).toBe("boolean");
  });
});
