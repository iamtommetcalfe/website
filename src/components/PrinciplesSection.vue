<template>
  <section :class="['section', { 'section--alt': alt }]">
    <div class="container">
      <h2 class="section__title">{{ title }}</h2>
      <ul class="cards" :aria-label="ariaLabel || title">
        <li v-for="(item, idx) in items" :key="idx" class="card">
          <h3 v-if="item.title">
            <span v-if="item.icon">{{ item.icon }} </span>{{ item.title }}
          </h3>
          <p>{{ item.text }}</p>
        </li>
      </ul>
      <slot />
    </div>
  </section>
</template>

<script setup lang="ts">
export type PrincipleItem = {
  icon?: string;
  title?: string;
  text: string;
};

defineProps<{
  title: string;
  items: PrincipleItem[];
  alt?: boolean;
  ariaLabel?: string;
}>();
</script>

<style scoped>
/* Styles aligned with Homepage.vue for visual parity */
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

.cards {
  list-style: none;
  margin: 14px 0 0 0;
  padding: 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  .card {
    background: #ffffff;
    border: 1px solid #e6e8ee;
    border-radius: 14px;
    padding: 16px;
    transition:
      background-color 0.3s ease,
      border-color 0.3s ease;

    p {
      margin: 0;
      color: #4b5563;
      transition: color 0.3s ease;
    }

    h3 {
      margin: 0 0 6px 0;
      font-size: 1rem;
      transition: color 0.3s ease;

      span {
        padding-right: 10px;
      }
    }
  }
}

/* Dark mode overrides */
:global(.dark-mode) .section--alt {
  background: #111827;
  border-color: #374151;
}

:global(.dark-mode) .card {
  background: #1f2937;
  border-color: #374151;
}

:global(.dark-mode) .card h3 {
  color: #f9fafb;
}

:global(.dark-mode) .card p {
  color: #d1d5db;
}

:global(.dark-mode) .section__title {
  color: #f9fafb;
}
</style>
