<template>
  <header id="header-container">
    <nav>
      <div id="logoContainer">
        <router-link
          id="homepageTitle"
          to="/"
          title="Tom Stirrop-Metcalfe | Engineering Leader | Homepage"
        >
          Tom Stirrop-Metcalfe <span>.</span>
        </router-link>

        <!-- Desktop Navigation -->
        <div id="navBar" class="desktop-nav">
          <ul>
            <li>
              <router-link to="/about/" title="About Tom Stirrop-Metcalfe" aria-current-value="page"
                >About</router-link
              >
            </li>
            <li>
              <router-link
                to="/projects/"
                title="Tom Stirrop-Metcalfe's Projects"
                aria-current-value="page"
                >Projects</router-link
              >
            </li>
          </ul>
        </div>

        <!-- Mobile Navigation -->
        <MobileNav />
      </div>
    </nav>
  </header>
</template>

<script setup lang="ts">
import MobileNav from '@/components/MobileNav.vue';
</script>

<style scoped>
nav {
  background-color: var(--color-bg-header);
  width: 100%;
  height: 64px;
  transition: background-color 0.3s ease;
  position: relative;
}

#homepageTitle {
  color: var(--color-text-inverse);
  font-weight: 900;
  font-size: 28px;
  text-decoration: none;
}

#homepageTitle span {
  color: var(--color-primary);
  padding-left: 3px;
  text-decoration: none;
}

#logoContainer {
  margin-right: auto;
  margin-left: auto;
  width: 100%;
  max-width: var(--max-width);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md);
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
  color: var(--color-text-inverse);
  font-weight: 900;
  font-size: 18px;
  text-decoration: none;
}

/* Responsive Styles */
@media screen and (max-width: 768px) {
  .desktop-nav {
    display: none;
  }

  /* Ensure the logo container has proper spacing */
  #logoContainer {
    padding-right: 15px; /* Add extra padding on the right for the hamburger menu */
  }
}
</style>
