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
import { useHead } from '@unhead/vue';

// Set SEO metadata for the 404 page
useSeo({
  title: '404 - Page Not Found | Tom Stirrop-Metcalfe',
  description:
    'Oops! The page you are looking for does not exist. Please check the URL or navigate back to the homepage.',
  // No canonical for 404 pages; they shouldn't be indexed
});

// Declare robots meta via Unhead instead of direct DOM manipulation
useHead({
  meta: [{ name: 'robots', content: 'noindex, nofollow' }],
});
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
