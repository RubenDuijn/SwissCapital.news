# Editorial Link and Citation Policy - SwissCapital.news

## Purpose
Apply a consistent, institutional linking standard that improves verification while keeping prose clean and readable.

## Inline Link Standard
- Link material facts, statistics, forecasts, policy statements, and disclosed financial figures to the source used for that claim.
- Use descriptive anchor text that tells the reader what the source contains.
- Prefer source-level documents (datasets, filings, releases, policy pages) over generic portals.
- Place links in the sentence where the supported claim appears.
- Avoid exposing raw URLs in article prose.
- Do not over-link. Add links only when they materially improve verification or context.

## Sources and References Standard
- Research-heavy articles must include a concise Sources and References list.
- Each entry should include:
  - Source title
  - Publisher
  - Publication or release date where available
  - Direct URL to the relevant document
- Keep references selective. Include sources that substantiate core claims, not every peripheral reading source.
- Do not duplicate every inline link in references unless the article format requires exhaustive bibliography behavior.

## Internal Linking Standard
- Add internal links only where another SwissCapital analysis materially deepens context.
- Use descriptive anchor text, not generic prompts.
- Preserve canonical routes under /articles/[slug].
- Avoid circular chains that do not improve understanding.

## Verification Standard
- Validate that each source URL resolves and supports the specific claim it is attached to.
- Flag and replace generic portals where a direct report or release exists.
- Distinguish between:
  - External evidence (source-supported facts)
  - Editorial interpretation (analytical judgment)
- Do not imply source support for statements that are interpretive or scenario-based.

## Current Content-Model Implementation (No Redesign)
SwissCapital already supports this policy through existing fields in each article JSON:
- body: inline markdown links inside paragraph strings
- references: concise structured bibliography entries with title, source, and href

Implementation guidance without schema changes:
- Encode date metadata in the reference title where relevant (for example: "Summary of Economic Projections (September 16, 2026)").
- Keep inline claim links in body paragraphs and reserve references for core-source rollup.
- Continue using slug-based internal links for cross-article context.

## Applied in October 2026 Review
This policy has been applied to:
- AI article (ai-boom-economic-revolution-or-market-mispricing)
- Geopolitics article (geopolitics-and-markets-energy-trade-and-risk-pricing)

Key upgrades made:
- Replaced generic source portals with direct source documents where available.
- Tightened anchor text to describe exactly what the reader will find.
- Added selective internal cross-links between AI and geopolitics analysis where context is additive.
- Reduced references to a concise, substantiating set aligned with the body claims.

## Rendering and UX Rules (Added 2026-10-24)

### Markdown Rendering Safety Rules
- Do not rely on content being perfectly formed. Rendering must tolerate common malformed markdown-link patterns.
- Before link parsing, normalize common errors:
  - Missing opening bracket pattern: `label](url)` -> `[label](url)`
  - Extra trailing parenthesis pattern: `[label](url))` -> `[label](url)`
- Parse links only after normalization and render clean anchor text with no visible markdown tokens.
- Ensure no literal markdown artifacts are visible in final article HTML, including `[` `]` `(` `)` around anchor text.

### Touch and iPad Readability Rules
- Article-body links must be visually identifiable without hover interaction.
- Use always-visible underlines for article links.
- Increase underline thickness and hit area on coarse pointers (touch devices).
- Provide clear focus-visible styling for keyboard and assistive navigation.
- Do not require trial taps to determine clickability.

### Reference Marker Rules
- Avoid bracket-styled list markers in references (`[1]`, `[2]`) because they can be mistaken for malformed markdown.
- Use plain numeric markers (`1.`, `2.`) in Research Basis references.

## Incident Findings and Resolution (2026-10-24)

### Root Cause
- Article rendering in `src/app/articles/[slug]/page.tsx` previously parsed only strictly valid markdown links.
- When content included malformed link syntax variants, raw tokens could leak into visible text.
- On iPad/touch, the previous link style depended heavily on hover-style affordances, reducing immediate link discoverability.

### Files Updated for Resolution
- `src/app/articles/[slug]/page.tsx`
- `src/app/globals.css`

### Validation Performed
- `npm run lint` passed.
- `npm run build` passed.
- Rendered output checked for both published target articles:
  - `ai-boom-economic-revolution-or-market-mispricing`
  - `geopolitics-and-markets-energy-trade-and-risk-pricing`
- Confirmed no visible raw markdown around anchor labels in rendered article links.

### Operational Note
- External link reachability checks can return provider-side blocks (for example 403/503 from some domains during automated requests).
- Treat those as verification-environment constraints unless content URLs are proven incorrect.
