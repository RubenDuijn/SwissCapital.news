# SwissCapital.news Update Workflow

Purpose:
Create a repeatable weekly update cycle that auto-prepares research inputs, while keeping editorial judgment manual and explicit.

## Best operating model

Use a hybrid model:
- Automated prep: data pull + link checks + draft weekly update file.
- Manual editorial decision: topic ranking, thesis changes, and publication order.

This avoids accidental autopublishing while saving most repetitive work.

## Weekly run command

From the project root run:

npm run editorial:update

What it does:
- Pulls latest rows for core FRED series used in SwissCapital analysis.
- Rechecks link health across the two flagship current articles.
- Writes a dated briefing file in docs.

Output pattern:
- docs/WEEKLY_EDITORIAL_UPDATE_YYYY-MM-DD.md

## Suggested weekly cadence

1. Run the updater command.
2. Review the new weekly file and compare with:
   - docs/NEXT_WEEK_EDITORIAL_RESEARCH_2026-10-24.md
   - docs/EDITORIAL_LINK_AND_CITATION_POLICY.md
3. Decide article priority for the week.
4. Draft only after evidence checks pass.

## Trigger policy

- Keep a human go/no-go step each week.
- Do not publish automatically from scripts.
- Use the script as prep infrastructure, not editorial authority.

## Quick-start prompt for next week

"Start SwissCapital weekly research update from the latest WEEKLY_EDITORIAL_UPDATE file and produce A-F deliverables for this week."
