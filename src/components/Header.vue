<template>
  <nav :class="{ 'dark-theme': isDarkTheme }">
    <div id="logoContainer">
      <router-link
        id="homepageTitle"
        to="/"
        title="Tom Stirrop-Metcalfe | Software Engineering Manager | Birmingham | Homepage"
      >
        Tom Stirrop-Metcalfe <span>.</span>
      </router-link>

      <!-- Desktop Navigation -->
      <div id="navBar" class="desktop-nav">
        <ul>
          <li>
            <router-link to="/about/" title="About Tom Stirrop-Metcalfe">About</router-link>
          </li>
          <li>
            <router-link to="/projects/" title="Tom Stirrop-Metcalfe's Projects"
              >Projects</router-link
            >
          </li>
        </ul>
      </div>

      <!-- Mobile Navigation Button -->
      <div class="hamburger-menu" :class="{ active: isMobileMenuOpen }" @click="toggleMobileMenu">
        <span></span>
        <span></span>
        <span></span>
      </div>

      <!-- Mobile Navigation Menu -->
      <div class="mobile-nav" :class="{ open: isMobileMenuOpen }">
        <ul>
          <li>
            <router-link to="/about/" title="About Tom Stirrop-Metcalfe" @click="closeMobileMenu"
              >About</router-link
            >
          </li>
          <li>
            <router-link
              to="/projects/"
              title="Tom Stirrop-Metcalfe's Projects"
              @click="closeMobileMenu"
              >Projects</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { useTheme } from '@/composables/useTheme';
import { ref } from 'vue';

// Use the theme composable
const { isDarkTheme } = useTheme();

// Mobile menu state
const isMobileMenuOpen = ref(false);

// Toggle mobile menu
const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;

  // Prevent scrolling when menu is open
  if (isMobileMenuOpen.value) {
    document.body.style.overflow = 'hidden';
  } else {
    document.body.style.overflow = '';
  }
};

// Close mobile menu
const closeMobileMenu = () => {
  isMobileMenuOpen.value = false;
  document.body.style.overflow = '';
};
</script>

<style scoped>
nav {
  background-color: #303030;
  width: 100%;
  height: 64px;
  font-family:
    -apple-system,
    BlinkMacSystemFont,
    avenir next,
    avenir,
    helvetica neue,
    helvetica,
    ubuntu,
    roboto,
    noto,
    segoe ui,
    arial,
    sans-serif;
  transition: background-color 0.3s ease;
  position: relative;
}

nav.dark-theme {
  background-color: #121212;
}

#homepageTitle {
  color: #fff;
  font-weight: 900;
  font-size: 28px;
  text-decoration: none;
}

#homepageTitle span {
  color: #00b3fe;
  padding-left: 3px;
  text-decoration: none;
}

#logoContainer {
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  max-width: 64rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  position: relative;
  box-sizing: border-box;
}

/* Desktop Navigation */
#navBar {
  width: auto;
}

#navBar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: flex-end;
}

#navBar ul li {
  margin-left: 25px;
}

#navBar ul li:first-child {
  margin-left: 0;
}

#navBar ul li a {
  color: #fff;
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
}

/* Hamburger Menu Button */
.hamburger-menu {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 30px;
  height: 21px;
  cursor: pointer;
  z-index: 1000;
  position: relative;
  padding: 10px; /* Add padding to increase the clickable area */
  margin: -10px; /* Offset the padding to maintain visual size */
  margin-right: 5px; /* Ensure it's not too close to the edge */
}

.hamburger-menu span {
  display: block;
  height: 3px;
  width: 100%;
  background-color: white;
  border-radius: 3px;
  transition: all 0.3s ease;
}

/* Hamburger Animation */
.hamburger-menu.active span:nth-child(1) {
  transform: translateY(9px) rotate(45deg);
}

.hamburger-menu.active span:nth-child(2) {
  opacity: 0;
}

.hamburger-menu.active span:nth-child(3) {
  transform: translateY(-9px) rotate(-45deg);
}

/* Mobile Navigation Menu */
.mobile-nav {
  display: none;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #303030;
  z-index: 999;
  padding-top: 80px;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  width: 100%; /* Ensure it takes up the full width */
  max-width: 100vw; /* Limit to viewport width */
  overflow-x: hidden; /* Prevent horizontal scrolling */
  box-sizing: border-box; /* Include padding in width calculation */
}

.mobile-nav.open {
  transform: translateY(0);
}

.dark-theme .mobile-nav {
  background-color: #121212;
}

.mobile-nav ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mobile-nav ul li {
  margin: 15px 0;
}

.mobile-nav ul li a {
  color: #fff;
  font-weight: 900;
  font-size: 24px;
  text-decoration: none;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  .hamburger-menu {
    display: flex;
    position: absolute; /* Position it absolutely within the container */
    top: 60%; /* Center vertically */
    transform: translateY(-50%); /* Adjust for perfect vertical centering */
    right: 15px; /* Position from the right edge with some margin */
  }

  .mobile-nav {
    display: block;
  }

  /* Ensure the logo container has proper spacing */
  #logoContainer {
    padding-right: 15px; /* Add extra padding on the right for the hamburger menu */
  }
}
</style>
