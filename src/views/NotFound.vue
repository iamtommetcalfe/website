<template>
  <div id="notFoundContainer">
      <picture>
        <source :srcset="deadLinkWEBP" type="image/webp">
        <source :srcset="deadLinkJPEG" type="image/jpg">
        <img :src="deadLinkJPEG"
             id="notFoundImage"
             alt="Oops! You found a dead link.">
      </picture>
  </div>
</template>

<script setup>
import deadLinkWEBP from '/public/img/dead-link.webp';
import deadLinkJPEG from '/public/img/dead-link.jpeg';
</script>

<style scoped>
#notFoundContainer {
  width:100%;
  text-align: center;
}

#notFoundImage {
  max-width:600px;
  width:100%;
}
</style>
