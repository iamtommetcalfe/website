<script>
// Import necessary components and views
import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import MrRobot from "./components/MrRobot.vue";
import NotFound from "./views/NotFound.vue";
import Homepage from "./views/Homepage.vue";
import About from "./views/About.vue";

// Define the routing configuration as an object
const routes = {
  '/': Homepage,
  '/not-found': NotFound,
  '/about': About
}

// The main Vue.js application component
export default {
  name: 'App',
  components: {
    // Register the imported components
    MrRobot,
    Footer,
    Header,
    NotFound,
    Homepage,
    About
  },
  data() {
    // Store the current path in the component's data
    return {
      currentPath: window.location.hash
    }
  },
  computed: {
    // Determine the current view based on the current path
    currentView() {
      return routes[this.currentPath.slice(1) || '/'] || NotFound
    }
  },
  mounted() {
    // Update the current path when the window's hash changes
    window.addEventListener('hashchange', () => {
      this.currentPath = window.location.hash
    })
  }
}
</script>
<template>
  <div>
    <header id="header-container">
      <Header/>
    </header>
    <section id="mainContent">
      <div id="mainContentWrapper">
        <component :is="currentView" />
      </div>
    </section>
    <footer>
      <Footer/>
    </footer>
    <div>
      <MrRobot/>
    </div>
  </div>
</template>
