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
