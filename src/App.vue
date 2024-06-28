<template>
  <div>
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

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
import MrRobot from './components/MrRobot.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    MrRobot,
  },
};
</script>