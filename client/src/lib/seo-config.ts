/**
 * SEO Configuration for Resource Pakistan Website
 * Centralized metadata and structured data schemas for all pages
 */

export interface SEOMetadata {
  title: string;
  description: string;
  keywords?: string;
  ogImage?: string;
  ogType?: string;
  canonicalUrl?: string;
}

const baseUrl = typeof window !== 'undefined' ? window.location.origin : 'https://resourcepakistan.com';
const defaultOgImage = `${baseUrl}/images/resource-pakistan-og-image.png`;
const logoUrl = `${baseUrl}/images/resource-pakistan-logo-hq.png`;

// ─── Page Metadata ───────────────────────────────────────────────

export const seoConfig: Record<string, SEOMetadata> = {
  home: {
    title: "Resource Pakistan - Building Pakistan's Industrial Future",
    description: "Strategic development across mining, consultancy, electric vehicles, and industrial technology for sustainable economic growth.",
    keywords: "resource development pakistan, mining consultancy, electric vehicles pakistan, industrial technology, mineral development, policy advisory, sustainable resource management",
    ogImage: defaultOgImage,
    ogType: "website",
    canonicalUrl: `${baseUrl}/`,
  },
  about: {
    title: "About Us - Resource Pakistan",
    description: "Institutional approach to resource development with strategic partnerships across government and industry for sustainable growth.",
    keywords: "about resource pakistan, company profile, leadership team, institutional approach, sustainable development, strategic partnerships",
    ogImage: defaultOgImage,
    ogType: "website",
    canonicalUrl: `${baseUrl}/about`,
  },
  consultancy: {
    title: "Consultancy & Advisory - Resource Pakistan",
    description: "Strategic planning and advisory services for government bodies and institutional stakeholders bridging policy with execution.",
    keywords: "consultancy services pakistan, policy advisory, strategic planning, government advisory, institutional consulting, resource management consulting",
    ogImage: defaultOgImage,
    ogType: "website",
    canonicalUrl: `${baseUrl}/consultancy`,
  },
  mining: {
    title: "Mining & Resources - Resource Pakistan",
    description: "Responsible mineral development through feasibility studies, compliance planning, and sustainable resource extraction.",
    keywords: "mining pakistan, mineral development, resource extraction, feasibility studies, sustainable mining, mineral exploration",
    ogImage: defaultOgImage,
    ogType: "website",
    canonicalUrl: `${baseUrl}/mining`,
  },
  evs: {
    title: "Electric Vehicles & Technology - Resource Pakistan",
    description: "Advancing Pakistan's EV ecosystem through technology integration, infrastructure development, and sustainable transportation.",
    keywords: "electric vehicles pakistan, EV technology, sustainable transportation, green technology, automotive innovation, EV infrastructure",
    ogImage: defaultOgImage,
    ogType: "website",
    canonicalUrl: `${baseUrl}/technology`,
  },
  governance: {
    title: "Governance & Compliance - Resource Pakistan",
    description: "Institutional governance framework ensuring transparency, accountability, regulatory compliance, and ethical business practices.",
    keywords: "corporate governance pakistan, compliance framework, transparency, accountability, ethical business practices, regulatory compliance",
    ogImage: defaultOgImage,
    ogType: "website",
    canonicalUrl: `${baseUrl}/governance`,
  },
  contact: {
    title: "Contact Us - Resource Pakistan",
    description: "Get in touch for inquiries about services, partnerships, or consultations. We respond within 2-3 business days.",
    keywords: "contact resource pakistan, business inquiries, partnership opportunities, project consultation, get in touch",
    ogImage: defaultOgImage,
    ogType: "website",
    canonicalUrl: `${baseUrl}/contact`,
  },
};

