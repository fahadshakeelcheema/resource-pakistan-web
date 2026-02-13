import { useEffect } from 'react';
import { SEOMetadata } from '@/lib/seo-config';

interface SEOProps {
  metadata: SEOMetadata;
  jsonLd?: object;
}

/**
 * SEO Component
 * Dynamically updates meta tags for each page
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
        const [attr, value] = selector.match(/\[(.+)="(.+)"\]/)?.slice(1, 3) || [];
        if (attr && value) {
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
    if (jsonLd) {
      let scriptElement = document.querySelector('script[type="application/ld+json"]');
      if (!scriptElement) {
        scriptElement = document.createElement('script');
        scriptElement.setAttribute('type', 'application/ld+json');
        document.head.appendChild(scriptElement);
      }
      scriptElement.textContent = JSON.stringify(jsonLd);
    }
  }, [metadata, jsonLd]);

  return null; // This component doesn't render anything
}
