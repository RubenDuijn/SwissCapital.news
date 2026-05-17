export type Topic =
  | "Capital"
  | "AI & Technology"
  | "Geopolitics"
  | "Systems"
  | "Risk"
  | "Energy"
  | "Biotechnology";

export type Article = {
  slug: string;
  title: string;
  dek: string;
  topic: Topic;
  author: string;
  publishedAt: string;
  readTime: string;
  imageAlt: string;
  body: string[];
  pullQuote: string;
};

export const topics: Topic[] = [
  "Capital",
  "AI & Technology",
  "Geopolitics",
  "Systems",
  "Risk",
  "Energy",
  "Biotechnology",
];

export const featuredArticle: Article = {
  slug: "liquidity-infrastructure-era",
  title: "The Liquidity Infrastructure Era",
  dek: "How central banks, sovereign funds, and machine intelligence are reshaping price discovery across borders.",
  topic: "Capital",
  author: "Elena Hartmann",
  publishedAt: "May 16, 2026",
  readTime: "11 min read",
  imageAlt: "A minimalist skyline with financial towers at dawn",
  pullQuote:
    "Capital now moves through software-defined corridors where policy, compute, and trust must remain in equilibrium.",
  body: [
    "Liquidity has become infrastructural. It is no longer a passive outcome of market depth but an actively engineered layer shaped by policy latency, collateral frameworks, and compute.",
    "In this new cycle, institutional capital allocators are re-pricing speed, jurisdiction, and resilience as first-order variables. The traditional portfolio frontier is being expanded by system-level factors once treated as peripheral.",
    "The practical implication is clear: investors need a framework that combines macro intelligence with technical literacy. Balance-sheet decisions increasingly depend on understanding data pipelines as much as sovereign credit quality.",
    "For boards and CIOs, the challenge is governance. Infrastructure risk is now portfolio risk, and portfolio risk can cascade into policy risk. The firms that adapt first will define the next decade of institutional advantage.",
  ],
};

export const latestAnalysis: Article[] = [
  featuredArticle,
  {
    slug: "energy-transition-capex-discipline",
    title: "Energy Transition, Capex Discipline, and the New Return Regime",
    dek: "Why long-duration energy investment is being valued through reliability rather than narrative momentum.",
    topic: "Energy",
    author: "Marc Delacroix",
    publishedAt: "May 14, 2026",
    readTime: "8 min read",
    imageAlt: "Industrial infrastructure and transmission lines against a pale sky",
    pullQuote:
      "Reliability has become the premium factor in infrastructure valuation.",
    body: [
      "Utilities and infrastructure investors are shifting from expansion-first to reliability-first capital deployment.",
    ],
  },
  {
    slug: "ai-governance-standards-race",
    title: "The Standards Race in AI Governance",
    dek: "Regulatory convergence is emerging through procurement rules before formal treaty architecture.",
    topic: "AI & Technology",
    author: "Noah Steiner",
    publishedAt: "May 13, 2026",
    readTime: "7 min read",
    imageAlt: "Abstract data center corridor with clean geometric lighting",
    pullQuote:
      "Who sets procurement norms today will shape model behavior tomorrow.",
    body: [
      "The most durable AI rules are being written into purchasing frameworks rather than parliamentary statutes.",
    ],
  },
  {
    slug: "supply-chains-geopolitical-optionality",
    title: "Geopolitical Optionality in Strategic Supply Chains",
    dek: "Firms are paying an explicit premium for multi-jurisdiction production resilience.",
    topic: "Geopolitics",
    author: "Alicia Renner",
    publishedAt: "May 11, 2026",
    readTime: "9 min read",
    imageAlt: "Container ships and port logistics in neutral tones",
    pullQuote: "Optionality is no longer a hedge; it is now core operating strategy.",
    body: [
      "Procurement teams are redesigning supplier concentration limits as geopolitical volatility hardens.",
    ],
  },
  {
    slug: "bioeconomy-capital-cycles",
    title: "Biotechnology and the Return of Long-Cycle Capital",
    dek: "How platform therapies are attracting patient capital despite compressed risk appetite elsewhere.",
    topic: "Biotechnology",
    author: "Sofia Weiss",
    publishedAt: "May 9, 2026",
    readTime: "6 min read",
    imageAlt: "Laboratory glass and analytical instruments in soft daylight",
    pullQuote:
      "In biotech, conviction is increasingly tied to data quality over storytelling velocity.",
    body: [
      "Institutional investors are re-entering selected biotech verticals where trial design quality is improving.",
    ],
  },
  {
    slug: "systemic-risk-shadow-balance-sheets",
    title: "Shadow Balance Sheets and Systemic Blind Spots",
    dek: "Mapping hidden leverage channels before they reach market headlines.",
    topic: "Risk",
    author: "Jonas Frei",
    publishedAt: "May 7, 2026",
    readTime: "10 min read",
    imageAlt: "Minimal monochrome graph lines over textured paper",
    pullQuote:
      "Systemic events rarely start in the visible core; they begin at the edges.",
    body: [
      "Supervisory data is improving, but synthetic leverage remains difficult to aggregate across jurisdictions.",
    ],
  },
  {
    slug: "operating-models-age-of-fragmentation",
    title: "Operating Models for an Age of Fragmentation",
    dek: "Why global firms are redesigning decision architecture around regional strategic autonomy.",
    topic: "Systems",
    author: "Helena Moor",
    publishedAt: "May 6, 2026",
    readTime: "5 min read",
    imageAlt: "Structured grid pattern representing distributed systems",
    pullQuote:
      "Institutional adaptability now depends on governance geometry as much as market timing.",
    body: [
      "Leadership teams are embedding scenario logic directly into planning cycles and capital governance.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return latestAnalysis.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string) {
  return latestAnalysis.filter((article) => article.slug !== currentSlug).slice(0, 3);
}
