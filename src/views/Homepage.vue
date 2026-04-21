<template>
  <main class="home">
    <!-- Hero -->
    <section class="hero container">
      <div class="hero__copy">
        <h1
          class="pageTitle"
          title="Click to see a surprise"
          aria-label="Tom Stirrop-Metcalfe | Engineering Leader & AI Advocate. Click to see a surprise Mr. Robot Easter egg"
          @click="showMrRobotPopup"
        >
          Tom Stirrop-Metcalfe
        </h1>
        <p class="kicker">Engineering Leader · 15 years · Early-stage startups · AI advocate</p>

        <p class="lede">
          I build fast-moving engineering teams at early-stage companies. Fifteen years of wearing
          every hat — from hands-on code to org design — means I know what "good" looks like at
          every stage.
        </p>
        <p class="lede lede--muted">
          Currently championing Claude and AI tooling adoption at Amiqus.
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
            loading="eager"
            fetchpriority="high"
            alt="Tom Stirrop-Metcalfe - Engineering Leader & AI Advocate"
          />
        </picture>
      </aside>
    </section>

    <!-- Pillars -->
    <PrinciplesSection title="What I care about" :items="careItems" :alt="true" />

    <!-- Mr. Robot Popup -->
    <MrRobotPopUp :is-visible="isPopupVisible" @close="closePopup" />
  </main>
</template>

<script setup lang="ts">
import { ref, defineAsyncComponent, getCurrentInstance } from 'vue';
import imageUrlJPEG from '@/assets/images/tom-stirrop-metcalfe-obi.jpeg';
import imageUrlWEBP from '@/assets/images/tom-stirrop-metcalfe-obi.webp';
import { useSeo } from '@/composables/useSeo';
import { HOME_SEO_CONFIG } from '@/config/seo';
import PrinciplesSection, { type PrincipleItem } from '@/components/PrinciplesSection.vue';

const careItems: PrincipleItem[] = [
  {
    icon: '🚀',
    title: 'Early-stage instincts',
    text: 'Fast decisions, scrappy iteration, and knowing when to add process — and when not to.',
  },
  {
    icon: '🤖',
    title: 'AI as a force multiplier',
    text: 'Adopting LLM tooling to help small teams do the work of larger ones.',
  },
  {
    icon: '🧭',
    title: 'Systems over heroes',
    text: 'Paved roads, clear defaults, and delivery pipelines that just work.',
  },
];

useSeo(HOME_SEO_CONFIG);

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

/* Dark Mode Overrides */
:global(.dark-mode) .kicker,
:global(.dark-mode) .lede--muted {
  color: #9ca3af;
}

:global(.dark-mode) .btn {
  background: #f9fafb;
  color: #111827;
  border-color: #f9fafb;
}

:global(.dark-mode) .btn--ghost {
  color: #f9fafb;
  border-color: #4b5563;
}

:global(.dark-mode) .portrait {
  border-color: #374151;
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
