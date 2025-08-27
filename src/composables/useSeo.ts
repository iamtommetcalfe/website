import { useHead } from '@unhead/vue';
import { useRoute } from 'vue-router';

/**
 * Interface for structured data (JSON-LD)
 */
interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: unknown;
}

/**
 * Interface for SEO metadata
 */
interface SeoMetadata {
  title?: string;
  description?: string;
  canonicalUrl?: string;
  structuredData?: StructuredData | StructuredData[];
}

/**
 * useSeo: Declarative head management using Unhead
 * Ensures metadata is rendered during SSG and on the client without manual DOM APIs.
 */
export function useSeo(metadata: SeoMetadata = {}): void {
  const route = useRoute();
  const domain = 'https://iamtommetcalfe.com';

  useHead(() => {
    // Prefer explicit metadata, fall back to route meta
    const routeMeta = (route.meta || {}) as { title?: string; description?: string };
    const title = metadata.title ?? routeMeta.title ?? 'Tom Stirrop-Metcalfe';
    const description = metadata.description ?? routeMeta.description ?? 'Engineering Leader.';

    const canonical = metadata.canonicalUrl || `${domain}${route.path}`;

    const metas = [
      { name: 'description', content: description },

      // Open Graph
      { property: 'og:type', content: 'website' },
      { property: 'og:title', content: title },
      { property: 'og:description', content: description },
      { property: 'og:url', content: canonical },

      // Twitter
      { name: 'twitter:card', content: 'summary' },
      { name: 'twitter:title', content: title },
      { name: 'twitter:description', content: description },
      { name: 'twitter:url', content: canonical },
    ];

    const scripts = [] as { type: string; children: string }[];
    if (metadata.structuredData) {
      const arr = Array.isArray(metadata.structuredData)
        ? metadata.structuredData
        : [metadata.structuredData];
      for (const item of arr) {
        scripts.push({ type: 'application/ld+json', children: JSON.stringify(item) });
      }
    }

    return {
      title,
      link: [{ rel: 'canonical', href: canonical }],
      meta: metas,
      script: scripts,
    };
  });
}
