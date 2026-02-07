<template>
  <div class="about">
    <!-- Hero -->
    <section class="hero container">
      <div class="hero__copy">
        <h1 class="pageTitle">About</h1>
        <p class="lede">
          I am Tom Stirrop-Metcalfe, an Engineering Function Manager who builds calm, capable,
          fast-moving teams. I care about measurable impact, healthy delivery habits, and systems
          that scale quietly.
        </p>
        <p class="lede lede--muted">💡 Engineering should make life easier for <i>everyone</i>.</p>
      </div>
    </section>

    <!-- Principles (shared component) -->
    <PrinciplesSection title="What guides my work" :items="guideItems" :alt="true" />

    <!-- How I work -->
    <section class="section">
      <div class="container grid-2">
        <div>
          <h2 class="section__title">How I work best</h2>
          <ul class="bullets">
            <li>
              🏝 Fully remote. I enjoy on-site sessions for kick-offs, workshops, and
              show-and-tells.
            </li>
            <li>
              🗓 Clear purpose, agendas, and ownership. I like decisions recorded and visible.
            </li>
            <li>🔁 Short feedback loops. Ship small, learn fast, adjust.</li>
            <li>📊 Transparency over performance and delivery metrics. Tell the real story.</li>
            <li>☕️ Coffee-fuelled focus and fewer meetings than you think.</li>
          </ul>
        </div>
        <div>
          <h2 class="section__title">What I need from a team</h2>
          <ul class="bullets">
            <li>Structure, transparency, and passion for the problem.</li>
            <li>Feedback, early and often. I will always reciprocate.</li>
            <li>Clear priorities and space to do the work.</li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Now -->
    <section class="section section--alt">
      <div class="container">
        <h2 class="section__title">Right now</h2>
        <ul class="bullets">
          <li>
            Function management at
            <a href="https://amiqus.co/" target="_blank" rel="noopener">Amiqus</a>.
          </li>
          <li>Improving engineering ways of working and delivery metrics.</li>
          <li>Building internal tools and automations.</li>
        </ul>
      </div>
    </section>

    <!-- Interests -->
    <section class="section">
      <div class="container grid-3">
        <div class="listCard">
          <h3>📚 Books</h3>
          <ul>
            <li>Lord of the Rings</li>
            <li>The Demonata</li>
            <li>The Saga of Darren Shan</li>
            <li>Radical Candor</li>
            <li>Ganbatte!</li>
            <li>Ikigai</li>
          </ul>
        </div>
        <div class="listCard">
          <h3>📺 TV</h3>
          <ul>
            <li>The Walking Dead</li>
            <li>Lost</li>
            <li>Firefly</li>
            <li>House</li>
            <li>Game of Thrones</li>
            <li>The Leftovers</li>
            <li>The Last Man on Earth</li>
          </ul>
        </div>
        <div class="listCard">
          <h3>🎞 Films</h3>
          <ul>
            <li>The Zero Theorem</li>
            <li>The Hitchhiker's Guide to the Galaxy</li>
            <li>The Lord of the Rings (extended)</li>
            <li>Hook</li>
            <li>Anything Marvel/DC</li>
          </ul>
        </div>
      </div>
    </section>

    <section class="section section--alt">
      <div class="container grid-2">
        <div class="listCard">
          <h3>🕹 Games</h3>
          <ul>
            <li>Days Gone</li>
            <li>The Last of Us</li>
            <li>Death Stranding</li>
            <li>Ghost of Tsushima</li>
            <li>The Legend of Zelda</li>
            <li>The Dark Pictures Anthology</li>
          </ul>
        </div>
        <div class="listCard">
          <h3>🎧 Soundtracks</h3>
          <p>
            I code to instrumental game and film scores. My go-to playlist is
            <a
              href="https://open.spotify.com/playlist/6d62q5Hf7cnR3qmgeF0LKh?si=3b2f59baa234463c"
              target="_blank"
              rel="noopener"
              title="Tom Stirrop-Metcalfe | Soundtracks playlist on Spotify"
              >here on Spotify</a
            >.
          </p>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section">
      <div class="container">
        <div class="cta">
          <a
            class="btn"
            href="https://www.linkedin.com/in/iamtomstirropmetcalfe/"
            target="_blank"
            title="Contact Tom"
            >Get in touch</a
          >
          <a class="btn btn--ghost" href="/" title="Back to homepage">Back home</a>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { useSeo } from '@/composables/useSeo';
