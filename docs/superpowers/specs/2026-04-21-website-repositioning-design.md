# Website Repositioning & Writing Section — Design Spec

**Date:** 2026-04-21  
**Scope:** Option B — Repositioning + Blog  
**Author:** Tom Stirrop-Metcalfe (via brainstorming session)

---

## Goal

Reposition iamtommetcalfe.com to clearly signal Tom as an engineering leader with 15 years of early-stage startup experience who champions AI/LLM adoption. Add a Writing section to build topical authority on Google for a dual audience: recruiters/founders at early-stage startups, and engineering peers.

---

## Core Positioning

**Statement:**

> "Engineering leader with 15 years building and scaling teams at early-stage startups. Currently championing AI and LLM adoption at Amiqus. I wear a lot of hats — and I like it that way."

**Three owned topics for writing:**

1. Engineering leadership at startups / early-stage team building
2. AI/LLM adoption in engineering teams
3. Wearing multiple hats — the CTO/EM hybrid role at small companies

**Identity shift:**

- Job title across site: `"Engineering Leader"` (was `"Software Engineering Manager"`)
- Recurring motif: "wearing every hat" — appears in About, homepage secondary lede, and writing topics

---

## Section 1: Homepage (`/`)

### Hero copy changes

**Kicker** (replaces `"Engineering Function Manager @ Amiqus"`):  
`Engineering Leader · 15 years · Early-stage startups · AI advocate`

**Primary lede** (replaces current):  
`I build fast-moving engineering teams at early-stage companies. Fifteen years of wearing every hat — from hands-on code to org design — means I know what "good" looks like at every stage.`

**Secondary lede, muted** (replaces `"💡 Engineering should make life easier, for everyone."`):  
`Currently championing Claude and AI tooling adoption at Amiqus.`

### Pillars ("What I care about") — full replacement

| Icon | Title                    | Text                                                                                  |
| ---- | ------------------------ | ------------------------------------------------------------------------------------- |
| 🚀   | Early-stage instincts    | Fast decisions, scrappy iteration, and knowing when to add process — and when not to. |
| 🤖   | AI as a force multiplier | Adopting LLM tooling to help small teams do the work of larger ones.                  |
| 🧭   | Systems over heroes      | Paved roads, clear defaults, and delivery pipelines that just work.                   |

---

## Section 2: About Page (`/about/`)

### New section order

1. **Hero** — Updated lede leading with 15 years + startup focus + multi-hat framing
2. **The career in one paragraph** _(new section)_ — Short prose: 15 years, early-stage startups, IC to EM journey, AI-augmented delivery focus. This is the Google snippet target.
3. **What I bring** _(replaces "Engineering Leadership Philosophy")_ — Three differentiators:
   - Early-stage experience (scrappy, fast, lean)
   - AI adoption leadership (championing Claude/LLMs, internal tooling)
   - The multi-hat reality (EM + CTO + IC + product thinking)
4. **How I work best** — Keep as-is
5. **Right now** _(expanded)_ — Explicitly lists: Engineering leadership at Amiqus · Driving AI/Claude adoption · Building internal automation tooling
6. **Interests** — Keep as-is
7. **CTA** — Keep as-is

### Hero lede (new)

`I'm Tom Stirrop-Metcalfe — an engineering leader with 15 years of building teams at early-stage startups. I've worn every hat: hands-on engineer, tech lead, engineering manager, and occasional de facto CTO. I care about AI adoption, sustainable delivery, and teams that actually enjoy their work.`

### "The career in one paragraph" (new section, new copy)

`Fifteen years ago I started writing code. Since then I've led engineering at early-stage startups across the UK, scaling teams from handful to dozens, introducing process without bureaucracy, and shipping products people actually use. Today I'm Engineering Leader at Amiqus, where I'm focused on AI adoption, delivery metrics, and building a team that can move fast without breaking things.`

### "What I bring" bullet points (replaces Engineering Leadership Philosophy)

- **Early-stage instincts:** I've operated in environments where speed matters more than perfection and process needs to earn its place. I know the difference between a startup that needs more rigour and one that just needs to ship.
- **AI adoption leadership:** I'm actively championing Claude and LLM tooling at Amiqus — embedding AI into engineering workflows to help a small team punch above its weight.
- **The multi-hat reality:** At small companies, the EM role bleeds into CTO, product, and sometimes individual contributor. I'm comfortable across all of it and I think that breadth makes me a better leader.

### "Right now" section (expanded)

