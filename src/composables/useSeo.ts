import { watch, onMounted, onServerPrefetch, useSSRContext } from 'vue';
import { useRoute } from 'vue-router';

/**
 * Interface for structured data (JSON-LD)
 */
interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
}

/**
 * Interface for SEO metadata
 */
interface SeoMetadata {
  title: string;
  description: string;
  canonicalUrl?: string;
  structuredData?: StructuredData | StructuredData[];
}

/**
 * Composable for managing SEO metadata
 *
 * This composable provides functionality for setting and updating SEO metadata
 * including title, description, and canonical URL. It works in both client-side
 * and server-side rendering contexts, ensuring proper SEO for static site generation.
 *
 * @param {SeoMetadata} metadata - The SEO metadata to set
 * @returns {void}
 *
 * @example
 * // Basic usage in a page component
 * useSeo({
 *   title: 'About - Tom Stirrop-Metcalfe',
 *   description: 'Learn more about Tom Stirrop-Metcalfe, a passionate and committed engineering leader.',
 *   canonicalUrl: 'https://iamtommetcalfe.com/about/'
 * });
 */
export function useSeo(metadata: SeoMetadata): void {
  const route = useRoute();

  // Function to update the document's metadata
  const updateMetadata = () => {
    // Skip in server environment
    if (typeof document === 'undefined') return;

    // Update the document title
    document.title = metadata.title;

    // Update meta description
    let metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', metadata.description);
    } else {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      metaDescription.setAttribute('content', metadata.description);
      document.head.appendChild(metaDescription);
    }

    // Update Open Graph and Twitter meta tags
    updateSocialMetaTags(metadata.title, metadata.description);

    // Update canonical URL
    const canonicalUrl = metadata.canonicalUrl || `https://iamtommetcalfe.com${route.path}`;
    updateCanonicalUrl(canonicalUrl);

    // Update Open Graph URL
    const ogUrl = document.querySelector('meta[property="og:url"]');
    if (ogUrl) {
      ogUrl.setAttribute('content', canonicalUrl);
    }

    // Update Twitter URL
    const twitterUrl = document.querySelector('meta[name="twitter:url"]');
    if (twitterUrl) {
      twitterUrl.setAttribute('content', canonicalUrl);
    }

    // Update structured data (JSON-LD)
    if (metadata.structuredData) {
      updateStructuredData(metadata.structuredData);
    }
  };

  // Function to update structured data (JSON-LD)
  const updateStructuredData = (data: StructuredData | StructuredData[]) => {
    // Remove any existing JSON-LD scripts
    const existingScripts = document.querySelectorAll('script[type="application/ld+json"]');
    existingScripts.forEach((script) => {
      script.remove();
    });

    // Convert single object to array for consistent handling
    const dataArray = Array.isArray(data) ? data : [data];

    // Create and append new JSON-LD scripts
    dataArray.forEach((item) => {
      const script = document.createElement('script');
      script.setAttribute('type', 'application/ld+json');
      script.textContent = JSON.stringify(item);
      document.head.appendChild(script);
    });
  };

  // Function to update Open Graph and Twitter meta tags
  const updateSocialMetaTags = (title: string, description: string) => {
    // Update Open Graph title
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title);
    }

    // Update Open Graph description
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
      ogDescription.setAttribute('content', description);
    }

    // Update Twitter title
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
      twitterTitle.setAttribute('content', title);
    }

    // Update Twitter description
    const twitterDescription = document.querySelector('meta[name="twitter:description"]');
    if (twitterDescription) {
      twitterDescription.setAttribute('content', description);
    }
  };

  // Function to update canonical URL
  const updateCanonicalUrl = (url: string) => {
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonicalLink) {
      canonicalLink.setAttribute('href', url);
    } else {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      canonicalLink.setAttribute('href', url);
      document.head.appendChild(canonicalLink);
    }
  };

  // Handle SSR context
  if (typeof window === 'undefined') {
    try {
      const ssrContext = useSSRContext();
      if (ssrContext) {
        // Add SEO metadata to SSR context for vite-ssg
        ssrContext.seoMeta = {
          title: metadata.title,
          description: metadata.description,
          canonicalUrl: metadata.canonicalUrl || `https://iamtommetcalfe.com${route.path}`,
          structuredData: metadata.structuredData,
        };
      }
    } catch (e) {
      // useSSRContext() can only be used during SSR
      // This is fine, we'll just continue
    }
  }

  // Update metadata when the component is mounted (client-side)
  onMounted(() => {
    updateMetadata();
  });

  // Handle server-side prefetching
  onServerPrefetch(() => {
    // This will be called during SSR
    // We don't need to do anything here as we've already set the SSR context
    return Promise.resolve();
  });

  // Watch for route changes and update metadata accordingly (client-side)
  watch(
    () => route.path,
    () => {
      updateMetadata();
    }
  );
}
