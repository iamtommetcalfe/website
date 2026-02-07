<template>
  <main class="projects">
    <!-- Hero Section -->
    <section class="hero container">
      <div class="hero__copy">
        <h1 class="pageTitle">Engineering Projects</h1>
        <p class="lede">
          A collection of public projects, experiments, and tools I've built, reflecting my focus on
          <b>Scalable Systems</b> and <b>Technical Leadership</b>.
        </p>
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
              <b>Technical Leadership:</b> Defined engineering standards and architecture for this
              modern smart home dashboard application designed to be served on your home network.
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
              <b>Leadership:</b> Led the technical design and implementation of this demonstration
              platform to showcase complex API integration flows. Explore how the Amiqus API can
              power applicant screening in an ATS.
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
import { PROJECTS_SEO_CONFIG } from '@/config/seo';

// Set SEO metadata for the Projects page
useSeo(PROJECTS_SEO_CONFIG);
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
