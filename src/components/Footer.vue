<template>
  <div id="footerContainer" :class="{ 'dark-theme': isDarkTheme }">
    <div id="location">
      <b>Location</b> - <small>Engineering Function Manager @ Amiqus - Birmingham</small>
    </div>
    <div id="social">
      <button @click="toggleTheme" id="themeToggle" :title="themeButtonTitle">
        {{ themeButtonText }}
      </button>
      <a href="https://github.com/iamtommetcalfe" title="Tom Metcalfe - Github Profile">
        <picture class="tom-metcalfe-image">
          <source :srcset="githubIconWEBP" type="image/webp">
          <source :srcset="githubIconPNG" type="image/png">
          <img :src="githubIconPNG" alt="Tom Metcalfe - Github Profile" width="15" height="14">
        </picture>
      </a>
      <a href="https://www.linkedin.com/in/iamtomstirropmetcalfe/" title="Tom Metcalfe - LinkedIn Profile">
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

<script>
import { mapGetters, mapActions } from 'vuex';
import linkedInIconWEBP from '/img/linked-in-icon.webp';
import linkedInIconPNG from '/img/linked-in-icon.png';
import githubIconWEBP from '/img/github-icon.webp';
import githubIconPNG from '/img/github-icon.png';

export default {
  name: 'Footer',
  data() {
    return {
      linkedInIconWEBP,
      linkedInIconPNG,
      githubIconWEBP,
      githubIconPNG
    };
  },
  computed: {
    ...mapGetters({
      currentTheme: 'currentTheme'
    }),
    isDarkTheme() {
      return this.currentTheme === 'dark';
    },
    themeButtonText() {
      return this.isDarkTheme ? '☀️' : '🌙';
    },
    themeButtonTitle() {
      return this.isDarkTheme ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    }
  },
  methods: {
    ...mapActions(['toggleTheme'])
  }
}
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
  display: flex;
  align-items: center;
}

#social a {
  padding-left:10px;
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
</style>
