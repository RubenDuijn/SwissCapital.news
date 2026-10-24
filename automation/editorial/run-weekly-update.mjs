import fs from "fs";
import path from "path";

const ROOT = process.cwd();
const DOCS_DIR = path.join(ROOT, "docs");
const CONTENT_DIR = path.join(ROOT, "src", "content", "articles");

const FRED_SERIES = [
  { id: "DGS10", label: "US 10Y Treasury Yield" },
  { id: "DFII10", label: "US 10Y Real Yield" },
  { id: "T10YIE", label: "US 10Y Breakeven Inflation" },
  { id: "BAMLH0A0HYM2", label: "US High-Yield OAS" },
  { id: "DCOILBRENTEU", label: "Brent Spot" },
  { id: "DEXSZUS", label: "USD/CHF" },
  { id: "DEXUSEU", label: "EUR/USD" },
  { id: "IRLTLT01DEM156N", label: "Germany Long-Term Government Bond Yield" },
];

const CORE_SOURCES = [
  "https://www.federalreserve.gov/monetarypolicy/fomcprojtabl20260916.htm",
  "https://www.snb.ch/en/publications/communication/press-releases-restricted/pre_20260924",
  "https://www.eia.gov/outlooks/steo/",
  "https://www.eia.gov/petroleum/supply/weekly/",
  "https://www.microsoft.com/en-us/Investor/earnings/FY-2026-Q4/press-release-webcast",
  "https://www.microsoft.com/investor/reports/ar26/index.html",
  "https://nvidianews.nvidia.com/news/nvidia-announces-financial-results-for-second-quarter-fiscal-2027",
  "https://ustr.gov/issue-areas/enforcement/section-301-investigations/tariff-actions",
  "https://www.bis.gov/licensing/exports-and-reexports-controls",
];

function nowDate() {
  return new Date().toISOString().slice(0, 10);
}

async function fetchText(url) {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 8000);

  let res;
  try {
    res = await fetch(url, { signal: controller.signal });
  } finally {
    clearTimeout(timeout);
  }

  if (!res.ok) {
    throw new Error(`Fetch failed (${res.status}) for ${url}`);
  }
  return res.text();
}

function parseFredCsv(csvText, points = 8) {
  const rows = csvText
    .trim()
    .split("\n")
    .slice(1)
    .map((line) => line.split(","))
    .filter((parts) => parts.length >= 2)
    .map(([date, value]) => ({ date, value }))
    .filter((row) => row.value && row.value !== ".");

  return rows.slice(-points);
}

async function fetchFredSeries(id) {
  const url = `https://fred.stlouisfed.org/graph/fredgraph.csv?id=${id}`;
  try {
    const text = await fetchText(url);
    return parseFredCsv(text);
  } catch {
    return [];
  }
}

function collectArticleLinks(filePath) {
  const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]+)\)/g;
  const raw = fs.readFileSync(filePath, "utf8");
  const article = JSON.parse(raw);
  const links = new Set();

  for (const paragraph of article.body ?? []) {
    let match = markdownLinkRegex.exec(paragraph);
    while (match) {
      links.add(match[2]);
      match = markdownLinkRegex.exec(paragraph);
    }
    markdownLinkRegex.lastIndex = 0;
  }

  for (const ref of article.references ?? []) {
    if (ref.href) {
      links.add(ref.href);
    }
  }

  return [...links];
}

async function getHttpStatus(url) {
  if (url.startsWith("/")) {
    return { status: 200, finalUrl: "internal-route" };
  }

  try {
    const headController = new AbortController();
    const headTimeout = setTimeout(() => headController.abort(), 6000);
    let res;
    try {
      res = await fetch(url, { method: "HEAD", redirect: "follow", signal: headController.signal });
    } finally {
      clearTimeout(headTimeout);
    }

    if (res.status >= 400 || res.status === 405) {
      const getController = new AbortController();
      const getTimeout = setTimeout(() => getController.abort(), 8000);
      try {
        res = await fetch(url, { method: "GET", redirect: "follow", signal: getController.signal });
      } finally {
        clearTimeout(getTimeout);
      }
    }
    return { status: res.status, finalUrl: res.url };
  } catch {
    return { status: 0, finalUrl: "request-failed" };
  }
}

async function buildLinkHealth() {
  const files = [
    path.join(CONTENT_DIR, "ai-boom-economic-revolution-or-market-mispricing.json"),
    path.join(CONTENT_DIR, "geopolitics-and-markets-energy-trade-and-risk-pricing.json"),
  ];

  const unique = new Set();
  for (const file of files) {
    for (const link of collectArticleLinks(file)) {
      unique.add(link);
    }
  }

  const results = await Promise.all(
    [...unique].map(async (url) => {
      const check = await getHttpStatus(url);
      return { url, ...check };
    }),
  );

  const bad = results.filter((r) => r.status >= 400 || r.status === 0);
  return { total: results.length, bad, results };
}

function formatFredSection(seriesRows) {
  const lines = [];
  for (const { label, id, rows } of seriesRows) {
    lines.push(`### ${label} (${id})`);
    lines.push("");
    lines.push("| Date | Value |");
    lines.push("| --- | --- |");
    for (const row of rows) {
      lines.push(`| ${row.date} | ${row.value} |`);
    }
    lines.push("");
  }
  return lines.join("\n");
}

function formatLinkHealthSection(linkHealth) {
  const lines = [];
  lines.push(`- Total unique links checked: ${linkHealth.total}`);
  lines.push(`- Broken/failed links: ${linkHealth.bad.length}`);
  lines.push("");

  if (linkHealth.bad.length) {
    lines.push("| URL | Status | Final URL |", "| --- | --- | --- |");
    for (const item of linkHealth.bad) {
      lines.push(`| ${item.url} | ${item.status} | ${item.finalUrl} |`);
    }
  } else {
    lines.push("All checked links resolved successfully.");
  }

  lines.push("");
  return lines.join("\n");
}

async function main() {
  fs.mkdirSync(DOCS_DIR, { recursive: true });

  const stamp = nowDate();
  const outputPath = path.join(DOCS_DIR, `WEEKLY_EDITORIAL_UPDATE_${stamp}.md`);

  const fredData = await Promise.all(
    FRED_SERIES.map(async (series) => {
      const rows = await fetchFredSeries(series.id);
      return { ...series, rows };
    }),
  );

  const linkHealth = await buildLinkHealth();

  const markdown = [
    `# Weekly Editorial Update - ${stamp}`,
    "",
    "Generated by: npm run editorial:update",
    "",
    "## 1) FRED market snapshot (latest rows)",
    "",
    formatFredSection(fredData),
    "## 2) Link health (current published article sources)",
    "",
    formatLinkHealthSection(linkHealth),
    "## 3) Manual review checklist (fill during editorial session)",
    "",
    "- Confirm what changed in the last 7 days for AI, rates, CHF, geopolitics, and energy.",
    "- Confirm what changed in the last 30 days for policy paths and earnings credibility.",
    "- Re-rank next publication order with evidence, not headlines.",
    "- Decide: proceed/update/delay/replace for each planned article.",
    "",
    "## 4) Core source set to refresh",
    "",
    ...CORE_SOURCES.map((url) => `- ${url}`),
    "",
  ].join("\n");

  fs.writeFileSync(outputPath, markdown, "utf8");
  console.log(`Wrote ${outputPath}`);
}

main().catch((error) => {
  console.error(error.message);
  process.exit(1);
});