import PrinciplesSection, { type PrincipleItem } from '@/components/PrinciplesSection.vue';

const guideItems: PrincipleItem[] = [
  {
    icon: '🧭',
    title: 'Systems over heroes',
    text: 'Paved roads, clear defaults, boring tech that scales.',
  },
  {
    icon: '🤝',
    title: 'Autonomy with alignment',
    text: 'Context, written decisions, honest retros.',
  },
  { icon: '📏', title: 'Measure flow', text: 'Cycle time, deploy frequency, change fail rate.' },
];

useSeo({
  title: 'About | Tom Stirrop-Metcalfe | Engineering Function Manager',
  description:
    'About Tom Stirrop-Metcalfe. Engineering Function Manager focused on sustainable delivery, healthy teams, and quietly reliable systems.',
  canonicalUrl: 'https://iamtommetcalfe.com/about/',
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About | Tom Stirrop-Metcalfe',
      description:
        'Learn about Tom Stirrop-Metcalfe, Engineering Function Manager focused on sustainable delivery and measurable impact.',
      url: 'https://iamtommetcalfe.com/about/',
      author: { '@type': 'Person', name: 'Tom Stirrop-Metcalfe' },
      inLanguage: 'en-GB',
      isPartOf: {
        '@type': 'WebSite',
        name: 'Tom Stirrop-Metcalfe',
        url: 'https://iamtommetcalfe.com/',
      },
      mainEntity: {
        '@type': 'Person',
        name: 'Tom Stirrop-Metcalfe',
        jobTitle: 'Engineering Function Manager',
        url: 'https://iamtommetcalfe.com/',
        sameAs: [
          'https://github.com/iamtommetcalfe',
          'https://www.linkedin.com/in/tomstirropmetcalfe/',
        ],
      },
    },
  ],
});
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
  margin: 0 -15px;
}
.section__title {
  margin: 0 0 14px 0;
  font-size: clamp(1.2rem, 2.2vw, 1.5rem);
}

/* ---- Hero ---- */
.hero {
  display: grid;
  grid-template-columns: 1fr;
  gap: 32px;
  padding: 26px 20px 18px;
}
.lede {
  margin: 0 0 8px 0;
  font-size: clamp(1rem, 1.7vw, 1.15rem);
}
.lede--muted {
  color: #6b7280;
  font-style: italic;
}

/* ---- Lists ---- */
.bullets {
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  gap: 10px;
}
.bullets li {
  background: #ffffff;
  border: 1px solid #e6e8ee;
  border-radius: 12px;
  padding: 12px 14px;
}

/* ---- Info lists ---- */
.listCard {
  background: #ffffff;
  border: 1px solid #e6e8ee;
  border-radius: 14px;
  padding: 16px;
}
.listCard h3 {
  margin: 0 0 8px 0;
  font-size: 1rem;
}
.listCard ul {
  margin: 0;
  padding-left: 18px;
}

/* ---- Grids ---- */
.grid-2 {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
}
.grid-3 {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 16px;
}

/* ---- Buttons ---- */
.cta {
  margin-top: 6px;
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

/* ---- Responsive ---- */
@media (max-width: 1024px) {
  .cards {
    grid-template-columns: 1fr;
  }
  .grid-2 {
    grid-template-columns: 1fr;
  }
  .grid-3 {
    grid-template-columns: 1fr;
  }
}
</style>