// ─── Organization Schema (site-wide) ────────────────────────────

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Resource Pakistan (Pvt) Ltd",
  "alternateName": "Resource Pakistan",
  "url": baseUrl,
  "logo": {
    "@type": "ImageObject",
    "url": logoUrl,
    "width": 512,
    "height": 512,
  },
  "image": defaultOgImage,
  "description": "Strategic development across mining, consultancy, electric vehicles, and industrial technology in Pakistan. Working with government bodies, institutional stakeholders, and strategic partners to advance feasibility-driven projects.",
  "foundingDate": "2024",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PK",
    "addressRegion": "Pakistan",
  },
  "areaServed": {
    "@type": "Country",
    "name": "Pakistan",
  },
  "contactPoint": [
    {
      "@type": "ContactPoint",
      "contactType": "Business Inquiries",
      "email": "contact@resourcepakistan.com",
      "availableLanguage": ["English", "Urdu"],
    },
  ],
  "knowsAbout": [
    "Mining & Resource Development",
    "Consultancy & Advisory Services",
    "Electric Vehicles & Technology",
    "Industrial Planning",
    "Feasibility Studies",
    "Government Policy Advisory",
  ],
  "sameAs": [],
};

// ─── WebSite Schema (site-wide) ─────────────────────────────────

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "name": "Resource Pakistan",
  "alternateName": "Resource Pakistan (Pvt) Ltd",
  "url": baseUrl,
  "description": "Official website of Resource Pakistan (Pvt) Ltd — strategic development across mining, consultancy, electric vehicles, and industrial technology.",
  "publisher": {
    "@type": "Organization",
    "name": "Resource Pakistan (Pvt) Ltd",
    "logo": {
      "@type": "ImageObject",
      "url": logoUrl,
    },
  },
  "inLanguage": "en",
};

// ─── Breadcrumb Helpers ─────────────────────────────────────────

interface BreadcrumbItem {
  name: string;
  url: string;
}

export function buildBreadcrumbSchema(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}

// Pre-built breadcrumbs for each page
export const breadcrumbs = {
  home: buildBreadcrumbSchema([
    { name: "Home", url: `${baseUrl}/` },
  ]),
  about: buildBreadcrumbSchema([
    { name: "Home", url: `${baseUrl}/` },
    { name: "About Us", url: `${baseUrl}/about` },
  ]),
  consultancy: buildBreadcrumbSchema([
    { name: "Home", url: `${baseUrl}/` },
    { name: "Sectors", url: `${baseUrl}/` },
    { name: "Consultancy & Advisory", url: `${baseUrl}/consultancy` },
  ]),
  mining: buildBreadcrumbSchema([
    { name: "Home", url: `${baseUrl}/` },
    { name: "Sectors", url: `${baseUrl}/` },
    { name: "Mining & Resources", url: `${baseUrl}/mining` },
  ]),
  evs: buildBreadcrumbSchema([
    { name: "Home", url: `${baseUrl}/` },
    { name: "Sectors", url: `${baseUrl}/` },
    { name: "Electric Vehicles & Technology", url: `${baseUrl}/technology` },
  ]),
  governance: buildBreadcrumbSchema([
    { name: "Home", url: `${baseUrl}/` },
    { name: "Governance", url: `${baseUrl}/governance` },
  ]),
  contact: buildBreadcrumbSchema([
    { name: "Home", url: `${baseUrl}/` },
    { name: "Contact", url: `${baseUrl}/contact` },
  ]),
};

// ─── Page-Specific Schemas ──────────────────────────────────────

