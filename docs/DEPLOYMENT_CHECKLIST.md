# SwissCapital Deployment Checklist

Use this checklist when a page works locally but returns 404 on https://swisscapital.news.

## 1. Confirm content is on remote main

Run in the project root:

```bash
git fetch origin
git log --oneline -n 5 origin/main
```

Check that your latest commit is present.

## 2. Confirm route pattern

Article URLs use this pattern:

- `/articles/{slug}`

Not:

- `/analysis/{slug}`

## 3. Confirm the slug exists in content

Content files live in `src/content/articles`.

Each file must contain a unique `slug` field that matches the URL.

## 4. Confirm production reads JSON content files

`src/lib/content.ts` must load article JSON files from `src/content/articles`.

Quick check:

```bash
git show origin/main:src/lib/content.ts | sed -n '1,120p'
```

Expected behavior in that file:

- Reads from `src/content/articles` (for example via `fs` and `path`)
- Builds article lists from JSON files

If `origin/main` still contains a hardcoded article array, new JSON files can be present but article routes can still return 404.

## 5. Confirm production deployment source

- Hosting dashboard: Vercel (confirmed)
- Project repo: `RubenDuijn/SwissCapital.news`
- Production branch: `main`

If any of these differ, production can serve an older build.

## 6. Trigger redeploy

In Vercel:

1. Open the SwissCapital project.
2. Open Deployments.
3. Select the latest deployment for `main` or click Redeploy for Production.
4. Wait until deployment status is `Ready`.

## 7. Verify URLs

Test homepage and article URLs:

- `https://swisscapital.news/`
- `https://swisscapital.news/articles/{slug}`

Expected result:

- HTTP 200 for each published article slug.

## 8. If still 404

- Confirm the deployment commit hash matches GitHub `origin/main`.
- Confirm the slug in JSON exactly matches the URL path.
- Confirm `origin/main` includes `src/content/topics.json` and `src/content/featured-article.json`.
- Confirm `origin/main` includes required article JSON files under `src/content/articles`.
- Confirm article generation includes the slug in local build output:

```bash
npm run build
```

Look for route lines under `/articles/[slug]` that include the expected slug.
- Check for stale browser cache and test in a private window.
