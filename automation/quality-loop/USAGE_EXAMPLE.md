# One-command quality loop example

Run:

npm run article:quality-loop -- \
  --input research/2026-10-24-ai-boom/DRAFT_v1.md \
  --targetAverage 8 \
  --minDimension 7 \
  --maxIterations 6 \
  --timeoutMinutes 20

Then verify gate:

npm run article:quality-gate

If gate passes, continue with final editorial touches and prepare JSON payload.
