<template>
  <div id="footerContainer">
    <div id="location">
      <b>Location</b> - <small>Software Engineering Manager @ Amiqus - Birmingham</small>
    </div>
    <div id="social">
      <a href="https://github.com/iamtommetcalfe" title="Tom Metcalfe - Github Profile">
        <picture class="tom-metcalfe-image">
          <source :srcset="githubIconWEBP" type="image/webp">
          <source :srcset="githubIconPNG" type="image/png">
          <img :src="githubIconPNG" alt="Tom Metcalfe - Github Profile" width="15" height="14">
        </picture>
      </a>
      <a href="https://www.linkedin.com/in/iamtommetcalfe/" title="Tom Metcalfe - LinkedIn Profile">
        <picture class="tom-metcalfe-image">
          <source :srcset="linkedInIconWEBP" type="image/webp">
          <source :srcset="linkedInIconPNG" type="image/png">
          <img :src="linkedInIconPNG" alt="Tom Metcalfe - LinkedIn Profile" width="15" height="14">
        </picture>
      </a>
    </div>

    <div class="clearAfter"></div>
  </div>
</template>

<script setup>
import linkedInIconWEBP from '/public/img/linked-in-icon.webp';
import linkedInIconPNG from '/public/img/linked-in-icon.png';
import githubIconWEBP from '/public/img/github-icon.webp';
import githubIconPNG from '/public/img/github-icon.png';
</script>

<style scoped>
#footerContainer {
  padding: 0.75rem;
}

#location {
  float: left;
  font-size: 12px;
  margin-top: 0;
  text-align: justify;
}

#social {
  float:right;
}

#social a {
  padding-left:10px;
}

</style>
