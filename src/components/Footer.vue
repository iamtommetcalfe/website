<template>
  <div id="footerContainer" :class="{ 'dark-theme': isDarkTheme }">
    <div id="location">
      <b>Location</b> - <small>Engineering Function Manager @ Amiqus - Birmingham</small>
    </div>
    <div id="social">
      <button id="themeToggle" :title="themeButtonTitle" @click="toggleTheme">
        {{ themeButtonText }}
      </button>
      <a href="https://github.com/iamtommetcalfe" title="Tom Stirrop-Metcalfe - Github Profile">
        <picture class="tom-metcalfe-image">
          <source :srcset="githubIconWEBP" type="image/webp" />
          <source :srcset="githubIconPNG" type="image/png" />
          <img
            :src="githubIconPNG"
            alt="Tom Stirrop-Metcalfe - Github Profile"
            width="15"
            height="14"
          />
        </picture>
      </a>
      <a
        href="https://www.linkedin.com/in/iamtomstirropmetcalfe/"
        title="Tom Stirrop-Metcalfe - LinkedIn Profile"
      >
        <picture class="tom-metcalfe-image">
          <source :srcset="linkedInIconWEBP" type="image/webp" />
          <source :srcset="linkedInIconPNG" type="image/png" />
          <img
            :src="linkedInIconPNG"
            alt="Tom Stirrop-Metcalfe - LinkedIn Profile"
            width="15"
            height="14"
          />
        </picture>
      </a>
    </div>

    <div class="clearAfter"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import linkedInIconWEBP from '@/assets/images/linked-in-icon.webp';
import linkedInIconPNG from '@/assets/images/linked-in-icon.png';
import githubIconWEBP from '@/assets/images/github-icon.webp';
import githubIconPNG from '@/assets/images/github-icon.png';
import { useTheme } from '@/composables/useTheme';

// Use the theme composable
const { isDarkTheme, toggleTheme } = useTheme();

// Computed properties for theme button
const themeButtonText = computed(() => (isDarkTheme.value ? '☀️' : '🌙'));
const themeButtonTitle = computed(() =>
  isDarkTheme.value ? 'Switch to Light Mode' : 'Switch to Dark Mode'
);
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
  float: right;
  display: flex;
  align-items: center;
}

#social a {
  padding-left: 10px;
}

#themeToggle {
  background: none;
  border: none;
  color: #333;
  cursor: pointer;
  font-size: 16px;
  margin-right: 10px;
  padding: 5px;
  border-radius: 50%;
  transition: background-color 0.3s ease;
}

.dark-theme #themeToggle {
  color: #f2f2f2;
}

#themeToggle:hover {
  background-color: rgba(0, 0, 0, 0.1);
}

.dark-theme #themeToggle:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

#themeToggle:focus {
  outline: none;
  box-shadow: 0 0 0 2px #00b3fe;
}

.build-info {
  position: fixed;
  bottom: 5px;
  right: 5px;
  font-size: 10px;
  color: #999;
  cursor: pointer;
  z-index: 1000;
  opacity: 0.5;
  transition: opacity 0.3s ease;
}

.build-info:hover {
  opacity: 1;
}

.build-dot {
  display: inline-block;
  width: 6px;
  height: 6px;
  background-color: #999;
  border-radius: 50%;
}

.dark-theme .build-dot {
  background-color: #666;
}

.refresh-button {
  background: none;
  border: none;
  color: #999;
  cursor: pointer;
  font-size: 12px;
  margin-left: 5px;
  padding: 0;
  transition: transform 0.3s ease;
}

.refresh-button:hover {
  transform: rotate(180deg);
  color: #00b3fe;
}

.dark-theme .refresh-button:hover {
  color: #00b3fe;
}
</style>
