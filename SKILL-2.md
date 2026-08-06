---
name: website-precision-clone
description: Replicates the visual design of a reference website (from a URL or screenshot) into frontend code (HTML/CSS or React) with high fidelity — colors, typography, spacing, layout, and components are matched as closely as possible to the original, not loosely reinterpreted the way AI tends to. Use this skill whenever the user provides a website link, screenshot, or design example and asks to have it rebuilt ("clone", "replicate", "recreate", "match this style", "reference design"), even if they don't explicitly name the skill. Good for cloning landing pages, rebuilding a competitor's UI for internal use, or turning an approved client mockup into a starter template. Do NOT use this for building a brand-new design with no concrete visual reference — use the frontend-design skill for that instead.
---

# Website Precision Clone

## Philosophy

This skill isn't about being "inspired by" a reference — it's about **replicating** it. That distinction matters: when asked to design something new, Claude should (and usually ought to) make its own creative calls. Here, the creative decisions have already been made by the original designer. Claude's job is to read those decisions carefully and translate them into code as accurately as possible, not overwrite them with its own defaults or preferences.

In this context, "AI slop" means a clone that *feels* close but is actually riddled with small deviations: a substitute font that's "close enough," colors rounded to the nearest familiar hex, spacing guessed instead of measured, original copy swapped for generic filler text, plus decorative extras (gradients, shadows, icons, animations) added because they "look nicer" even though they weren't in the original. Precision beats taste here.

## Workflow

### Step 1 — Gather as much reference evidence as possible

Don't start coding from memory or a guess. Collect first:

- **If the user gives a URL**: use `web_fetch` to pull the HTML. If computed CSS isn't fully readable from a raw fetch, ask the user for screenshots at a few breakpoints (desktop, tablet, mobile), or if browser/devtools access is available (e.g. Claude in Chrome), inspect directly — computed styles, fonts in use, exact colors, element sizes.
- **If the user gives a screenshot**: use `view` to examine it closely. Ask for high-resolution screenshots and, where possible, multiple states (hover, scrolled, mobile) — users often only send one desktop screenshot, so ask whether there's also a mobile version that needs replicating.
- If any part of the reference is unclear (cut-off text, a gradient that's hard to pin down exactly), **ask the user** rather than guessing and proceeding as if the guess were fact.

### Step 2 — Systematically extract the design tokens

Before writing a single line of code, extract and note these tokens explicitly (as code comments or a summary to the user):

- **Colors**: pull hex/rgb values as precisely as possible from every visible element (background, text, border, accent, hover/active states). Don't round to "familiar" values — don't default to `#000` when the original is actually `#0a0a0c`.
- **Typography**: identify the typeface style (serif/sans/mono, geometric/humanist, etc.), then find the closest available match if the original is proprietary. Also note the heading vs. body size scale, font-weights used, line-height, and letter-spacing — these subtle details are usually what make a clone "look similar but feel off."
- **Spacing & grid**: measure, don't guess. Compare relative gaps between elements (e.g. section padding looks ~2x card padding). Note container max-width, number of grid columns, gutter size.
- **Component details**: border-radius, shadows (or the deliberate absence of them), border style (hairline vs. thick), button shape (rounded/pill/sharp), icon style.
- **Layout structure**: section order, element positioning (sticky nav or not, full-bleed vs. contained hero), visible responsive breakpoints.

### Step 3 — Preserve the original content

If the reference is the user's own site, or the goal is internal (benchmarking, prototyping, migration), use the **original text** from the reference as-is, not a generic paraphrase — copy is part of the design (see the `frontend-design` skill's writing guidance if relevant). If part of the content is unreadable from a screenshot, flag it clearly to the user as a placeholder that needs filling in, rather than silently inventing replacement copy.

Ethics note: make sure the purpose of the replication is legitimate (the user's own site, an internal prototype, a learning exercise, or with permission) — not impersonating another brand or redistributing someone else's copyrighted content publicly.

### Step 4 — Build the code from the tokens, not from instinct

Write HTML/CSS (or React, depending on what the user wants) that follows the tokens from Step 2 exactly, with DOM structure that mirrors the reference's visual order. Use CSS custom properties for color/spacing/typography tokens so they stay consistent and are easy to correct later. For responsive breakpoints, follow the pattern visible in the reference (if a mobile version was provided) rather than Claude's own default responsive patterns.

### Step 5 — Visually compare before handing off the result

This is the step that gets skipped most often, and it's the most important one. Once the code is done:

1. Render the result (screenshot the artifact/HTML that was built, where the environment supports it).
2. Compare it side-by-side with the original reference — check colors, spacing, font sizes, alignment.
3. Note any visible discrepancies and fix them before handing off. Don't settle for "looks roughly similar" — check details like whether headings truly align, whether card padding is consistent, whether the accent color matches.
4. If anything was ambiguous and had to be guessed in Step 1, call it out explicitly to the user as something that may still need manual confirmation or adjustment.

## Anti "AI Slop" checklist — things NOT to add unless they're actually in the reference

- Decorative gradients, glows, or blur effects that aren't in the original
- Extra animations/transitions (scroll fade-ins, hover bounces, etc.) not visible in the reference
- Generic icons (e.g. from one popular icon set) replacing custom icons with a different style
- Default fallback fonts (system-ui, Arial) used quietly out of laziness instead of finding the right match
- Colors "rounded" to common values (#000, #fff, #f4f1ea, etc.) when the original is actually a specific off-black/off-white
- Spacing that "feels tidy" but wasn't actually measured against the reference
- Original copy replaced with template filler text without a reason to
- Extra sections or elements added that aren't in the reference because it "feels more complete" — if the user asked for a clone, the job is to replicate, not to improve on it, unless explicitly asked

## When the user wants a small modification from the reference

Sometimes the ask is "clone this layout but make the color blue" or "clone this but adapt it for my industry." In these cases: keep replicating with full precision everything that wasn't asked to change (spacing, typography, structure, component style), and only change the part that was explicitly requested. Don't treat a small modification request as license to take creative liberties elsewhere.
