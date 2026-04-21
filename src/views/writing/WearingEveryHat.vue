<template>
  <main class="article">
    <section class="article__header container">
      <div class="article__meta">
        <time datetime="2026-04-21">21 April 2026</time>
        <span class="article__tag">Leadership</span>
        <span class="article__reading-time">6 min read</span>
      </div>
      <h1 class="pageTitle">What nobody tells you about being the only EM at a startup</h1>
      <p class="article__lede">
        Being the only engineering manager at an early-stage startup is one of the most rewarding —
        and isolating — jobs in tech. Here's what it actually looks like.
      </p>
    </section>

    <section class="article__body container">
      <p>
        I've spent most of my career at early-stage companies. The kind where you join as "the
        engineering person" and quickly discover that the job description was optimistic at best.
        Over fifteen years I've been the only EM more times than I can count, and I've learned that
        nothing quite prepares you for what that role actually requires.
      </p>

      <h2>You are the process</h2>
      <p>
        At a larger company, process exists before you arrive. There's a way pull requests get
        reviewed, a cadence for planning, an on-call rota someone else designed. At an early-stage
        startup, there is no process — there's just you, and whatever you decide to put in place.
      </p>
      <p>
        That sounds like freedom, and it is. But it's also a trap. The temptation is to under-invest
        in process because things are moving fast and process feels like it slows you down. The
        reality is that the absence of process doesn't make you faster — it makes you inconsistent.
        Teams that ship sustainably have habits, not heroics.
      </p>
      <p>
        The first thing I do in any early-stage role is establish the minimum viable process: a
        lightweight sprint cadence, a definition of done, and a way to make decisions
        asynchronously. None of it needs to be perfect. It just needs to exist.
      </p>

      <h2>The IC pull is real — and it never fully goes away</h2>
      <p>
        When you're the only EM, there's always a reason to write code. The sprint is behind. A
        critical bug needs fixing. Nobody else knows the payment integration as well as you do. Each
        of these reasons is legitimate, and each of them is a trap.
      </p>
      <p>
        Your leverage as an EM is not in the code you write — it's in the system you build and the
        people you develop. Every hour you spend coding is an hour you're not unblocking someone,
        not thinking about the roadmap, not having the career conversation that would have kept your
        best engineer from looking elsewhere.
      </p>
      <p>
        I'm not saying never write code. Sometimes you should. But make it a conscious choice, not a
        default. Keep a tally for a week — you might be surprised how often "I'll just fix this
        quickly" eats the afternoon.
      </p>

      <h2>You'll make decisions with half the context</h2>
      <p>
        There's no CTO above you to escalate to. No staff engineer with ten years of institutional
        knowledge. No architecture review board. There's you, a Slack message from a founder, and a
        deadline that was yesterday.
      </p>
      <p>
        The skill that matters most in this situation isn't knowing the right answer — it's knowing
        how to make a good-enough decision quickly and revisit it later. I use a simple heuristic:
        is this decision reversible? If yes, move fast and document it. If no, slow down and ask one
        more person.
      </p>
      <p>
        Write decisions down. Even informally. "We chose Postgres over MySQL because we know it
        better and the team is small." Future you will thank present you.
      </p>

      <h2>"CTO creep" is a feature, not a bug</h2>
      <p>
        At some point the founders will start asking you about things that aren't engineering.
        Vendor contracts. Hiring budgets. Product roadmap trade-offs. Whether to rebuild or buy.
        This is what I call CTO creep — the gradual expansion of your remit beyond the engineering
        org.
      </p>
      <p>
        Most EMs I know resist this instinctively. It feels like scope creep, like you're being
        asked to do someone else's job. But I've come to think of it differently. At an early-stage
        company, the person who understands the technical reality of what's possible has an
        obligation to be in those conversations. If you're not there, someone will make a commitment
        that engineering can't deliver.
      </p>
      <p>
        Embrace the breadth. Just be honest about the cost — more breadth means less depth, and
        sometimes you need to say that out loud.
      </p>

      <h2>The isolation is the hardest part</h2>
      <p>
        Nobody tells you this enough: being the only EM is lonely. You're senior enough that you
        can't vent to your team, but junior enough that you're not in the founders' inner circle.
        Your problems don't fit the typical IC career anxiety ("am I growing fast enough?") or the
        typical CTO concern ("is the business scaling?"). They're somewhere in the middle, and the
        people who understand them are usually at other companies.
      </p>
      <p>
        Find your people. Engineering leadership Slack communities, local meetups, former
        colleagues. The specific context doesn't matter as much as having somewhere to say "is this
        just me?" and get an honest answer.
      </p>
      <p>
        Fifteen years in, I still have those conversations. They're the most valuable thing I do for
        my own development.
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
  title: 'What nobody tells you about being the only EM at a startup | Tom Stirrop-Metcalfe',
  description:
    "Fifteen years of wearing every hat at early-stage startups. What the EM role actually looks like when there's no CTO above you.",
  canonicalUrl: `${SITE_DOMAIN}/writing/wearing-every-hat/`,
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'What nobody tells you about being the only EM at a startup',
      description:
        "Fifteen years of wearing every hat at early-stage startups. What the EM role actually looks like when there's no CTO above you.",
      url: `${SITE_DOMAIN}/writing/wearing-every-hat/`,
      datePublished: '2026-04-21',
      author: { '@type': 'Person', name: 'Tom Stirrop-Metcalfe' },
      keywords: [
        'engineering manager',
        'startup',
        'early-stage',
        'engineering leadership',
        'CTO',
        'multi-hat',
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
