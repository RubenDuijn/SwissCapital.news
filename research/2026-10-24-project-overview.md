# SwissCapital Research Project Overview

Date: 2026-10-24
Scope: Two analytical essays
- Article 1: The AI Boom: Economic Revolution or the Next Great Market Mispricing?
- Article 2: Geopolitics and the Markets: How Conflict, Energy and Trade Are Reshaping the Economic Outlook

## 1) Project structure inspection summary

Current publication content:
- src/content/articles/*.json (institutional byline JSON payloads)
- src/content/featured-article.json
- src/content/topics.json

Editorial doctrine and quality gates:
- EDITORIAL_BRAND_SYSTEM.md
- EDITORIAL_WORKFLOW.md
- ARTICLE_ACCEPTANCE_CHECKLIST.md
- .github/skills/swisscapital-copywriting/SKILL.md

Technical schema and rendering:
- schemas/article-payload.schema.json
- src/lib/content.ts
- src/app/articles/[slug]/page.tsx

## 2) Editorial tone and format constraints

Confirmed tone:
- institutional
- calm
- analytical
- systems-oriented
- evidence-dense

Required structure for long-form:
1. Opening thesis
2. Structural analysis
3. Incentive analysis
4. Capital implications
5. Long-term systemic interpretation

Quality threshold used for internal gating:
- no score dimension below 7
- target average at least 8 for publication-readiness

## 3) Available research and workflow tools

Inside project:
- n8n workflow scaffold: automation/n8n/workflows/swisscapital-article-pipeline.json
- quality loop runner: automation/quality-loop/run-quality-loop.mjs
- gate checker: automation/quality-loop/check-quality-gate.mjs
- local status page: /quality-loop route

External research tool availability in this session:
- web fetch works for a subset of official pages
- some institutions return bot-protection or extraction errors (IMF/OECD sections, select policy pages)
- these failures are documented in fact-check files as unresolved source-access limits

## 4) Execution decision

Proceeding now with:
- Stage 1 dated evidence base files for both articles
- Stage 2 findings, competing interpretations, and structure proposals for both articles

Not started yet in this step:
- Stage 3 full draft writing
- Stage 4 claim-by-claim fact-checking against final draft text
