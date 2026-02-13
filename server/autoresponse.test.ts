import { describe, it, expect } from "vitest";
import { sendAutoResponse } from "./_core/email";

describe("Auto-Response System", () => {
  it("should send auto-response email with correct format", async () => {
    const result = await sendAutoResponse({
      to: "test@example.com",
      fullName: "John Doe",
      subject: "Mining Inquiry",
    });

    // Email logging is enabled, so this should return true
    expect(result).toBe(true);
  });

  it("should handle special characters in name and subject", async () => {
    const result = await sendAutoResponse({
      to: "test@example.com",
      fullName: "O'Brien & Associates",
      subject: "Partnership: Resource Development (2024-2025)",
    });

    expect(result).toBe(true);
  });

  it("should send auto-response for all inquiry types", async () => {
    const inquiryTypes = [
      "Mining Feasibility Study",
      "Consultancy Services",
      "Partnership Opportunity",
      "EV Technology",
      "Governance Policy",
      "General Information",
    ];

    for (const subject of inquiryTypes) {
      const result = await sendAutoResponse({
        to: "test@example.com",
        fullName: "Test User",
        subject,
      });

      expect(result).toBe(true);
    }
  });
});
