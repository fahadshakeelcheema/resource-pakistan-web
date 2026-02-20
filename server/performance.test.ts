import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";

/**
 * Performance Optimization Tests
 * Validates lazy loading, preload implementation, and CDN usage
 */
describe("Performance Optimization", () => {
  it("should have preload hints for critical assets in HTML", () => {
    const htmlPath = join(__dirname, "../client/index.html");
    const htmlContent = readFileSync(htmlPath, "utf-8");
    
    // Check for logo preload
    expect(htmlContent).toContain('rel="preload"');
    expect(htmlContent).toContain('files.manuscdn.com');
    
    // Check for font preconnect
    expect(htmlContent).toContain('rel="preconnect"');
    expect(htmlContent).toContain('fonts.googleapis.com');
    expect(htmlContent).toContain('fonts.gstatic.com');
  });

  it("should have lazy loading on Home page service images", () => {
    const homePath = join(__dirname, "../client/src/pages/Home.tsx");
    const homeContent = readFileSync(homePath, "utf-8");
    
    // Check for lazy loading attribute
    const lazyLoadMatches = homeContent.match(/loading="lazy"/g);
    expect(lazyLoadMatches).toBeTruthy();
    expect(lazyLoadMatches!.length).toBeGreaterThanOrEqual(4); // At least 4 service images
  });

  it("should have hero background image on Mining page", () => {
    const miningPath = join(__dirname, "../client/src/pages/Mining.tsx");
    const miningContent = readFileSync(miningPath, "utf-8");
    
    // Check for hero background image on Mining page
    expect(miningContent).toContain('backgroundImage');
    expect(miningContent.includes('.jpeg') || miningContent.includes('.jpg')).toBe(true);
  });

  it("should have fetchPriority='high' on logo in Header", () => {
    const headerPath = join(__dirname, "../client/src/components/Header.tsx");
    const headerContent = readFileSync(headerPath, "utf-8");
    
    // Logo should have high priority, not lazy loading
    expect(headerContent).toContain('fetchPriority="high"');
    // Logo should use CDN URL
    expect(headerContent).toContain('files.manuscdn.com');
  });

  it("should not have lazy loading on critical above-fold images", () => {
    const headerPath = join(__dirname, "../client/src/components/Header.tsx");
    const headerContent = readFileSync(headerPath, "utf-8");
    
    // Header logo should NOT have lazy loading
    const logoSection = headerContent.match(/<img[^>]*manuscdn\.com[^>]*>/);
    expect(logoSection).toBeTruthy();
    expect(logoSection![0]).not.toContain('loading="lazy"');
  });

  it("should use CDN URLs for all images (no local /images/ paths)", () => {
    const files = [
      "../client/src/components/Header.tsx",
      "../client/src/components/Footer.tsx",
      "../client/src/pages/Home.tsx",
      "../client/src/pages/About.tsx",
      "../client/src/pages/Contact.tsx",
    ];

    for (const file of files) {
      const filePath = join(__dirname, file);
      const content = readFileSync(filePath, "utf-8");
      // No local /images/ paths should remain
      expect(content).not.toMatch(/src="\/images\//);
      expect(content).not.toContain("private-us-east-1.manuscdn.com");
    }
  });
});
