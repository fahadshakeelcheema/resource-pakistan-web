import { describe, it, expect, beforeAll } from "vitest";
import { createInquiry, getInquiries } from "./db";

describe("Contact Form / Inquiries", () => {
  it("should create a new inquiry in the database", async () => {
    const testInquiry = {
      fullName: "Test User",
      organization: "Test Organization",
      email: "test@example.com",
      phone: "+92 300 1234567",
      subject: "Mining & Resource Development",
      message: "This is a test inquiry message for pre-deployment verification.",
      status: "new" as const,
    };

    const result = await createInquiry(testInquiry);
    expect(result).toBeDefined();
  });

  it("should retrieve inquiries from the database", async () => {
    const inquiries = await getInquiries();
    expect(Array.isArray(inquiries)).toBe(true);
    expect(inquiries.length).toBeGreaterThan(0);
    
    // Verify the structure of the first inquiry
    const firstInquiry = inquiries[0];
    expect(firstInquiry).toHaveProperty("id");
    expect(firstInquiry).toHaveProperty("fullName");
    expect(firstInquiry).toHaveProperty("email");
    expect(firstInquiry).toHaveProperty("subject");
    expect(firstInquiry).toHaveProperty("message");
    expect(firstInquiry).toHaveProperty("status");
    expect(firstInquiry).toHaveProperty("createdAt");
  });
});