- Engineering leadership at [Amiqus](https://amiqus.co/)
- Championing Claude and AI tooling adoption across the engineering team
- Building internal automation tooling to improve delivery workflows
- Writing about engineering leadership, AI adoption, and the startup EM experience

---

## Section 3: Writing Section

### Routes

- `/writing/` — index listing all articles
- `/writing/[slug]/` — individual article pages (static, one `.vue` file per article)

Both added to `src/router/index.ts` and to `dynamicRoutes` in `vite.config.ts`.

### File structure

```
src/views/
  Writing.vue                        # /writing/ index page
  writing/
    WearingEveryHat.vue              # /writing/wearing-every-hat/
    AiAdoptionSmallTeams.vue         # /writing/ai-adoption-small-teams/
    EarlyStageEngineeringCulture.vue # /writing/early-stage-engineering-culture/
```

### Writing index page

- Clean card-per-article list: title, date, one-line summary
- Consistent with existing Projects grid style (no new CSS patterns)
- No pagination needed for launch

### Individual article pages

- Layout: title, date, estimated reading time, body content
- Each calls `useSeo()` with `BlogPosting` schema
- Content authored directly in Vue template (no CMS, SSG-friendly)

### Seed articles

| Slug                                        | Title                                                             | Topic                     |
| ------------------------------------------- | ----------------------------------------------------------------- | ------------------------- |
| `/writing/wearing-every-hat/`               | _What nobody tells you about being the only EM at a startup_      | Multi-hat / CTO-EM hybrid |
| `/writing/ai-adoption-small-teams/`         | _How small engineering teams can adopt AI without losing control_ | AI/LLM adoption           |
| `/writing/early-stage-engineering-culture/` | _The engineering culture moves that matter most before Series A_  | Startup leadership        |

### Navigation

- Add "Writing" link to `src/components/Header.vue` desktop nav
- Add "Writing" link to `src/components/MobileNav.vue`

---

## Section 4: SEO & Schema Updates

### `DEFAULT_PERSON` in `src/config/seo.ts`

| Field         | Old                                                       | New                                                                                                                                                                  |
| ------------- | --------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `jobTitle`    | `"Software Engineering Manager"`                          | `"Engineering Leader"`                                                                                                                                               |
| `description` | `"Engineering leader focused on sustainable delivery..."` | `"Engineering leader with 15 years' experience building high-performing teams at early-stage startups. Championing AI adoption and sustainable delivery at Amiqus."` |
| `knowsAbout`  | 5 items                                                   | Expanded — see below                                                                                                                                                 |

**New `knowsAbout`:**
`"Software Engineering"`, `"Engineering Leadership"`, `"AI Adoption"`, `"LLM Tooling"`, `"Startup Engineering"`, `"Agile Management"`, `"Scalable Systems"`, `"Team Building"`, `"Engineering Strategy"`, `"Claude AI"`

### New schema type

Add `SchemaBlogPosting` interface to `src/config/seo.ts`:

```ts
export interface SchemaBlogPosting extends SchemaThing {
  '@type': 'BlogPosting';
  headline: string;
  description?: string;
  url: string;
  datePublished: string;
  dateModified?: string;
  author: SchemaPerson | { '@type': 'Person'; name: string };
  keywords?: string[];
  inLanguage?: string;
  isPartOf?: SchemaWebSite;
}
```

Add `SchemaBlogPosting` to the `StructuredData` union type.

### Meta title/description per page

| Page                | Title                                                                                      | Description                                                                                                                                                  |
| ------------------- | ------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| Homepage            | `Tom Stirrop-Metcalfe \| Engineering Leader & AI Advocate`                                 | `Engineering leader with 15 years building teams at early-stage startups. Championing AI and LLM adoption at Amiqus.`                                        |
| About               | `About Tom Stirrop-Metcalfe \| 15 Years of Engineering Leadership at Early-Stage Startups` | `Tom Stirrop-Metcalfe is an engineering leader with 15 years of early-stage startup experience, championing AI adoption and sustainable delivery at Amiqus.` |
| Writing index       | `Writing \| Tom Stirrop-Metcalfe`                                                          | `Articles on engineering leadership, AI adoption, and the multi-hat startup EM experience.`                                                                  |
| Wearing Every Hat   | `What nobody tells you about being the only EM at a startup \| Tom Stirrop-Metcalfe`       | `Fifteen years of wearing every hat at early-stage startups. What the EM role actually looks like when there's no CTO above you.`                            |
| AI Adoption         | `How small engineering teams can adopt AI without losing control \| Tom Stirrop-Metcalfe`  | `Practical lessons from championing Claude and LLM tooling adoption at a small engineering team.`                                                            |
| Early-Stage Culture | `The engineering culture moves that matter most before Series A \| Tom Stirrop-Metcalfe`   | `The highest-leverage engineering culture investments for startups before they scale.`                                                                       |

---

## What is NOT in scope

- Option C additions: `/now/`, `/hire/`, speaking/consulting pages
- CMS or dynamic content — all articles are static Vue files
- Design system changes — use existing CSS patterns throughout
- Dark mode changes — existing theming applies automatically

---

## Files changed

| File                                                 | Change                                                                     |
| ---------------------------------------------------- | -------------------------------------------------------------------------- |
| `src/config/seo.ts`                                  | Update `DEFAULT_PERSON`, add `SchemaBlogPosting`, update `HOME_SEO_CONFIG` |
| `src/views/Homepage.vue`                             | Rewrite hero copy and pillars                                              |
| `src/views/About.vue`                                | Restructure sections, new copy throughout                                  |
| `src/views/Writing.vue`                              | New file — writing index                                                   |
| `src/views/writing/WearingEveryHat.vue`              | New file — article                                                         |
| `src/views/writing/AiAdoptionSmallTeams.vue`         | New file — article                                                         |
| `src/views/writing/EarlyStageEngineeringCulture.vue` | New file — article                                                         |
| `src/router/index.ts`                                | Add `/writing/` and 3 article routes                                       |
| `vite.config.ts`                                     | Add writing routes to `dynamicRoutes`                                      |
| `src/components/Header.vue`                          | Add Writing nav link                                                       |
| `src/components/MobileNav.vue`                       | Add Writing nav link                                                       |
