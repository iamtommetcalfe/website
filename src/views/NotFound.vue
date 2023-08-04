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

<script>

export default {
  name: 'NotFound',
  data() {
    return {
      deadLinkWEBP: new URL('../assets/dead-link.webp', import.meta.url).href,
      deadLinkJPEG: new URL('../assets/dead-link.jpeg', import.meta.url).href
    };
  }
}

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
