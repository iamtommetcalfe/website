<template>
  <main class="article">
    <section class="article__header container">
      <div class="article__meta">
        <time datetime="2026-04-21">21 April 2026</time>
        <span class="article__tag">AI Adoption</span>
        <span class="article__reading-time">5 min read</span>
      </div>
      <h1 class="pageTitle">How small engineering teams can adopt AI without losing control</h1>
      <p class="article__lede">
        AI tooling is everywhere. Most of it is hype. But some of it can meaningfully help small
        teams punch above their weight — if you approach it right.
      </p>
    </section>

    <section class="article__body container">
      <p>
        I've been championing Claude and AI tooling adoption at Amiqus for a while now. We're a
        small engineering team, which means every efficiency gain matters — but also that every
        distraction costs more than it would at a larger org. Here's what I've learned about making
        AI adoption actually work.
      </p>

      <h2>Start with where time actually goes</h2>
      <p>
        The first mistake most teams make is picking a tool and then looking for problems to solve
        with it. That's backwards. Start by mapping where engineering time goes — not where you
        think it goes, but where it actually goes. Track a week, honestly.
      </p>
      <p>
        At most small teams I've worked with, the answer is roughly: a third on building, a third on
        reviewing and communicating, and a third on everything else (debugging, context switching,
        meetings, writing docs nobody reads). AI tooling is most powerful in that middle and last
        third — the work that's important but not the core of what engineers were hired to do.
      </p>

      <h2>Pick one workflow and go deep</h2>
      <p>
        Resist the urge to adopt five tools at once. The compounding cost of context switching
        between new tools, and the cognitive load of deciding which tool to use for what, will erase
        any efficiency gains before you've even measured them.
      </p>
      <p>
        Pick the single highest-value workflow and go deep on it. For most teams, that's either code
        review assistance, documentation generation, or internal knowledge retrieval. Do that one
        thing well for six weeks before expanding.
      </p>
      <p>
        At Amiqus, we started with code-adjacent writing — pull request descriptions, internal
        documentation, meeting summaries. Low risk, immediate value, and it gave the team time to
        build intuition about what AI is good at before using it on higher-stakes work.
      </p>

      <h2>The team has to trust it before they'll use it</h2>
      <p>
        This is the most underestimated challenge. You can mandate tools all you like — engineers
        will use them performatively and then ignore them if they don't genuinely believe they help.
      </p>
      <p>
        Trust comes from early wins that engineers experience themselves, not from you telling them
        the tool is great. Set up a low-friction way for people to try it on real work they care
        about. Share examples of where it helped you. Be honest when it doesn't help.
      </p>
      <p>
        The engineers who become advocates are the ones who had an experience where the tool saved
        them an hour. Create the conditions for that experience to happen and then get out of the
        way.
      </p>

      <h2>Governance that doesn't slow you down</h2>
      <p>
        Small teams don't need a full AI governance framework — that's overkill. But you do need to
        answer three questions before you roll anything out:
      </p>
      <p>
        What goes into the model? Understand what data your team is sending to external APIs. Most
        LLM providers have reasonable data processing agreements, but you need to know what's in
        scope. Code, internal docs, customer data — treat each category differently.
      </p>
      <p>
        Who reviews the output? AI-generated code, documentation, and summaries should have a human
        in the loop for anything customer-facing or security-relevant. Build that expectation in
        from the start, not as an afterthought.
      </p>
      <p>
        How do you know if it's working? Set a simple metric. Time saved per week, PR cycle time,
        documentation coverage. You don't need a perfect measurement — you need a signal that tells
        you whether to invest more or change approach.
      </p>

      <h2>What I'd do differently</h2>
      <p>
        If I were starting from scratch, I'd involve the team in tool selection rather than arriving
        with a decision made. The engineers who have a say in which tools they use are the ones who
        actually use them. I'd also budget more time for experimentation upfront — the first few
        weeks of AI adoption are inevitably slower than the weeks that follow, and it's worth
        planning for that.
      </p>
      <p>
        The teams that get the most from AI tooling aren't the ones who adopt the most tools —
        they're the ones who build the best habits around a small number of well-chosen ones.
      </p>
    </section>

    <section class="article__footer container">
      <router-link to="/writing/" class="back-link">← Back to Writing</router-link>
    </section>
  </main>
</template>

<script setup lang="ts">
import { useSeo } from '@/composables/useSeo';
import { DEFAULT_WEBSITE, SITE_DOMAIN, type SchemaBlogPosting } from '@/config/seo';

useSeo({
  title: 'How small engineering teams can adopt AI without losing control | Tom Stirrop-Metcalfe',
  description:
    'Practical lessons from championing Claude and LLM tooling adoption at a small engineering team.',
  canonicalUrl: `${SITE_DOMAIN}/writing/ai-adoption-small-teams/`,
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'How small engineering teams can adopt AI without losing control',
      description:
        'Practical lessons from championing Claude and LLM tooling adoption at a small engineering team.',
      url: `${SITE_DOMAIN}/writing/ai-adoption-small-teams/`,
      datePublished: '2026-04-21',
      author: { '@type': 'Person', name: 'Tom Stirrop-Metcalfe' },
      keywords: [
        'AI adoption',
        'LLM tooling',
        'Claude AI',
        'engineering teams',
        'startup engineering',
        'AI governance',
      ],
      inLanguage: 'en-GB',
      isPartOf: DEFAULT_WEBSITE,
    } as SchemaBlogPosting,
  ],
});
</script>

<style scoped>
.container {
  max-width: 740px;
  margin: 0 auto;
  padding: 0 20px;
}

.article__header {
  padding: 26px 20px 18px;
}

.article__meta {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-bottom: 14px;
  font-size: 0.875rem;
  color: #6b7280;
}

.article__tag {
  background: #f3f4f6;
  border-radius: 6px;
  padding: 2px 8px;
  font-size: 0.75rem;
  font-weight: 600;
  color: #374151;
}

.article__reading-time {
  font-size: 0.875rem;
}

.article__lede {
  font-size: clamp(1.05rem, 1.8vw, 1.2rem);
  color: #4b5563;
  line-height: 1.65;
  margin: 12px 0 0;
}

.article__body {
  padding: 32px 20px 48px;
}

.article__body p {
  line-height: 1.75;
  margin: 0 0 18px;
  font-size: clamp(1rem, 1.6vw, 1.05rem);
}

.article__body h2 {
  font-size: clamp(1.15rem, 2vw, 1.4rem);
  margin: 36px 0 14px;
}

.article__footer {
  padding: 0 20px 48px;
}

.back-link {
  font-weight: 600;
  color: #111827;
  text-decoration: none;
  font-size: 0.95rem;
}

.back-link:hover {
  text-decoration: underline;
}

:global(.dark-mode) .article__lede,
:global(.dark-mode) .article__body p {
  color: #d1d5db;
}

:global(.dark-mode) .article__meta {
  color: #9ca3af;
}

:global(.dark-mode) .article__tag {
  background: #374151;
  color: #d1d5db;
}

:global(.dark-mode) .back-link {
  color: #f9fafb;
}
</style>
