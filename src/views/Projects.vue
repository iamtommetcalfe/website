<template>
  <main class="projects">
    <!-- Hero Section -->
    <section class="hero container">
      <div class="hero__copy">
        <h1 class="pageTitle">Projects</h1>
        <p class="lede">A collection of public projects, experiments, and tools I've built.</p>
        <p class="lede lede--muted">
          💡 You can find more of my work over on
          <a href="https://github.com/iamtommetcalfe" target="_blank" rel="noopener">GitHub</a>.
        </p>
      </div>
    </section>

    <!-- Projects Grid -->
    <section class="section">
      <div class="container">
        <div class="projects-grid">
          <div class="project-card">
            <h3>Oven to Air Fryer Conversion</h3>
            <p>
              Quickly convert oven cooking instructions into air fryer timings and temperatures.
            </p>
            <a
              href="https://www.oventoairfryer.co.uk/"
              target="_blank"
              class="btn btn--small"
              title="Oven to Air Fryer Conversion website"
            >
              View Site
            </a>
          </div>
          <div class="project-card">
            <h3>ENCOM Smart Home</h3>
            <p>
              Encom is a modern smart home dashboard application designed to be served on your home
              network.
            </p>
            <a
              href="https://github.com/iamtommetcalfe/encom-smart-home"
              target="_blank"
              class="btn btn--small btn--ghost"
              title="ENCOM Smart Home GitHub Repository"
            >
              View on GitHub
            </a>
          </div>

          <div class="project-card">
            <h3>Amiqus ATS Demo</h3>
            <p>
              Explore how the Amiqus API can power applicant screening in an ATS. This demo app,
              built with Laravel and Vite, walks through identity checks, record handling, and
              integration flows.
            </p>
            <a
              href="https://github.com/iamtommetcalfe/amiqus-ats-demo"
              target="_blank"
              class="btn btn--small btn--ghost"
              title="Amiqus ATS Demo GitHub Repository"
            >
              View on GitHub
            </a>
          </div>

          <div class="project-card">
            <h3>Vue Pokédex</h3>
            <p>
              A modern Pokédex built with Vue 3 and TypeScript, utilizing the PokéAPI to provide
              detailed information on Pokémon.
            </p>
            <a
              href="https://github.com/iamtommetcalfe/my-vue-pokedex"
              target="_blank"
              class="btn btn--small btn--ghost"
              title="Vue Pokédex GitHub Repository"
            >
              View on GitHub
            </a>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useSeo } from '@/composables/useSeo';

// Set SEO metadata for the Projects page
useSeo({
  title: 'Projects | Tom Stirrop-Metcalfe | Engineering Leader',
  description:
    "Explore Tom Stirrop-Metcalfe's public GitHub projects, including ENCOM Smart Home, Amiqus ATS Demo, and Vue Pokédex.",
  canonicalUrl: 'https://iamtommetcalfe.com/projects/',
  structuredData: [
    // CollectionPage schema with ItemList
    {
      '@context': 'https://schema.org',
      '@type': 'CollectionPage',
      name: 'Projects - Tom Stirrop-Metcalfe | Software Engineering Manager',
      description:
        "Explore Tom Stirrop-Metcalfe's public GitHub projects, including ENCOM Smart Home, Amiqus ATS Demo, and Vue Pokédex.",
      url: 'https://iamtommetcalfe.com/projects/',
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
      mainEntity: {
        '@type': 'ItemList',
        itemListElement: [
          {
            '@type': 'ListItem',
            position: 1,
            item: {
              '@type': 'SoftwareSourceCode',
              name: 'ENCOM Smart Home',
              description:
                'Encom is a modern smart home dashboard application designed to be served on your home network.',
              codeRepository: 'https://github.com/iamtommetcalfe/encom-smart-home',
              programmingLanguage: 'JavaScript',
              author: {
                '@type': 'Person',
                name: 'Tom Stirrop-Metcalfe',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 2,
            item: {
              '@type': 'SoftwareSourceCode',
              name: 'Amiqus ATS Demo',
              description:
                'Explore how the Amiqus API can power applicant screening in an ATS. This demo app, built with Laravel and Vite, walks through identity checks, record handling, and integration flows.',
              codeRepository: 'https://github.com/iamtommetcalfe/amiqus-ats-demo',
              programmingLanguage: 'PHP',
              author: {
                '@type': 'Person',
                name: 'Tom Stirrop-Metcalfe',
              },
            },
          },
          {
            '@type': 'ListItem',
            position: 3,
            item: {
              '@type': 'SoftwareSourceCode',
              name: 'Vue Pokédex',
              description:
                'A modern Pokédex built with Vue 3 and TypeScript, utilizing the PokéAPI to provide detailed information on Pokémon. Explore, search, and immerse yourself in the Pokémon universe.',
              codeRepository: 'https://github.com/iamtommetcalfe/my-vue-pokedex',
              programmingLanguage: 'TypeScript',
              author: {
                '@type': 'Person',
                name: 'Tom Stirrop-Metcalfe',
              },
            },
          },
        ],
      },
    },
  ],
});
</script>

<style scoped>
/* ---- Layout primitives (matching Homepage.vue) ---- */
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 42px 0 24px;
}

/* ---- Hero ---- */
.hero {
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

/* ---- Projects Grid ---- */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-top: 14px;
}

.project-card {
  background: #ffffff;
  border: 1px solid #e6e8ee;
  border-radius: 14px;
  padding: 24px;
  display: flex;
  flex-direction: column;
  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease,
    background-color 0.3s ease,
    border-color 0.3s ease;
}

.project-card:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.05);
}

.project-card h3 {
  margin: 0 0 10px 0;
  font-size: 1.25rem;
  color: #111827;
  transition: color 0.3s ease;
}

.project-card p {
  margin: 0 0 20px 0;
  color: #4b5563;
  line-height: 1.6;
  flex-grow: 1;
  transition: color 0.3s ease;
}

/* ---- Buttons (matching Homepage.vue) ---- */
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
  width: fit-content;
  transition: all 0.3s ease;
}

.btn:hover {
  filter: brightness(1.05);
}

.btn--small {
  height: 34px;
  font-size: 0.9rem;
  padding: 0 12px;
}

.btn--ghost {
  background: transparent;
  color: #111827;
  border-color: #e5e7eb;
}

/* Dark Mode Overrides */
:global(.dark-mode) .project-card {
  background: #1f2937;
  border-color: #374151;
}

:global(.dark-mode) .project-card h3 {
  color: #f9fafb;
}

:global(.dark-mode) .project-card p {
  color: #d1d5db;
}

:global(.dark-mode) .lede--muted {
  color: #9ca3af;
}

:global(.dark-mode) .btn {
  background: #f9fafb;
  color: #111827;
  border-color: #f9fafb;
}

:global(.dark-mode) .btn--ghost {
  background: transparent;
  color: #f9fafb;
  border-color: #4b5563;
}

@media screen and (max-width: 768px) {
  .projects-grid {
    grid-template-columns: 1fr;
  }
}
</style>
