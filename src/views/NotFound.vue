<template>
  <div id="notFoundContainer">
    <picture>
      <source :srcset="deadLinkWEBP" type="image/webp" />
      <source :srcset="deadLinkJPEG" type="image/jpg" />
      <img id="notFoundImage" :src="deadLinkJPEG" alt="Oops! You found a dead link." />
    </picture>
  </div>
</template>

<script setup lang="ts">
import deadLinkWEBP from '@/assets/images/dead-link.webp';
import deadLinkJPEG from '@/assets/images/dead-link.jpeg';
import { useSeo } from '@/composables/useSeo';

// Set SEO metadata for the 404 page
useSeo({
  title: '404 - Page Not Found | Tom Stirrop-Metcalfe',
  description:
    'Oops! The page you are looking for does not exist. Please check the URL or navigate back to the homepage.',
  // We don't set a canonical URL for 404 pages as they shouldn't be indexed
});

// Add noindex meta tag for 404 pages
if (typeof document !== 'undefined') {
  const metaRobots = document.createElement('meta');
  metaRobots.setAttribute('name', 'robots');
  metaRobots.setAttribute('content', 'noindex, nofollow');
  document.head.appendChild(metaRobots);
}
</script>

<style scoped>
#notFoundContainer {
  width: 100%;
  text-align: center;
}

#notFoundImage {
  max-width: 600px;
  width: 100%;
}
</style>
