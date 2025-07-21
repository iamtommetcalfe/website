<template>
  <div>
    <h1 class="pageTitle">Projects</h1>

    <div class="projects-container">
      <div class="project-card">
        <h2>ENCOM Smart Home</h2>
        <p>
          Encom is a modern smart home dashboard application designed to be served on your home
          network.
        </p>
        <a
          href="https://github.com/iamtommetcalfe/encom-smart-home"
          target="_blank"
          class="project-link"
          title="ENCOM Smart Home GitHub Repository"
        >
          View on GitHub
        </a>
      </div>

      <div class="project-card">
        <h2>Amiqus ATS Demo</h2>
        <p>
          Explore how the Amiqus API can power applicant screening in an ATS. This demo app, built
          with Laravel and Vite, walks through identity checks, record handling, and integration
          flows.
        </p>
        <a
          href="https://github.com/iamtommetcalfe/amiqus-ats-demo"
          target="_blank"
          class="project-link"
          title="Amiqus ATS Demo GitHub Repository"
        >
          View on GitHub
        </a>
      </div>

      <div class="project-card">
        <h2>Vue Pokédex</h2>
        <p>
          A modern Pokédex built with Vue 3 and TypeScript, utilizing the PokéAPI to provide
          detailed information on Pokémon. Explore, search, and immerse yourself in the Pokémon
          universe.
        </p>
        <a
          href="https://github.com/iamtommetcalfe/my-vue-pokedex"
          target="_blank"
          class="project-link"
          title="Vue Pokédex GitHub Repository"
        >
          View on GitHub
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSeo } from '@/composables/useSeo';

// Set SEO metadata for the Projects page
useSeo({
  title: 'Projects - Tom Stirrop-Metcalfe | Software Engineering Manager',
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
.projects-container {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  flex: 1 1 300px;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 1.5rem;
  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.1);
}

.project-card h2 {
  margin-top: 0;
  color: #00b3fe;
}

.project-link {
  display: inline-block;
  margin-top: 1rem;
  padding: 0.5rem 1rem;
  background-color: #00b3fe;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease;
}

.project-link:hover {
  background-color: #0090cb;
}

@media screen and (max-width: 768px) {
  .projects-container {
    flex-direction: column;
  }
}
</style>
