# SwissCapital Article Quality Loop

Run a two-model quality loop (ChatGPT + Claude) until the draft reaches the target score or a timeout/iteration limit is hit.

## What it does

- Evaluates the draft with both models each iteration.
- Scores against SwissCapital-style dimensions.
- Aggregates scores.
- Optionally rewrites the draft using one model.
- Stops when threshold is reached or timeout/iteration cap is hit.

## Required environment variables

- OPENAI_API_KEY
- ANTHROPIC_API_KEY

## Basic usage

```bash
node automation/quality-loop/run-quality-loop.mjs \
  --input research/2026-10-24-ai-boom/DRAFT_v1.md \
  --targetAverage 8 \
  --minDimension 7 \
  --maxIterations 6 \
  --timeoutMinutes 20
```

## Optional flags

- `--openaiModel gpt-4.1`
- `--claudeModel claude-sonnet-4-5`
- `--reviser openai|claude` (default `openai`)
- `--noRewrite true` (evaluate only, no auto rewrite)
- `--outputDir automation/quality-loop/output`

## Output

Per iteration:
- `report-openai.json`
- `report-claude.json`
- `report-aggregate.json`
- `draft.txt`

Final result:
- `result.json`

## Recommended workflow

1. Run loop until average >= 8 and min-dimension >= 7.
2. If passed, do human final edits for sourcing precision and tone.
3. Then prepare article JSON payload and PR.

## Note

This tool enforces quality feedback loops, but factual correctness still requires manual source verification and editorial fact-checking.
