<template>
  <div>
    <h1 class="pageTitle">About</h1>

    <h2>Conditions I like to work in</h2>
    <ul>
      <li>
        🏝 I am fully remote. That being said, I am very keen for on-site visits where possible.
      </li>
      <li>
        🎸 Music - When not in meetings I will always have my headphones on listening to anything
        that does not have words in it - primarily game or movie soundtracks.
        <a
          href="https://open.spotify.com/playlist/6d62q5Hf7cnR3qmgeF0LKh?si=3b2f59baa234463c"
          target="_blank"
          title="Tom Stirrop-Metcalfe | Soundtracks playlist on Spotify"
          >This is my go to playlist</a
        >.
      </li>
      <li>🗓 Organisation! Agendas and planned meetings are what I prefer</li>
    </ul>

    <h2>Things I need to work best</h2>
    <ul>
      <li>Structure, transparency and passion.</li>
      <li>Feedback! Any and all feedback is always welcome and encouraged.</li>
      <li>All the coffee ☕️</li>
    </ul>

    <div class="sectionContainer">
      <h2>📚 Books</h2>
      <ul>
        <li>Lord of the Rings</li>
        <li>The Demonata</li>
        <li>The Saga of Darren Shan</li>
        <li>Radical Candor</li>
        <li>Ganbatte!</li>
        <li>Ikigai</li>
      </ul>
    </div>

    <div class="sectionContainer">
      <h2>📺 TV</h2>
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

    <div class="sectionContainer">
      <h2>🎞 Films</h2>
      <ul>
        <li>The Zero Theorem</li>
        <li>The Hitchhiker's Guide to the Galaxy</li>
        <li>The Lord of the Rings (extended editions)</li>
        <li>Hook</li>
        <li>Anything Marvel/DC</li>
      </ul>
    </div>

    <div class="sectionContainer">
      <h2>🕹 Games</h2>
      <ul>
        <li>Days Gone</li>
        <li>The Last of Us</li>
        <li>Death Stranding</li>
        <li>Ghost of Tsushima</li>
        <li>The Legend of Zelda series</li>
        <li>The Dark Pictures Anthology</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useSeo } from '@/composables/useSeo';

// Set SEO metadata for the About page
useSeo({
  title: 'About - Tom Stirrop-Metcalfe | Software Engineering Manager',
  description:
    'Learn more about Tom Stirrop-Metcalfe, a passionate and committed engineering leader with over 15 years of experience in software development.',
  canonicalUrl: 'https://iamtommetcalfe.com/about/',
  structuredData: [
    // AboutPage schema
    {
      '@context': 'https://schema.org',
      '@type': 'AboutPage',
      name: 'About - Tom Stirrop-Metcalfe | Software Engineering Manager',
      description:
        'Learn more about Tom Stirrop-Metcalfe, a passionate and committed engineering leader with over 15 years of experience in software development.',
      url: 'https://iamtommetcalfe.com/about/',
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
        '@type': 'Person',
        name: 'Tom Stirrop-Metcalfe',
        jobTitle: 'Software Engineering Manager',
        description:
          'A passionate and committed engineering leader with over 15 years of experience in software development.',
        url: 'https://iamtommetcalfe.com/',
        sameAs: ['https://github.com/iamtommetcalfe'],
      },
    },
  ],
});
</script>

<style scoped>
.sectionContainer {
  width: 50%;
  float: left;
}

@media screen and (max-width: 1048px) {
  .sectionContainer {
    width: 100%;
  }
}
</style>
