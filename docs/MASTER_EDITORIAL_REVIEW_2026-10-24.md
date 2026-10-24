# SwissCapital.news Master Editorial, Research and Product Review

Date: 2026-10-24

## 1. Concise Audit With Ratings

1. Homepage: 8.4/10
- Strengths: clear identity, restrained visual language, strong typography, improved article hierarchy.
- Gaps: latest research needed to be placed first; featured logic relied on static lead and could hide recency.
- Importance: homepage is the primary editorial signal. If recency is not obvious, perceived publication cadence weakens.

2. AI article: 8.7/10
- Strengths: strong thesis discipline, clear macro-finance framing, materially improved evidence density.
- Gaps: still limited by access to some institutional datasets during this revision cycle; future updates should include direct valuation-series snapshots and adoption microdata when available.
- Importance: this is a flagship thesis piece; any evidence ambiguity affects publication credibility.

3. Geopolitics article: 8.6/10
- Strengths: transmission-mechanism framing, better market-date specificity, clearer scenario invalidation logic.
- Gaps: additional region-specific equity and rates granularity can improve precision in future updates.
- Importance: geopolitics pieces are highly prone to over-attribution and need tight empirical framing.

4. Archive page: 8.0/10
- Strengths: clean discoverability, consistent card presentation.
- Gaps: no explicit filters/sort controls (acceptable for current scale); no explicit newest/flagship badges.
- Importance: medium; currently manageable due to limited article count.

5. Editorial charter (About): 8.8/10
- Strengths: coherent institutional doctrine, clear authorship model and editorial principles.
- Gaps: could include a compact source-quality pledge and correction protocol.
- Importance: medium-high for trust and differentiation.

6. Related article experience: 7.9/10
- Strengths: present and functional.
- Gaps: related logic is generic exclusion-based, not topic/format relevance-based.
- Importance: medium for reader depth and session quality.

Overall publication rating: 8.5/10

## 2. Prioritized Improvement Plan

1. P1: Preserve recency clarity on homepage
- Keep latest two published articles visible above legacy foundational essays.
- Keep one foundational flagship section for brand continuity.

2. P1: Maintain strict source labeling in analytical essays
- Label each material claim as observed figure, forecast, estimate, or interpretation.
- Include period labels (quarterly, annual, trailing, forward) in prose.

3. P2: Improve related-article relevance
- Move from simple exclusion list to topic-weighted or format-aware matching.

4. P2: Metadata and sharing hardening
- Add per-article Open Graph image strategy and optional article-level social descriptions.

5. P3: Archive and research UX
- Add lightweight sort or grouping when archive exceeds current scale.

## 3. Source Verification Status (Current Two Articles)

1. Verified with primary or official public series
- Federal Reserve SEP (Sep 2026)
- EIA STEO (Oct 2026)
- Microsoft FY26 Q4 release and annual figures
- NVIDIA investor-reported latest quarterly headline figures
- FRED market series used for rates, breakevens, Brent, spreads, and major FX

2. Access-limited during this pass
- IMF WEO page extraction
- IMF GFSR page extraction
- BIS AER page extraction via automated fetch pipeline

3. Policy for access-limited sources
- Keep institutional references only.
- Avoid unattributed numerical claims when direct verification is unavailable.

## 4. Implemented Changes In This Cycle

1. Homepage information hierarchy updated
- Latest two target articles now appear in a top "Latest Research" section.
- Older pieces moved into "Archive Highlights" with the longstanding flagship separated.

2. Article upgrades retained route and schema compatibility
- Existing URLs preserved.
- Existing rendering and typography conventions preserved.

## 5. Factual Claims Requiring Future Research Pass

1. Add direct dated IMF October 2026 numeric references when fetch access permits.
2. Add additional comparable valuation breadth indicators where source access is stable.
3. Add region-specific equity sensitivity snapshots for geopolitics follow-up cycle.

## 6. Validation Summary

1. Build and type checks
- Next.js build completed successfully after homepage ordering update.

2. Functionality checks
- Article routes still generated.
- Homepage section rendering and card links compile.

3. Checks not fully completed in this pass
- Automated broken-link crawl across all outbound references.
- Mobile screen-reader audit with assistive tooling.

## 7. Publication Guidance

No deployment or external publication actions were executed in this review cycle.
