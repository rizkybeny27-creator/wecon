---
name: seo-content-writer
description: Audits and rewrites website content so it ranks on page one of Google (SEO) and is more likely to be cited by AI chat tools like ChatGPT, Gemini, Perplexity, and Claude (GEO - Generative Engine Optimization), based on the user's target keyword. Use this skill whenever the user gives a target keyword for a page/article, asks for an SEO audit or review of content/a URL, wants content rewritten to be more SEO-friendly, wants a content strategy to appear in AI Overview/ChatGPT/Gemini answers, or mentions terms like "GEO", "Google ranking", "on-page SEO", "search intent", or "content optimization" — even if the user doesn't explicitly say "use the SEO skill." Works for landing pages, blog articles, service pages, and B2B/corporate content alike.
---

# SEO & GEO Content Writer

This skill helps optimize a webpage's content so it:
1. **SEO** — ranks well in Google's organic search results for a target keyword.
2. **GEO (Generative Engine Optimization)** — gets cited or referenced by AI chat tools (ChatGPT, Gemini, Perplexity, Claude, Google AI Overview).

These two goals complement each other but aren't identical: classic SEO optimizes for *crawlers and ranking signals*, while GEO optimizes for *being quoted directly as an answer*. This skill always works on both at once, not just one, because search traffic today comes through both channels.

## Workflow

Follow this order every time this skill is used. Don't jump to rewriting before research and auditing are done — recommendations that aren't grounded in actual keyword/SERP research tend to be generic and not very useful.

### 1. Gather context from the user

Before starting, make sure you know (ask briefly if unclear from the conversation, don't ask everything at once if some of it can be reasonably assumed):
- **Target keyword** (and secondary/LSI keywords, if any)
- **The content being optimized**: an existing URL, pasted draft text, or starting from scratch
- **Search intent** behind that keyword (informational, transactional, navigational, commercial) — if the user doesn't know, figure it out from SERP research
- **Audience & business context**: industry, target reader, tone/brand voice, language
- **Competitors** already ranking (optional, but sharpens the audit if available)

### 2. Keyword & SERP research (use web_search)

Don't guess what's currently ranking — search for it directly:
- Search the target keyword and look at the top 5-10 results: title patterns, heading structure, content length, content type (listicle, guide, product page, etc.), and whether an AI Overview/featured snippet appears
- Check "People Also Ask" or related searches — these signal subtopics that need coverage
- If relevant, check whether ChatGPT/Perplexity has a typical answer pattern for similar queries (e.g., list-based, table-based, short definition upfront)
- Note content gaps: topics competitors haven't covered but are relevant to the search intent

### 3. Audit the content (if it already exists)

Use the two checklists in `references/seo-checklist.md` and `references/geo-checklist.md` to score the existing content. Give a rough score per category (e.g., 1-5 scale) and concrete findings, not just "not optimal" — point out exactly which line/paragraph is the problem and why.

### 4. Write the audit report + recommendations (markdown)

The report doesn't need a rigid template, but should at minimum cover:
- **Score summary** for SEO and GEO (a table works well)
- **Search intent & target keyword** being targeted
- **Key findings** — specific things holding back ranking or AI citation
- **Prioritized recommendations** — ordered by impact, not a generic checklist
- **Content gaps** compared to top-ranking competitors

### 5. Rewrite / optimize the content

Once the direction in the report is agreed on (or immediately, if the user asks for a direct rewrite), rewrite the content applying the full checklist. Key principles while writing:

- **Keyword usage should feel natural, not stuffed.** Place the target keyword in the title, H1, 1-2 subheadings, opening paragraph, and meta description — but prioritize semantic topic coverage (related entities and subtopics) over repeating the raw keyword. Both Google and AI models already understand synonyms and context well.
- **Answer first, explain after (inverted pyramid).** The first sentence/paragraph after a heading should directly and concisely answer the implied question, and be able to stand alone — this is what makes it easy for AI chat tools to quote as a direct answer.
- **Scannable, extractable structure**: clear heading hierarchy (H1 > H2 > H3), use lists and tables for comparable data, short explicit definitions for key terms.
- **E-E-A-T signals**: data/statistics with sources, author name/credentials where relevant, a last-updated date, concrete examples or case studies — this builds trust for both Google and AI models that filter for credible sources.
- **Preserve the original brand voice** when this is a revision of existing content — don't let the optimization strip out the brand's distinctive tone.

### 6. Deliver the output

The final deliverable always has two parts (unless the user explicitly asks for only one):
1. **Audit report & recommendations** (markdown)
2. **The rewritten content**, ready to use/publish, already applying the recommendations above

For meta elements (title tag, meta description, H1), include them explicitly outside the body content — they're separate from the content itself but critical for CTR in the SERP.

## References

- `references/seo-checklist.md` — on-page SEO audit checklist (title, meta, headings, internal links, etc.) with the reasoning behind each point
- `references/geo-checklist.md` — GEO audit checklist (answer structure, extractability, credibility signals for AI) with the reasoning behind each point

Read both before auditing in Step 3 — don't rely purely on memory of SEO/GEO best practices, since these checklists contain the concrete criteria used for scoring.
