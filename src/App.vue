<template>
  <div>
    <Header />
    <div id="mainContent">
      <div id="mainContentWrapper">
        <router-view />
      </div>
    </div>
    <Footer />
    <div>
      <MrRobot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import MrRobot from './components/MrRobot.vue';
</script>

<style>
/* Global styles */
html {
  background-color: #ffffff;
  transition: background-color 0.3s ease;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
  color: #333;
  transition:
    background-color 0.3s ease,
    color 0.3s ease;
}

/* Dark mode global styles */
.dark-mode {
  background-color: #111827;
}

.dark-mode body {
  background-color: #111827;
  color: #f9fafb;
}

.dark-mode #mainContent {
  background-color: #111827;
}

.dark-mode #mainContentWrapper {
  background-color: transparent;
}
</style>
