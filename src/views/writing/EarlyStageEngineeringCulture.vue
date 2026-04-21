<template>
  <main class="article">
    <section class="article__header container">
      <div class="article__meta">
        <time datetime="2026-04-21">21 April 2026</time>
        <span class="article__tag">Startup</span>
        <span class="article__reading-time">5 min read</span>
      </div>
      <h1 class="pageTitle">The engineering culture moves that matter most before Series A</h1>
      <p class="article__lede">
        Early engineering culture is disproportionately hard to change later. These are the
        highest-leverage investments to make before you scale.
      </p>
    </section>

    <section class="article__body container">
      <p>
        I've joined early-stage companies at various points — pre-product, pre-revenue,
        post-product-market-fit-but-pre-scale — and the pattern is always the same. The cultural
        decisions made in the first 12 months of an engineering team's life calcify faster than
        anyone expects. By the time you're hiring your thirtieth engineer, the culture is mostly
        set. The question is whether it was set intentionally.
      </p>
      <p>Here are the moves that matter most.</p>

      <h2>Decide how you decide</h2>
      <p>
        The single biggest source of engineering friction at early-stage companies isn't technical
        debt — it's decision ambiguity. Who decides what? When is a decision made? How do you
        escalate when you're blocked?
      </p>
      <p>
        You don't need a formal RACI matrix. You need a shared understanding of how decisions get
        made in practice. I like to establish three categories: decisions any engineer can make
        alone, decisions that need a quick async check-in, and decisions that need a synchronous
        conversation. Keep the third category small.
      </p>
      <p>
        Write it down, even informally. "We make technology choices as a team. The EM has final say
        on architecture. Product owns the roadmap." That's enough. The goal is that engineers know
        how to unblock themselves.
      </p>

      <h2>Build the habit of writing things down</h2>
      <p>
        Early-stage teams run on tribal knowledge. The founding engineer knows why the payments
        service is structured the way it is. The CTO knows why you chose that ORM. Nobody wrote it
        down because there was no time and it seemed obvious.
      </p>
      <p>
        Then someone leaves, or you onboard your fourth engineer, and you realise that the knowledge
        was all in people's heads. Rebuilding it takes weeks you don't have.
      </p>
      <p>
        You don't need perfect documentation. You need the habit. After every significant technical
        decision, write a short note: what we decided, why, and what we considered and rejected.
        After every incident, write a brief timeline. Keep it all in one place that new engineers
        can find.
      </p>

      <h2>Blameless incident culture from day one</h2>
      <p>
        How a team responds to incidents says more about its culture than almost anything else. If
        the first few incidents result in blame, finger-pointing, or silent dread, that's the
        culture you've set — and it's extremely hard to undo.
      </p>
      <p>
        Establish from the start that incidents are systems failures, not people failures. Run even
        the smallest post-mortems with a blameless framing: what happened, what contributed to it,
        what we'll do differently. Make it normal to say "I didn't know" and "I made a mistake."
      </p>
      <p>
        The teams that respond well to incidents are the ones that practice blamelessness when the
        stakes are low. By the time you have a real production crisis at 2am, the habits are already
        there.
      </p>

      <h2>Hire for curiosity and honesty, not just credentials</h2>
      <p>
        At a pre-Series A startup, you're hiring people who will help define the culture as much as
        inherit it. A brilliant engineer who deflects blame, avoids difficult conversations, or
        dismisses ideas from junior colleagues will cause more damage than their technical
        contribution is worth.
      </p>
      <p>
        I look for two things in every interview beyond technical competence: curiosity and honesty.
        Curious engineers ask "why" and genuinely want to know the answer. Honest engineers tell you
        when something is wrong early enough to fix it. Both qualities are hard to develop in adults
        and easy to screen for with the right questions.
      </p>
      <p>
        "Tell me about a time you were wrong about something important" is one of the most revealing
        interview questions I've found. The answer tells you more about character than any algorithm
        challenge.
      </p>

      <h2>The one thing most startups skip: retrospectives</h2>
      <p>
        I've worked at companies that ran sprints for years without ever running a retro. The
        reasoning is always the same: we're too busy, nothing would change anyway, we already know
        what the problems are.
      </p>
      <p>
        All three of these are wrong. Retros work — not because they magically surface unknown
        problems, but because they create a regular, safe space to say things that would otherwise
        go unsaid. The engineer who is quietly frustrated. The process that nobody likes but
        everyone tolerates. The technical decision that's already causing problems but hasn't
        escalated yet.
      </p>
      <p>
        Run retros from the first sprint. Keep them short — 30 minutes is enough. Focus on one or
        two actions, not twelve. Follow up on those actions the next week. The compounding effect of
        a team that regularly reflects and improves is enormous over 12 months.
      </p>
      <p>
        These aren't the only things that matter before Series A. But in my experience, teams that
        get these five things right are significantly better positioned to scale than those that
        don't — regardless of the technology choices they made.
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
  title: 'The engineering culture moves that matter most before Series A | Tom Stirrop-Metcalfe',
  description:
    'The highest-leverage engineering culture investments for startups before they scale.',
  canonicalUrl: `${SITE_DOMAIN}/writing/early-stage-engineering-culture/`,
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'The engineering culture moves that matter most before Series A',
      description:
        'The highest-leverage engineering culture investments for startups before they scale.',
      url: `${SITE_DOMAIN}/writing/early-stage-engineering-culture/`,
      datePublished: '2026-04-21',
      author: { '@type': 'Person', name: 'Tom Stirrop-Metcalfe' },
      keywords: [
        'engineering culture',
        'startup',
        'Series A',
        'engineering leadership',
        'early-stage',
        'retrospectives',
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
