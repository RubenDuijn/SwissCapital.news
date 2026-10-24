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
