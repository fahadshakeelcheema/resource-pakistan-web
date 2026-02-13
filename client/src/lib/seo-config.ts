/**
 * SEO Configuration for Resource Pakistan Website
 * Centralized metadata for all pages
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
    canonicalUrl: `${baseUrl}/evs-technology`,
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

/**
 * Organization structured data for JSON-LD
 */
export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "Resource Pakistan (Pvt) Ltd",
  "alternateName": "Resource Pakistan",
  "url": baseUrl,
  "logo": `${baseUrl}/images/resource-pakistan-logo-hq.png`,
  "description": "Strategic development across mining, consultancy, electric vehicles, and industrial technology in Pakistan.",
  "address": {
    "@type": "PostalAddress",
    "addressCountry": "PK",
  },
  "contactPoint": {
    "@type": "ContactPoint",
    "contactType": "Business Inquiries",
    "email": "contact@resourcepakistan.com",
  },
  "sameAs": [],
};
