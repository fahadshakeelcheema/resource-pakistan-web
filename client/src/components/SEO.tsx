import { useEffect } from 'react';
import { SEOMetadata } from '@/lib/seo-config';

interface SEOProps {
  metadata: SEOMetadata;
  /** Single JSON-LD object or array of JSON-LD objects */
  jsonLd?: object | object[];
}

/**
 * SEO Component
 * Dynamically updates meta tags and injects JSON-LD structured data for each page.
 * Supports multiple JSON-LD blocks (Organization, WebSite, BreadcrumbList, page-specific).
 */
export function SEO({ metadata, jsonLd }: SEOProps) {
  useEffect(() => {
    // Update document title
    document.title = metadata.title;

    // Helper function to update or create meta tag
    const updateMetaTag = (selector: string, content: string) => {
      let element = document.querySelector(selector);
      if (!element) {
        element = document.createElement('meta');
        const match = selector.match(/\[(.+?)="(.+?)"\]/);
        if (match) {
          const [, attr, value] = match;
          element.setAttribute(attr, value);
          document.head.appendChild(element);
        }
      }
      if (element) {
        element.setAttribute('content', content);
      }
    };

    // Update standard meta tags
    updateMetaTag('meta[name="description"]', metadata.description);
    if (metadata.keywords) {
      updateMetaTag('meta[name="keywords"]', metadata.keywords);
    }

    // Update Open Graph tags
    updateMetaTag('meta[property="og:title"]', metadata.title);
    updateMetaTag('meta[property="og:description"]', metadata.description);
    updateMetaTag('meta[property="og:type"]', metadata.ogType || 'website');
    updateMetaTag('meta[property="og:site_name"]', 'Resource Pakistan');
    if (metadata.ogImage) {
      updateMetaTag('meta[property="og:image"]', metadata.ogImage);
    }
    if (metadata.canonicalUrl) {
      updateMetaTag('meta[property="og:url"]', metadata.canonicalUrl);
    }

    // Update Twitter Card tags
    updateMetaTag('meta[name="twitter:card"]', 'summary_large_image');
    updateMetaTag('meta[name="twitter:title"]', metadata.title);
    updateMetaTag('meta[name="twitter:description"]', metadata.description);
    if (metadata.ogImage) {
      updateMetaTag('meta[name="twitter:image"]', metadata.ogImage);
    }

    // Update canonical URL
    if (metadata.canonicalUrl) {
      let linkElement = document.querySelector('link[rel="canonical"]');
      if (!linkElement) {
        linkElement = document.createElement('link');
        linkElement.setAttribute('rel', 'canonical');
        document.head.appendChild(linkElement);
      }
      linkElement.setAttribute('href', metadata.canonicalUrl);
    }

    // Update JSON-LD structured data
    // Remove all existing JSON-LD scripts first (clean slate per page)
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"][data-seo-managed]');
    existingScripts.forEach(script => script.remove());

    if (jsonLd) {
      const schemas = Array.isArray(jsonLd) ? jsonLd : [jsonLd];
      schemas.forEach((schema, index) => {
        const scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        scriptElement.setAttribute('data-seo-managed', 'true');
        scriptElement.setAttribute('data-schema-index', String(index));
        scriptElement.textContent = JSON.stringify(schema);
        document.head.appendChild(scriptElement);
      });
    }

    // Cleanup on unmount: remove managed JSON-LD scripts
    return () => {
      const managedScripts = document.querySelectorAll('script[type="application/ld+json"][data-seo-managed]');
      managedScripts.forEach(script => script.remove());
    };
  }, [metadata, jsonLd]);

  return null; // This component doesn't render anything
}
