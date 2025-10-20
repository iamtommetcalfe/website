<template>
  <div class="home">
    <!-- Hero -->
    <section class="hero container">
      <div class="hero__copy">
        <!-- Keep the Easter egg click -->
        <h1 class="pageTitle" title="Click to see a surprise" @click="showMrRobotPopup">
          Hello, I am Tom
        </h1>
        <p class="kicker">
          Engineering Function Manager @
          <a href="https://amiqus.co/" title="Amiqus" target="_blank">Amiqus</a>
        </p>

        <p class="lede">
          I build calm, capable, fast-moving engineering teams. I focus on measurable impact, strong
          systems, and sustainable delivery.
        </p>
        <p class="lede lede--muted">
          <br />💡 Engineering should make life easier, for <i>everyone</i>.
        </p>
      </div>

      <aside class="hero__media" aria-label="Portrait of Tom with Obi">
        <picture class="portrait">
          <source :srcset="imageUrlWEBP" type="image/webp" />
          <source :srcset="imageUrlJPEG" type="image/jpeg" />
          <img
            :src="imageUrlJPEG"
            width="420"
            height="520"
            loading="lazy"
            alt="Tom Stirrop-Metcalfe with his dog, Obi"
          />
        </picture>
      </aside>
    </section>

    <!-- Pillars -->
    <section class="section section--alt">
      <div class="container">
        <h2 class="section__title">What I care about</h2>
        <ul class="cards">
          <li class="card">
            <h3>🪶 Quietly reliable systems</h3>
            <p>
              Well-understood tech, predictable releases, and delivery pipelines that just work.
            </p>
          </li>
          <li class="card">
            <h3>💚 Healthy teams</h3>
            <p>Psychological safety, autonomy with alignment, and honest retros.</p>
          </li>
          <li class="card">
            <h3>🎯 Measured progress</h3>
            <p>Cycle time, change fail rate, and deployment frequency. Less noise, more signal.</p>
          </li>
        </ul>
      </div>
    </section>

    <!-- Mr. Robot Popup -->
    <MrRobotPopUp :is-visible="isPopupVisible" @close="closePopup" />
  </div>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, getCurrentInstance } from 'vue';
import imageUrlJPEG from '@/assets/images/tom-stirrop-metcalfe-obi.jpeg';
import imageUrlWEBP from '@/assets/images/tom-stirrop-metcalfe-obi.webp';
import { useSeo } from '@/composables/useSeo';

useSeo({
  title: 'Homepage | Tom Stirrop-Metcalfe | Engineering Leader',
  description:
    'I build calm, capable, fast-moving engineering teams. I focus on measurable impact, strong systems, and sustainable delivery.',
  canonicalUrl: 'https://iamtommetcalfe.com/',
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: 'Tom Stirrop-Metcalfe',
      jobTitle: 'Engineering Function Manager',
      description:
        'Engineering leader focused on sustainable delivery, healthy teams, and systems that scale quietly.',
      image: 'https://iamtommetcalfe.com/assets/images/tom-stirrop-metcalfe-obi.jpeg',
      url: 'https://iamtommetcalfe.com/',
      sameAs: [
        'https://github.com/iamtommetcalfe',
        'https://www.linkedin.com/in/tomstirropmetcalfe/',
      ],
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Birmingham',
        addressCountry: 'United Kingdom',
      },
      worksFor: { '@type': 'Organization', name: 'Amiqus' },
    },
    {
      '@context': 'https://schema.org',
      '@type': 'WebPage',
      name: 'Homepage | Tom Stirrop-Metcalfe | Engineering Leader',
      description:
        'I build calm, fast-moving engineering teams. We focus on measurable impact, strong systems, and sustainable delivery.',
      url: 'https://iamtommetcalfe.com/',
      author: { '@type': 'Person', name: 'Tom Stirrop-Metcalfe' },
      inLanguage: 'en-GB',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Tom Stirrop-Metcalfe',
        url: 'https://iamtommetcalfe.com/',
      },
    },
  ],
});

const MrRobotPopUp = defineAsyncComponent(() => import('@/components/MrRobotPopUp.vue'));

const app = getCurrentInstance();
const trackEvent = app?.appContext.config.globalProperties.$trackEvent;

const isPopupVisible = ref(false);

const showMrRobotPopup = () => {
  isPopupVisible.value = true;
  trackEvent?.('hero_title_click', {
    event_category: 'user_interaction',
    event_label: 'Hero Title Click',
  });
};

const closePopup = () => {
  isPopupVisible.value = false;
};
</script>

<style scoped>
/* ---- Layout primitives ---- */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 42px 0 24px;
}

.section--alt {
  background: #f6f7f9;
  border-top: 1px solid #e6e8ee;
  border-bottom: 1px solid #e6e8ee;
  margin: 0 -15px 0 -15px;
}

.section__title {
  margin: 0 0 14px 0;
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
}

/* ---- Hero ---- */
.hero {
  display: grid;
  grid-template-columns: 1.4fr 0.6fr;
  align-items: center;
  gap: 32px;
  padding: 26px 20px 18px;
}

.hero__copy {
  min-width: 0;
}

.kicker {
  margin: 0 0 14px 0;
  font-weight: 600;
  color: #6b7280;
  letter-spacing: 0.2px;
}

.lede {
  margin: 0 0 8px 0;
  font-size: clamp(1rem, 1.7vw, 1.15rem);
}

.lede--muted {
  color: #6b7280;
  font-style: italic;
}

/* Buttons */
.cta {
  margin-top: 14px;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;
}

.btn {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: 0 14px;
  border-radius: 10px;
  font-weight: 600;
  color: #fff;
  background: #111827;
  border: 1px solid #111827;
  text-decoration: none;
}

.btn:hover {
  filter: brightness(1.05);
}

.btn--ghost {
  background: transparent;
  color: #111827;
  border-color: #e5e7eb;
}

/* Portrait */
.hero__media {
  justify-self: end;
}

.portrait {
  display: block;
  width: min(420px, 100%);
  aspect-ratio: 4/5;
  border-radius: 18px;
  overflow: hidden;
  border: 1px solid #e5e7eb;
  box-shadow: 0 6px 22px rgba(0, 0, 0, 0.08);
}

.portrait img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

/* ---- Cards (pillars) ---- */
.cards {
  list-style: none;
  margin: 14px 0 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;
}

.card {
  background: #ffffff;
  border: 1px solid #e6e8ee;
  border-radius: 14px;
  padding: 16px;
}

.card h3 {
  margin: 0 0 6px 0;
  font-size: 1rem;
}

.card p {
  margin: 0;
  color: #4b5563;
}

/* ---- Metrics ---- */
.metrics {
  list-style: none;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  margin: 14px 0 0 0;
  padding: 0;
}

.metric {
  background: #f6f7f9;
  border: 1px solid #e6e8ee;
  border-radius: 12px;
  padding: 14px;
}

.metric strong {
  display: block;
  font-size: 1.1rem;
  margin-bottom: 4px;
}

.metric span {
  color: #4b5563;
}

/* ---- Responsive ---- */
@media (max-width: 1024px) {
  .hero {
    grid-template-columns: 1fr;
  }
  .hero__media {
    justify-self: center;
  }
}

@media (max-width: 800px) {
  .cards,
  .metrics {
    grid-template-columns: 1fr;
  }
}
</style>
