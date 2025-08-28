<template>
  <div>
    <div id="titleContainer">
      <h1 class="pageTitle" title="Click to see a surprise" @click="showMrRobotPopup">Hello</h1>
      <p>
        My name is Tom Stirrop-Metcalfe, a passionate and committed engineering leader. With over 15
        years of experience in PHP programming and 10+ years leading teams, I am always ready to
        take on challenging and exciting projects.
      </p>
      <p>
        Throughout my career, I've consistently achieved significant impacts on process improvement,
        project success, and team motivation. I adhere to a philosophy of servant leadership, where
        I put my team's needs at the forefront, facilitating their professional development,
        encouraging innovative thinking, and nurturing a positive and productive work environment.
      </p>
      <p>
        As an engineering leader, my focus isn't just on technical aspects. I strive to bridge the
        gap between IT and the rest of the business, communicating effectively to ensure seamless
        collaboration and mutual understanding. I am an ardent follower of tech trends and have
        expertise in back-end systems development along with a multitude of other programming
        skills. My passion for continuous learning doesn't stop at me, I encourage and support my
        team's pursuit of knowledge as well.
      </p>
      <p>I can also do a Rubiks cube super fast. That's cool, right?</p>
    </div>

    <div id="imageContainer">
      <picture class="tom-metcalfe-image">
        <source :srcset="imageUrlWEBP" type="image/webp" />
        <source :srcset="imageUrlJPEG" type="image/jpeg" />
        <img
          :src="imageUrlJPEG"
          width="248"
          class="tom-metcalfe-image"
          height="248"
          loading="lazy"
          alt="Tom Stirrop-Metcalfe | Software Engineering Manager | Birmingham, United Kingdom"
        />
      </picture>
    </div>

    <!-- Mr. Robot Popup -->
    <MrRobotPopUp :is-visible="isPopupVisible" @close="closePopup" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, getCurrentInstance } from 'vue';
import imageUrlJPEG from '@/assets/images/tom-stirrop-metcalfe-obi.jpeg';
import imageUrlWEBP from '@/assets/images/tom-stirrop-metcalfe-obi.webp';
import { useSeo } from '@/composables/useSeo';

// Set SEO metadata for the Homepage
useSeo({
  title: 'Homepage | Tom Stirrop-Metcalfe | Engineering Leader',
  description:
    'My name is Tom Stirrop-Metcalfe. I am a passionate and driven engineering leader who wants to enable others to realise their full potential.',
  canonicalUrl: 'https://iamtommetcalfe.com/',
  structuredData: [
    // Person schema
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Tom Stirrop-Metcalfe',
      jobTitle: 'Software Engineering Manager',
      description:
        'A passionate and committed engineering leader with over 15 years of experience in PHP programming and 10+ years leading teams.',
      image: 'https://iamtommetcalfe.com/assets/images/tom-stirrop-metcalfe-obi.jpeg',
      url: 'https://iamtommetcalfe.com/',
      sameAs: ['https://github.com/iamtommetcalfe'],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Birmingham',
        addressCountry: 'United Kingdom',
      },
    },
    // WebPage schema
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Tom Stirrop-Metcalfe | Software Engineering Manager | Birmingham',
      description:
        'My name is Tom Stirrop-Metcalfe. I am a passionate and driven engineering leader who wants to enable others to realise their full potential.',
      url: 'https://iamtommetcalfe.com/',
      author: {
        '@type': 'Person',
        name: 'Tom Stirrop-Metcalfe',
      },
      inLanguage: 'en-GB',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Tom Stirrop-Metcalfe',
        url: 'https://iamtommetcalfe.com/',
      },
    },
  ],
});

// Dynamically import the MrRobotPopUp component
const MrRobotPopUp = defineAsyncComponent(() => import('@/components/MrRobotPopUp.vue'));

// Get the current instance to access global properties
const app = getCurrentInstance();
const trackEvent = app?.appContext.config.globalProperties.$trackEvent;

// State for popup visibility
const isPopupVisible = ref(false);

// Methods for popup control
const showMrRobotPopup = () => {
  isPopupVisible.value = true;

  // Track the event in Google Analytics
  trackEvent('hello_button_click', {
    event_category: 'user_interaction',
    event_label: 'Hello Button Click',
  });
};

const closePopup = () => {
  isPopupVisible.value = false;
};
</script>

<style scoped>
#titleContainer {
  width: 75%;
  display: block;
  float: left;
}

#titleContainer p {
  padding-right: 1rem;
  text-align: justify;
}

.pageTitle {
  cursor: pointer;
  text-align: center;
  width: 100%;
  display: block;
}

#imageContainer {
  padding-top: 95px;
}

@media screen and (max-width: 1048px) {
  #titleContainer {
    width: 100%;
  }

  #imageContainer {
    width: 100%;
    text-align: center;
    padding-top: 5px;
  }
}
</style>
