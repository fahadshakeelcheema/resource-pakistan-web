import { describe, it, expect } from "vitest";
import { readFileSync } from "fs";
import { join } from "path";

/**
 * Performance Optimization Tests
 * Validates lazy loading and preload implementation
 */
describe("Performance Optimization", () => {
  it("should have preload hints for critical assets in HTML", () => {
    const htmlPath = join(__dirname, "../client/index.html");
    const htmlContent = readFileSync(htmlPath, "utf-8");
    
    // Check for logo preload
    expect(htmlContent).toContain('rel="preload"');
    expect(htmlContent).toContain('/images/resource-pakistan-logo-hq.png');
    
    // Check for font preconnect
    expect(htmlContent).toContain('rel="preconnect"');
    expect(htmlContent).toContain('fonts.googleapis.com');
    expect(htmlContent).toContain('fonts.gstatic.com');
    
    // Check for CDN preconnect
    expect(htmlContent).toContain('files.manuscdn.com');
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
    expect(headerContent).toContain('resource-pakistan-logo-hq.png');
  });

  it("should not have lazy loading on critical above-fold images", () => {
    const headerPath = join(__dirname, "../client/src/components/Header.tsx");
    const headerContent = readFileSync(headerPath, "utf-8");
    
    // Header logo should NOT have lazy loading
    const logoSection = headerContent.match(/<img[^>]*resource-pakistan-logo-hq\.png[^>]*>/);
    expect(logoSection).toBeTruthy();
    expect(logoSection![0]).not.toContain('loading="lazy"');
  });
});
