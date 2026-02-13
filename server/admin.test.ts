import { describe, it, expect } from "vitest";
import { getInquiries, getInquiriesByStatus, searchInquiries, updateInquiryStatus, updateInquiryNotes, getInquiryById } from "./db";

describe("Admin Inquiry Management", () => {
  it("should retrieve all inquiries", async () => {
    const inquiries = await getInquiries();
    expect(Array.isArray(inquiries)).toBe(true);
  });

  it("should filter inquiries by status", async () => {
    const newInquiries = await getInquiriesByStatus("new");
    expect(Array.isArray(newInquiries)).toBe(true);
    
    // Verify all returned inquiries have 'new' status
    newInquiries.forEach(inquiry => {
      expect(inquiry.status).toBe("new");
    });
  });

  it("should return all inquiries when status is 'all'", async () => {
    const allInquiries = await getInquiriesByStatus("all");
    expect(Array.isArray(allInquiries)).toBe(true);
  });

  it("should search inquiries by term", async () => {
    const results = await searchInquiries("test");
    expect(Array.isArray(results)).toBe(true);
  });

  it("should retrieve inquiry by ID", async () => {
    // First get all inquiries to find a valid ID
    const inquiries = await getInquiries();
    
    if (inquiries.length > 0) {
      const firstInquiry = inquiries[0];
      const retrieved = await getInquiryById(firstInquiry.id);
      
      expect(retrieved).toBeDefined();
      expect(retrieved?.id).toBe(firstInquiry.id);
      expect(retrieved?.email).toBe(firstInquiry.email);
    }
  });

  it("should update inquiry status", async () => {
    const inquiries = await getInquiries();
    
    if (inquiries.length > 0) {
      const inquiry = inquiries[0];
      const newStatus = inquiry.status === "new" ? "in_progress" : "new";
      
      await updateInquiryStatus(inquiry.id, newStatus);
      
      const updated = await getInquiryById(inquiry.id);
      expect(updated?.status).toBe(newStatus);
    }
  });

  it("should update inquiry admin notes", async () => {
    const inquiries = await getInquiries();
    
    if (inquiries.length > 0) {
      const inquiry = inquiries[0];
      const testNotes = "Test admin notes - " + Date.now();
      
      await updateInquiryNotes(inquiry.id, testNotes);
      
      const updated = await getInquiryById(inquiry.id);
      expect(updated?.adminNotes).toBe(testNotes);
    }
  });
});
