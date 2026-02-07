<template>
  <div class="mobile-nav-wrapper">
    <!-- Mobile Navigation Button -->
    <div
      class="hamburger-menu"
      :class="{ active: isMobileMenuOpen }"
      aria-label="Toggle mobile menu"
      role="button"
      :aria-expanded="isMobileMenuOpen"
      @click="toggleMobileMenu"
    >
      <span></span>
      <span></span>
      <span></span>
    </div>

    <!-- Mobile Navigation Menu -->
    <div class="mobile-nav" :class="{ open: isMobileMenuOpen }">
      <ul>
        <li>
          <router-link
            to="/about/"
            title="About Tom Stirrop-Metcalfe"
            aria-current-value="page"
            @click="closeMobileMenu"
          >
            About
          </router-link>
        </li>
        <li>
          <router-link
            to="/projects/"
            title="Tom Stirrop-Metcalfe's Projects"
            aria-current-value="page"
            @click="closeMobileMenu"
          >
            Projects
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMobileMenu } from '@/composables/useMobileMenu';

const { isMobileMenuOpen, toggleMobileMenu, closeMobileMenu } = useMobileMenu();
</script>

<style scoped>
/* Mobile Navigation Wrapper */
.mobile-nav-wrapper {
  display: none;
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
  padding: 10px;
  margin: -10px;
  margin-right: 5px;
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
  background-color: var(--color-bg-header);
  z-index: 999;
  padding-top: 80px;
  transform: translateY(-100%);
  transition: transform 0.3s ease;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  box-sizing: border-box;
}

.mobile-nav.open {
  transform: translateY(0);
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
  color: var(--color-text-inverse);
  font-weight: 900;
  font-size: 24px;
  text-decoration: none;
}

@media screen and (max-width: 768px) {
  .mobile-nav-wrapper {
    display: block;
  }

  .hamburger-menu {
    display: flex;
    position: absolute;
    top: 60%;
    transform: translateY(-50%);
    right: 15px;
  }

  .mobile-nav {
    display: block;
  }
}
</style>
