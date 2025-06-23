<template>
  <div :class="{ 'dark-theme': isDarkTheme }">
    <header id="header-container">
      <Header />
    </header>
    <section id="mainContent">
      <div id="mainContentWrapper">
        <router-view />
      </div>
    </section>
    <footer>
      <Footer />
    </footer>
    <div>
      <MrRobot />
    </div>
  </div>
</template>

<script setup lang="ts">
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import MrRobot from './components/MrRobot.vue';
import { useTheme } from './composables/useTheme';

// Use the theme composable
const { isDarkTheme } = useTheme();
</script>

<style>
/* Global styles */
html {
  background-color: #ffffff;
  transition: background-color 0.3s ease;
}

html.dark-mode {
  background-color: #121212;
}

body {
  margin: 0;
  padding: 0;
  background-color: #f2f2f2;
  color: #333;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.dark-theme {
  background-color: #1e1e1e;
  color: #f2f2f2;
}

.dark-theme #mainContent {
  background-color: #1e1e1e;
}

.dark-theme #mainContentWrapper {
  background-color: #1e1e1e;
}

.dark-theme footer {
  background-color: #121212;
  color: #f2f2f2;
}
</style>
