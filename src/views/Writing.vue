<template>
  <main class="writing">
    <section class="hero container">
      <div class="hero__copy">
        <h1 class="pageTitle">Writing</h1>
        <p class="lede">
          Thoughts on engineering leadership, AI adoption, and what it's actually like to wear every
          hat at an early-stage startup.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="article-list">
          <article v-for="article in articles" :key="article.slug" class="article-card">
            <div class="article-card__meta">
              <time :datetime="article.date">{{ formatDate(article.date) }}</time>
              <span class="article-card__tag">{{ article.tag }}</span>
            </div>
            <h2 class="article-card__title">
              <router-link :to="article.slug">{{ article.title }}</router-link>
            </h2>
            <p class="article-card__summary">{{ article.summary }}</p>
            <router-link :to="article.slug" class="article-card__read">Read →</router-link>
          </article>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useSeo } from '@/composables/useSeo';
import { WRITING_SEO_CONFIG } from '@/config/seo';

useSeo(WRITING_SEO_CONFIG);

interface Article {
  slug: string;
  title: string;
  summary: string;
  date: string;
  tag: string;
}

const articles: Article[] = [
  {
    slug: '/writing/ai-adoption-small-teams/',
    title: 'How small engineering teams can adopt AI without losing control',
    summary:
      'AI tooling is everywhere. Most of it is hype. But some of it can meaningfully help small teams punch above their weight — if you approach it right.',
    date: '2026-04-21',
    tag: 'AI Adoption',
  },
];

function formatDate(dateStr: string): string {
  return new Date(dateStr).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });
}
</script>

<style scoped>
.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 20px;
}

.section {
  padding: 42px 0 24px;
}

.hero {
  padding: 26px 20px 18px;
}

.lede {
  margin: 0 0 8px 0;
  font-size: clamp(1rem, 1.7vw, 1.15rem);
}

.article-list {
  display: grid;
  gap: 20px;
}

.article-card {
  background: #ffffff;
  border: 1px solid #e6e8ee;
  border-radius: 14px;
  padding: 24px;
}

.article-card__meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 8px;
  font-size: 0.875rem;
  color: #6b7280;
}

.article-card__tag {
  background: #f3f4f6;
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #374151;
}

.article-card__title {
  margin: 0 0 10px 0;
  font-size: clamp(1.1rem, 2vw, 1.35rem);
}

.article-card__title a {
  color: inherit;
  text-decoration: none;
}

.article-card__title a:hover {
  text-decoration: underline;
}

.article-card__summary {
  margin: 0 0 14px 0;
  color: #4b5563;
  line-height: 1.6;
}

.article-card__read {
  font-weight: 600;
  font-size: 0.9rem;
  color: #111827;
  text-decoration: none;
}

.article-card__read:hover {
  text-decoration: underline;
}

:global(.dark-mode) .article-card {
  background: #1f2937;
  border-color: #374151;
}

:global(.dark-mode) .article-card__meta,
:global(.dark-mode) .article-card__summary {
  color: #9ca3af;
}

:global(.dark-mode) .article-card__tag {
  background: #374151;
  color: #d1d5db;
}

:global(.dark-mode) .article-card__read {
  color: #f9fafb;
}
</style>
