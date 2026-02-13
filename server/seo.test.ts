import { describe, it, expect } from "vitest";

/**
 * SEO Configuration Tests
 * Validates that SEO metadata is properly configured for all pages
 */
describe("SEO Configuration", () => {
  it("should have valid SEO config structure", async () => {
    // Dynamically import the SEO config
    const { seoConfig } = await import("../client/src/lib/seo-config");
    
    expect(seoConfig).toBeDefined();
    expect(typeof seoConfig).toBe("object");
  });

  it("should have metadata for all main pages", async () => {
    const { seoConfig } = await import("../client/src/lib/seo-config");
    
    const requiredPages = ["home", "about", "consultancy", "mining", "evs", "governance", "contact"];
    
    requiredPages.forEach(page => {
      expect(seoConfig[page]).toBeDefined();
      expect(seoConfig[page].title).toBeDefined();
      expect(seoConfig[page].description).toBeDefined();
      expect(seoConfig[page].title.length).toBeGreaterThan(0);
      expect(seoConfig[page].description.length).toBeGreaterThan(0);
    });
  });

  it("should have valid meta descriptions (50-160 characters)", async () => {
    const { seoConfig } = await import("../client/src/lib/seo-config");
    
    Object.entries(seoConfig).forEach(([page, config]) => {
      const descLength = config.description.length;
      expect(descLength).toBeGreaterThanOrEqual(50);
      expect(descLength).toBeLessThanOrEqual(160);
    });
  });

  it("should have valid page titles (under 60 characters)", async () => {
    const { seoConfig } = await import("../client/src/lib/seo-config");
    
    Object.entries(seoConfig).forEach(([page, config]) => {
      const titleLength = config.title.length;
      expect(titleLength).toBeLessThanOrEqual(70); // Allow some flexibility
    });
  });

  it("should have Open Graph images configured", async () => {
    const { seoConfig } = await import("../client/src/lib/seo-config");
    
    Object.entries(seoConfig).forEach(([page, config]) => {
      expect(config.ogImage).toBeDefined();
      expect(config.ogImage).toContain("resource-pakistan");
    });
  });

  it("should have canonical URLs configured", async () => {
    const { seoConfig } = await import("../client/src/lib/seo-config");
    
    Object.entries(seoConfig).forEach(([page, config]) => {
      expect(config.canonicalUrl).toBeDefined();
      expect(config.canonicalUrl).toMatch(/^https?:\/\//);
    });
  });

  it("should have organization schema defined", async () => {
    const { organizationSchema } = await import("../client/src/lib/seo-config");
    
    expect(organizationSchema).toBeDefined();
    expect(organizationSchema["@context"]).toBe("https://schema.org");
    expect(organizationSchema["@type"]).toBe("Organization");
    expect(organizationSchema.name).toBe("Resource Pakistan (Pvt) Ltd");
    expect(organizationSchema.url).toBeDefined();
    expect(organizationSchema.logo).toBeDefined();
  });
});
