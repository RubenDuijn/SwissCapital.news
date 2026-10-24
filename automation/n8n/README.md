# SwissCapital n8n Automation

This folder contains the first production-ready blueprint for article generation with strict editorial gating.

## What is included

- `workflows/swisscapital-article-pipeline.json`: importable n8n workflow scaffold
- `../..//schemas/article-payload.schema.json`: strict payload schema used in validation logic
- `.env.example`: local runtime variables for n8n

## Local setup (no Docker required)

Docker is not available on this machine, so use `npx` based startup.

1. From project root, start n8n:

```bash
npm run n8n:start
```

2. Open the n8n editor:

```text
http://localhost:5678
```

3. Import the workflow:

```bash
npm run n8n:import
```

4. In n8n credentials, add:
- OpenAI (or your selected LLM)
- GitHub token with repo write permissions
- Slack (optional review queue)

## Suggested activation mode

Keep this workflow in `Draft to PR` mode first:
- Create branch
- Add JSON article file
- Open PR
- Human merge required

Do not enable direct publish until at least 10 consecutive passes with only minor human edits.

## Workflow outputs

- `draftPayload`: generated article
- `qaReport`: gate pass/fail + banned phrase hits
- `prMeta`: branch/PR URL when approved
- `reviewPacket`: Slack payload for failed checks
