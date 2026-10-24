# Incident: Article 404 After Successful Deployment (2026-10-24)

## Summary

Two newly published article URLs returned 404 on production even though the deployment showed `Ready` and the article JSON files existed in the repository.

Affected URLs:

- `https://swisscapital.news/articles/ai-boom-economic-revolution-or-market-mispricing`
- `https://swisscapital.news/articles/geopolitics-and-markets-energy-trade-and-risk-pricing`

## Root Cause

`origin/main` still had an older `src/lib/content.ts` implementation with a hardcoded article list.

Result:

- New article JSON files were present in `src/content/articles`.
- Production route generation still used the hardcoded list.
- New slugs were never generated, so `/articles/{slug}` returned 404.

## Resolution

1. Updated `src/lib/content.ts` on `main` to load from JSON content files.
2. Added the required content files on `main`:
   - `src/content/topics.json`
   - `src/content/featured-article.json`
   - article JSON files in `src/content/articles`
3. Pushed fix commit:
   - `b7701eb` (`Fix production content loading from JSON articles`)
4. Production verification returned HTTP 200 for both affected article URLs.

## Verification Commands

```bash
# Confirm content loader behavior on remote main
git show origin/main:src/lib/content.ts | sed -n '1,140p'

# Confirm required content files exist on remote main
git ls-tree --name-only -r origin/main src/content src/lib

# Confirm article paths are generated locally
npm run build

# Check production status codes
curl -s -o /dev/null -w 'home %{http_code}\n' https://swisscapital.news/
curl -s -o /dev/null -w 'article1 %{http_code}\n' https://swisscapital.news/articles/ai-boom-economic-revolution-or-market-mispricing
curl -s -o /dev/null -w 'article2 %{http_code}\n' https://swisscapital.news/articles/geopolitics-and-markets-energy-trade-and-risk-pricing
```

## Prevention Checklist (Before Every Article Release)

1. Confirm `main` has file-based content loader (`src/lib/content.ts`) and not hardcoded article arrays.
2. Confirm all required JSON content files are committed in the same release:
   - `src/content/topics.json`
   - `src/content/featured-article.json`
   - `src/content/articles/*.json`
3. Run `npm run build` and confirm expected slugs appear under `/articles/[slug]`.
4. Redeploy production from latest `main` commit.
5. Verify HTTP 200 on homepage and newly published article URLs.
