# Node-by-node configuration

This is the exact sequence to configure in n8n.

## 1) Trigger

- Node: `Manual Trigger` for testing
- Later: add `Schedule Trigger` daily at 06:00 Europe/Zurich

## 2) Idea Intake (Code)

Input fields:
- `topic`
- `whyNow`
- `structuralRelevance`
- `format`

Output example:

```json
{
  "topic": "AI & Technology",
  "whyNow": "...",
  "structuralRelevance": "...",
  "format": "Analytical Essay"
}
```

## 3) Thesis Framing (LLM)

Provider: OpenAI (or equivalent)
Model: your best long-form model
Prompt requirements:
- opening thesis (1 to 3 sentences)
- structural claim
- preliminary capital implication
- 6-point outline
- institutional tone only

## 4) Drafting (LLM)

Required section order:
1. Opening thesis
2. Structural analysis
3. Incentive analysis
4. Capital implications
5. Long-term systemic interpretation

Hard constraints:
- no clickbait language
- no creator/newsletter framing
- minimum 4 named references

## 5) Quality Gate (Code)

Checks:
- banned phrase scan
- scorecard thresholds
- schema shape

Banned phrases:
- game-changing
- revolutionary
- must-read now
- alpha
- viral
- newsletter-first
- creator-led

Decision rules:
- Publish only if all score dimensions >= 7
- Average score >= 8
- No banned phrases

## 6) Decision Router (IF)

Condition:
- if `decision === publish` -> PR branch
- else -> review queue

## 7) GitHub branch + commit

- Write file to `src/content/articles/{{slug}}.json`
- Branch: `auto/article-{{slug}}`
- Commit message: `Add draft article: {{title}}`

## 8) Pull Request

- Base: `main`
- Head: `auto/article-{{slug}}`
- Body includes: score summary + gate results

## 9) Review Queue (Slack)

Send:
- title
- gate failures
- banned phrase hits
- scorecard summary

## 10) Optional final gate

Add one manual approval node before PR creation if you want a strict editor sign-off.
