# SwissCapital.news

Intelligence on capital, technology, and global systems.

## URLs

- Live domain: https://swisscapital.news
- GitHub repository: https://github.com/RubenDuijn/SwissCapital.news.git
- Local development URL: http://localhost:3002
- Hosting platform: Vercel (confirmed)

## Local Development

```bash
npm install
npm run dev -- --port 3002
```

Open http://localhost:3002 to view the site locally.

## Stack

- Next.js (App Router)
- Tailwind CSS v4
- TypeScript

## Pages

- Homepage: /
- Article page: /articles/[slug]
- About page: /about
- Newsletter page: /newsletter

## Deployment

- Production is deployed from Vercel.
- If new content exists in GitHub but returns 404 on the live domain, trigger a Production redeploy from `main` in the Vercel dashboard.
- Use the deployment checklist in `docs/DEPLOYMENT_CHECKLIST.md`.
- See the incident runbook in `docs/INCIDENT_2026-10-24_ARTICLE_404.md`.