export const pageSchemas = {
  home: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Resource Pakistan - Building Pakistan's Industrial Future",
    "description": "Strategic development across mining, consultancy, electric vehicles, and industrial technology for sustainable economic growth.",
    "url": `${baseUrl}/`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Resource Pakistan",
      "url": baseUrl,
    },
    "about": {
      "@type": "Organization",
      "name": "Resource Pakistan (Pvt) Ltd",
    },
    "primaryImageOfPage": {
      "@type": "ImageObject",
      "url": defaultOgImage,
    },
  },
  about: {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    "name": "About Resource Pakistan",
    "description": "Institutional approach to resource development with strategic partnerships across government and industry.",
    "url": `${baseUrl}/about`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Resource Pakistan",
      "url": baseUrl,
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Resource Pakistan (Pvt) Ltd",
      "description": "Resource Pakistan operates at the intersection of resource development, policy alignment, and long-term industrial planning.",
    },
  },
  consultancy: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Consultancy & Advisory Services",
    "description": "Strategic planning and advisory services for government bodies and institutional stakeholders.",
    "url": `${baseUrl}/consultancy`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Resource Pakistan",
      "url": baseUrl,
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Consultancy & Advisory",
      "provider": {
        "@type": "Organization",
        "name": "Resource Pakistan (Pvt) Ltd",
      },
      "description": "Strategic planning and advisory services for government bodies, think tanks, and institutional stakeholders. Bridging policy frameworks with operational execution.",
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan",
      },
      "serviceType": "Management Consulting",
    },
  },
  mining: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Mining & Resources",
    "description": "Responsible mineral development through feasibility studies, compliance planning, and sustainable resource extraction.",
    "url": `${baseUrl}/mining`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Resource Pakistan",
      "url": baseUrl,
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Mining & Resource Development",
      "provider": {
        "@type": "Organization",
        "name": "Resource Pakistan (Pvt) Ltd",
      },
      "description": "Comprehensive feasibility studies, compliance-oriented planning, and value-chain analysis for responsible mineral development in Pakistan.",
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan",
      },
      "serviceType": "Mining Consultancy",
    },
  },
  evs: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Electric Vehicles & Technology",
    "description": "Advancing Pakistan's EV ecosystem through technology integration, infrastructure development, and sustainable transportation.",
    "url": `${baseUrl}/technology`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Resource Pakistan",
      "url": baseUrl,
    },
    "mainEntity": {
      "@type": "Service",
      "name": "Electric Vehicles & Technology",
      "provider": {
        "@type": "Organization",
        "name": "Resource Pakistan (Pvt) Ltd",
      },
      "description": "Technology integration, EV infrastructure development, and sustainable transportation solutions for Pakistan's automotive future.",
      "areaServed": {
        "@type": "Country",
        "name": "Pakistan",
      },
      "serviceType": "Technology Consulting",
    },
  },
  governance: {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": "Governance & Compliance",
    "description": "Institutional governance framework ensuring transparency, accountability, and regulatory compliance.",
    "url": `${baseUrl}/governance`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Resource Pakistan",
      "url": baseUrl,
    },
  },
  contact: {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact Resource Pakistan",
    "description": "Get in touch for inquiries about services, partnerships, or consultations.",
    "url": `${baseUrl}/contact`,
    "isPartOf": {
      "@type": "WebSite",
      "name": "Resource Pakistan",
      "url": baseUrl,
    },
    "mainEntity": {
      "@type": "Organization",
      "name": "Resource Pakistan (Pvt) Ltd",
      "contactPoint": {
        "@type": "ContactPoint",
        "contactType": "Business Inquiries",
        "email": "contact@resourcepakistan.com",
        "availableLanguage": ["English", "Urdu"],
      },
    },
  },
};

// ─── Combined Schema Builder ────────────────────────────────────

/**
 * Builds a combined JSON-LD array for a given page.
 * Includes: Organization, WebSite, BreadcrumbList, and page-specific schema.
 */
export function buildPageJsonLd(pageKey: keyof typeof pageSchemas) {
  const schemas: object[] = [
    organizationSchema,
    websiteSchema,
  ];

  if (breadcrumbs[pageKey]) {
    schemas.push(breadcrumbs[pageKey]);
  }

  if (pageSchemas[pageKey]) {
    schemas.push(pageSchemas[pageKey]);
  }

  return schemas;
}
