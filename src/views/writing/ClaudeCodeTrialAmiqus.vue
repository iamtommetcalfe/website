<template>
  <main class="article">
    <section class="article__header container">
      <div class="article__meta">
        <time datetime="2026-05-15">15 May 2026</time>
        <span class="article__tag">AI Adoption</span>
        <span class="article__reading-time">7 min read</span>
      </div>
      <h1 class="pageTitle">Eight weeks with Claude Code: what we actually found</h1>
      <p class="article__lede">
        A two-month trial. A regulated industry. A team that handles sensitive data every day.
        Here's what responsible AI adoption actually looked like — and what it cost.
      </p>
    </section>

    <section class="article__body container">
      <p>
        The bar for introducing new tooling is high at
        <a href="https://amiqus.co/" target="_blank" rel="noopener noreferrer">Amiqus</a>, and it
        should be. When you're handling sensitive data for clients every day — background checks,
        identity verification, onboarding workflows — "move fast and break things" isn't a strategy
        available to you.
      </p>
      <p>
        So when we decided to evaluate Claude Code, we didn't treat it like a typical productivity
        tool. We treated it like any other change that could affect our clients, our engineers, or
        the integrity of our systems: carefully.
      </p>

      <h2>How we started</h2>
      <p>
        We started small. A handful of engineers, clear guardrails, nothing near production data.
        The goal wasn't speed. It was confidence. Could we adopt this responsibly, in a way that fit
        who we are?
      </p>
      <p>
        The guardrails weren't complicated, but they were intentional. We defined what data could go
        into the model — code, internal documentation, general engineering questions, not customer
        data. We agreed that any AI-generated output touching security-relevant or customer-facing
        code needed a human review before it went anywhere near a pull request. And we gave the
        trial cohort explicit permission to say it wasn't helping them. No pressure to perform
        enthusiasm we hadn't earned yet.
      </p>

      <h2>Eight weeks to full rollout</h2>
      <p>
        Eight weeks later, the whole engineering function was onboarded and Claude Code was formally
        accepted into the business.
      </p>
      <p>
        That progression didn't happen because the tool was obviously great from day one. It
        happened because each week, the small group of engineers using it built up a body of real
        experience — moments where it genuinely saved time, cases where it didn't, and a shared
        sense of what it was actually good at. That experience became the foundation for the broader
        rollout.
      </p>
      <p>
        Formal acceptance into the business required more than engineering sign-off. It needed to
        satisfy the same bar as any other tool that touches our systems: a clear data processing
        position, a defined scope of use, and evidence that the people using it understood both the
        capability and the limits. That work wasn't glamorous, but it's what made the rollout feel
        solid rather than rushed.
      </p>

      <h2>What changed</h2>
      <p>
        Once the trial was complete and the tool was fully embedded, four things had shifted in ways
        we hadn't fully predicted.
      </p>
      <p>
        <strong>Knowledge stopped living in people's heads.</strong>
        <a href="https://amiqus.co/" target="_blank" rel="noopener noreferrer">Amiqus</a> has
        brilliant engineers with deep domain expertise. That's also a single point of failure.
        Claude can now traverse our repos, Notion, and Slack and surface answers that previously
        only existed inside specific people. For a team of our size, that's a meaningful shift in
        resilience.
      </p>
      <p>
        <strong>Confidence went up.</strong> We didn't set out to measure this one, but engineers
        started voicing greater certainty in their work. Not overconfidence — something more like
        the ease that comes from having a capable collaborator to sense-check your thinking. It was
        hard to fake and easy to notice.
      </p>
      <p>
        <strong>Spec-driven planning shifted.</strong> A strong, product-minded engineer can now
        plan features at a depth that used to need a much bigger room. The ceiling on what one
        person can contribute quietly moved. We're still early in understanding how far that goes,
        but the direction is clear.
      </p>
      <p>
        <strong>The barrier to building dropped.</strong> Designers are building. PMs are shipping
        internal tooling. Prototypes are becoming real things. This is the one that surprised me
        most — the skill floor for going from idea to working implementation dropped enough that
        people who wouldn't have touched a codebase six months ago are now contributing
        meaningfully.
      </p>

      <h2>What it actually costs</h2>
      <p>Honestly, AI is the most exciting thing to happen to software engineering in my career.</p>
      <p>It's also exhausting. And I don't think we talk about that enough.</p>
      <p>
        In the last six months I've gone from nearly hands-off the code to properly back in it.
        That's been brilliant for me, personally. But it's also taken a toll — and I'm someone who
        wanted this.
      </p>
      <p>
        For engineers who didn't ask for it, or who are trying to absorb it alongside normal
        delivery pressure, the cognitive load is real. Learning something this fundamental doesn't
        happen in the background. It competes for the same headspace as everything else — as the
        sprint work, the code reviews, the architectural decisions that still need to be made by
        humans.
      </p>
      <p>
        The cautious rollout we ran at
        <a href="https://amiqus.co/" target="_blank" rel="noopener noreferrer">Amiqus</a> wasn't
        just about compliance and data boundaries. It was about giving the humans doing the learning
        some space to breathe. An eight-month rollout across an engineering function of around
        twenty — starting with five engineers in the pilot — might look slow from the outside. From
        the inside, it was about right.
      </p>
      <p>We owe it to the people doing this work to be honest about what we're asking of them.</p>

      <h2>Safety as foundation, not obstacle</h2>
      <p>
        None of what we found happened because we moved fast. It happened because we treated safety
        as the foundation.
      </p>
      <p>
        If you're an engineering leader in a regulated industry weighing something similar, I'm
        happy to talk through how we structured the trial, what the guardrails looked like in
        practice, and what I'd do differently next time.
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
  title: 'Eight weeks with Claude Code: what we actually found | Tom Stirrop-Metcalfe',
  description:
    "A two-month trial. A regulated industry. A team that handles sensitive data every day. Here's what responsible AI adoption actually looked like — and what it cost.",
  canonicalUrl: `${SITE_DOMAIN}/writing/claude-code-trial-amiqus/`,
  structuredData: [
    {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: 'Eight weeks with Claude Code: what we actually found',
      description:
        "A two-month trial. A regulated industry. A team that handles sensitive data every day. Here's what responsible AI adoption actually looked like — and what it cost.",
      url: `${SITE_DOMAIN}/writing/claude-code-trial-amiqus/`,
      datePublished: '2026-05-15',
      author: { '@type': 'Person', name: 'Tom Stirrop-Metcalfe' },
      keywords: [
        'Claude Code',
        'AI adoption',
        'LLM tooling',
        'regulated industry',
        'engineering leadership',
        'Amiqus',
        'responsible AI',
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

.article__body a {
  color: inherit;
  text-decoration: underline;
  text-underline-offset: 3px;
}

.article__body a:hover {
  opacity: 0.75;
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
