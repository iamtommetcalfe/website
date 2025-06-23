<template>
  <!-- This component serves the sitemap.xml content directly -->
  <div ref="container"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Sitemap',
  data() {
    return {
      // Raw sitemap content (not HTML escaped)
      rawSitemapContent: `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://iamtommetcalfe.com/</loc>
    <lastmod>2023-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>1.0</priority>
  </url>
  <url>
    <loc>https://iamtommetcalfe.com/about</loc>
    <lastmod>2023-07-01</lastmod>
    <changefreq>monthly</changefreq>
    <priority>0.8</priority>
  </url>
</urlset>`
    };
  },
  mounted() {
    // Set the content type to XML
    document.title = 'Sitemap';

    // Set the content type header
    const metaContentType = document.createElement('meta');
    metaContentType.httpEquiv = 'Content-Type';
    metaContentType.content = 'text/xml; charset=UTF-8';
    document.head.appendChild(metaContentType);

    // Replace the entire HTML document with the raw XML
    document.open('text/xml');
    document.write(this.rawSitemapContent);
    document.close();
  },
  beforeUnmount() {
    // This won't actually be called since we've replaced the entire document
  }
});
</script>

