import { describe, it, expect } from "vitest";

/**
 * SEO & Structured Data Tests
 * Validates JSON-LD schemas, meta configuration, and structured data integrity
 */

describe("SEO Configuration", () => {
  it("should have valid SEO config structure", async () => {
    const { seoConfig } = await import("../client/src/lib/seo-config");
    expect(seoConfig).toBeDefined();
    expect(typeof seoConfig).toBe("object");
  });

  it("should have metadata for all main pages", async () => {
    const { seoConfig } = await import("../client/src/lib/seo-config");
    const requiredPages = ["home", "about", "consultancy", "mining", "evs", "governance", "contact"];

    for (const page of requiredPages) {
      expect(seoConfig[page]).toBeDefined();
      expect(seoConfig[page].title).toBeTruthy();
      expect(seoConfig[page].description).toBeTruthy();
      expect(seoConfig[page].description.length).toBeGreaterThan(50);
      expect(seoConfig[page].description.length).toBeLessThan(160);
      expect(seoConfig[page].keywords).toBeTruthy();
      expect(seoConfig[page].ogType).toBe("website");
      expect(seoConfig[page].canonicalUrl).toBeTruthy();
    }
  });

  it("should have unique titles for each page", async () => {
    const { seoConfig } = await import("../client/src/lib/seo-config");
    const titles = Object.values(seoConfig).map(c => c.title);
    const uniqueTitles = new Set(titles);
    expect(uniqueTitles.size).toBe(titles.length);
  });

  it("should have unique descriptions for each page", async () => {
    const { seoConfig } = await import("../client/src/lib/seo-config");
    const descriptions = Object.values(seoConfig).map(c => c.description);
    const uniqueDescriptions = new Set(descriptions);
    expect(uniqueDescriptions.size).toBe(descriptions.length);
  });

  it("should have unique canonical URLs for each page", async () => {
    const { seoConfig } = await import("../client/src/lib/seo-config");
    const urls = Object.values(seoConfig).map(c => c.canonicalUrl);
    const uniqueUrls = new Set(urls);
    expect(uniqueUrls.size).toBe(urls.length);
  });

  it("should have valid page titles (under 70 characters)", async () => {
    const { seoConfig } = await import("../client/src/lib/seo-config");
    Object.entries(seoConfig).forEach(([, config]) => {
      expect(config.title.length).toBeLessThanOrEqual(70);
    });
  });

  it("should have Open Graph images configured", async () => {
    const { seoConfig } = await import("../client/src/lib/seo-config");
    Object.entries(seoConfig).forEach(([, config]) => {
      expect(config.ogImage).toBeDefined();
      expect(config.ogImage).toContain("resource-pakistan");
    });
  });

  it("should have canonical URLs with valid format", async () => {
    const { seoConfig } = await import("../client/src/lib/seo-config");
    Object.entries(seoConfig).forEach(([, config]) => {
      expect(config.canonicalUrl).toBeDefined();
      expect(config.canonicalUrl).toMatch(/^https?:\/\//);
    });
  });
});

describe("Organization Schema", () => {
  it("should have valid Organization schema structure", async () => {
    const { organizationSchema } = await import("../client/src/lib/seo-config");

    expect(organizationSchema["@context"]).toBe("https://schema.org");
    expect(organizationSchema["@type"]).toBe("Organization");
    expect(organizationSchema.name).toBe("Resource Pakistan (Pvt) Ltd");
    expect(organizationSchema.alternateName).toBe("Resource Pakistan");
    expect(organizationSchema.url).toBeTruthy();
    expect(organizationSchema.description).toBeTruthy();
    expect(organizationSchema.description.length).toBeGreaterThan(50);
  });

  it("should have logo as ImageObject", async () => {
    const { organizationSchema } = await import("../client/src/lib/seo-config");

    expect(organizationSchema.logo).toBeDefined();
    expect((organizationSchema.logo as any)["@type"]).toBe("ImageObject");
    expect((organizationSchema.logo as any).url).toContain("logo");
  });

  it("should have contact point information", async () => {
    const { organizationSchema } = await import("../client/src/lib/seo-config");

    expect(organizationSchema.contactPoint).toBeDefined();
    expect(Array.isArray(organizationSchema.contactPoint)).toBe(true);
    expect(organizationSchema.contactPoint.length).toBeGreaterThan(0);

    const contactPoint = organizationSchema.contactPoint[0];
    expect(contactPoint["@type"]).toBe("ContactPoint");
    expect(contactPoint.contactType).toBeTruthy();
    expect(contactPoint.email).toContain("@");
  });

  it("should have address information for Pakistan", async () => {
    const { organizationSchema } = await import("../client/src/lib/seo-config");

    expect(organizationSchema.address).toBeDefined();
    expect(organizationSchema.address["@type"]).toBe("PostalAddress");
    expect(organizationSchema.address.addressCountry).toBe("PK");
  });

  it("should list areas of expertise", async () => {
    const { organizationSchema } = await import("../client/src/lib/seo-config");

    expect(organizationSchema.knowsAbout).toBeDefined();
    expect(Array.isArray(organizationSchema.knowsAbout)).toBe(true);
    expect(organizationSchema.knowsAbout.length).toBeGreaterThanOrEqual(4);
    expect(organizationSchema.knowsAbout).toContain("Mining & Resource Development");
    expect(organizationSchema.knowsAbout).toContain("Consultancy & Advisory Services");
    expect(organizationSchema.knowsAbout).toContain("Electric Vehicles & Technology");
  });
});

describe("WebSite Schema", () => {
  it("should have valid WebSite schema structure", async () => {
    const { websiteSchema } = await import("../client/src/lib/seo-config");

    expect(websiteSchema["@context"]).toBe("https://schema.org");
    expect(websiteSchema["@type"]).toBe("WebSite");
    expect(websiteSchema.name).toBe("Resource Pakistan");
    expect(websiteSchema.url).toBeTruthy();
    expect(websiteSchema.inLanguage).toBe("en");
  });

  it("should have publisher information", async () => {
    const { websiteSchema } = await import("../client/src/lib/seo-config");

    expect(websiteSchema.publisher).toBeDefined();
    expect(websiteSchema.publisher["@type"]).toBe("Organization");
    expect(websiteSchema.publisher.name).toBe("Resource Pakistan (Pvt) Ltd");
    expect(websiteSchema.publisher.logo).toBeDefined();
  });
});

describe("Breadcrumb Schemas", () => {
  it("should have breadcrumbs for all pages", async () => {
    const { breadcrumbs } = await import("../client/src/lib/seo-config");

    const requiredPages = ["home", "about", "consultancy", "mining", "evs", "governance", "contact"];

    for (const page of requiredPages) {
      const bc = breadcrumbs[page as keyof typeof breadcrumbs];
      expect(bc).toBeDefined();
      expect(bc["@context"]).toBe("https://schema.org");
      expect(bc["@type"]).toBe("BreadcrumbList");
    }
  });

  it("should have valid breadcrumb item structure for About page", async () => {
    const { breadcrumbs } = await import("../client/src/lib/seo-config");

    const aboutBreadcrumb = breadcrumbs.about;
    expect(aboutBreadcrumb.itemListElement).toBeDefined();
    expect(Array.isArray(aboutBreadcrumb.itemListElement)).toBe(true);
    expect(aboutBreadcrumb.itemListElement.length).toBe(2);

    expect(aboutBreadcrumb.itemListElement[0].position).toBe(1);
    expect(aboutBreadcrumb.itemListElement[0].name).toBe("Home");
    expect(aboutBreadcrumb.itemListElement[0]["@type"]).toBe("ListItem");

    expect(aboutBreadcrumb.itemListElement[1].position).toBe(2);
    expect(aboutBreadcrumb.itemListElement[1].name).toBe("About Us");
  });

  it("should have sector pages with 3-level breadcrumbs", async () => {
    const { breadcrumbs } = await import("../client/src/lib/seo-config");

    const sectorPages = ["consultancy", "mining", "evs"] as const;

    for (const page of sectorPages) {
      const bc = breadcrumbs[page];
      expect(bc.itemListElement.length).toBe(3);
      expect(bc.itemListElement[0].name).toBe("Home");
      expect(bc.itemListElement[1].name).toBe("Sectors");
    }
  });

  it("should have sequential position numbers", async () => {
    const { breadcrumbs } = await import("../client/src/lib/seo-config");

    for (const [, bc] of Object.entries(breadcrumbs)) {
      (bc as any).itemListElement.forEach((item: any, index: number) => {
        expect(item.position).toBe(index + 1);
      });
    }
  });
});

describe("Page-Specific Schemas", () => {
  it("should have schemas for all pages", async () => {
    const { pageSchemas } = await import("../client/src/lib/seo-config");

    const requiredPages = ["home", "about", "consultancy", "mining", "evs", "governance", "contact"];

    for (const page of requiredPages) {
      const schema = pageSchemas[page as keyof typeof pageSchemas];
      expect(schema).toBeDefined();
      expect(schema["@context"]).toBe("https://schema.org");
    }
  });

  it("should use correct page types", async () => {
    const { pageSchemas } = await import("../client/src/lib/seo-config");

    expect(pageSchemas.about["@type"]).toBe("AboutPage");
    expect(pageSchemas.contact["@type"]).toBe("ContactPage");
    expect(pageSchemas.home["@type"]).toBe("WebPage");
  });

  it("should have Service entities for sector pages", async () => {
    const { pageSchemas } = await import("../client/src/lib/seo-config");

    const sectorPages = ["consultancy", "mining", "evs"] as const;

    for (const page of sectorPages) {
      const schema = pageSchemas[page] as any;
      expect(schema.mainEntity).toBeDefined();
      expect(schema.mainEntity["@type"]).toBe("Service");
      expect(schema.mainEntity.provider).toBeDefined();
      expect(schema.mainEntity.provider["@type"]).toBe("Organization");
      expect(schema.mainEntity.provider.name).toBe("Resource Pakistan (Pvt) Ltd");
      expect(schema.mainEntity.areaServed).toBeDefined();
      expect(schema.mainEntity.areaServed.name).toBe("Pakistan");
    }
  });

  it("should have contact information in contact page schema", async () => {
    const { pageSchemas } = await import("../client/src/lib/seo-config");

    const contactSchema = pageSchemas.contact as any;
    expect(contactSchema.mainEntity).toBeDefined();
    expect(contactSchema.mainEntity["@type"]).toBe("Organization");
    expect(contactSchema.mainEntity.contactPoint).toBeDefined();
    expect(contactSchema.mainEntity.contactPoint.email).toContain("@");
  });
});

describe("buildPageJsonLd", () => {
  it("should return an array of 4 schemas for each page", async () => {
    const { buildPageJsonLd } = await import("../client/src/lib/seo-config");

    const requiredPages = ["home", "about", "consultancy", "mining", "evs", "governance", "contact"] as const;

    for (const page of requiredPages) {
      const schemas = buildPageJsonLd(page);
      expect(Array.isArray(schemas)).toBe(true);
      expect(schemas.length).toBe(4);
    }
  });

  it("should include Organization schema as first element", async () => {
    const { buildPageJsonLd } = await import("../client/src/lib/seo-config");

    const schemas = buildPageJsonLd("home");
    expect((schemas[0] as any)["@type"]).toBe("Organization");
  });

  it("should include WebSite schema as second element", async () => {
    const { buildPageJsonLd } = await import("../client/src/lib/seo-config");

    const schemas = buildPageJsonLd("home");
    expect((schemas[1] as any)["@type"]).toBe("WebSite");
  });

  it("should include BreadcrumbList schema as third element", async () => {
    const { buildPageJsonLd } = await import("../client/src/lib/seo-config");

    const schemas = buildPageJsonLd("home");
    expect((schemas[2] as any)["@type"]).toBe("BreadcrumbList");
  });

  it("should produce valid JSON for all schemas", async () => {
    const { buildPageJsonLd } = await import("../client/src/lib/seo-config");

    const requiredPages = ["home", "about", "consultancy", "mining", "evs", "governance", "contact"] as const;

    for (const page of requiredPages) {
      const schemas = buildPageJsonLd(page);
      for (const schema of schemas) {
        const json = JSON.stringify(schema);
        expect(json).toBeTruthy();
        const parsed = JSON.parse(json);
        expect(parsed["@context"]).toBe("https://schema.org");
      }
    }
  });
});
