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
  slug: "ai-concentrating-capital-faster-than-markets-realize",
  title: "AI Is Concentrating Capital Faster Than Markets Realize",
  dek: "Compute infrastructure is becoming the new balance-sheet core, concentrating returns, bargaining power, and geopolitical leverage in fewer hands.",
  topic: "AI & Technology",
  author: "Elena Hartmann",
  publishedAt: "May 17, 2026",
  readTime: "14 min read",
  imageAlt: "A minimalist skyline with compute campuses and transmission lines",
  pullQuote:
    "When compute becomes strategic infrastructure, valuation is no longer only about growth; it is about control over the system that allocates future productivity.",
  body: [
    "The prevailing market narrative still frames artificial intelligence as a software productivity story. In practice, the decisive layer is infrastructure: power contracts, data-center footprint, advanced semiconductors, and distribution privileges in enterprise channels.",
    "That architecture is concentrating capital because it compounds across domains. Firms with privileged compute access can train better systems, offer lower inference costs, capture larger enterprise workflows, and then reinvest into infrastructure that widens the moat.",
    "Incentives reinforce concentration. Cloud providers seek utilization density, governments seek strategic autonomy, and large enterprises seek fewer counterparties with stronger reliability guarantees. Each actor, rationally pursuing stability, unintentionally narrows the field.",
    "The capital implication is that AI should be analyzed less like a broad software cycle and more like a strategic utility cycle with platform economics. Returns accrue disproportionately to nodes that combine financing capacity, energy certainty, and policy access.",
    "Long-term, this creates a new financial geography. Jurisdictions that can align energy systems, institutional trust, and industrial policy will host the next generation of globally relevant balance sheets; those that cannot will import intelligence at premium prices.",
  ],
};

export const latestAnalysis: Article[] = [
  featuredArticle,
  {
    slug: "quiet-return-of-industrial-policy",
    title: "The Quiet Return of Industrial Policy",
    dek: "States are re-emerging as long-horizon capital allocators in strategic sectors, with consequences for returns, competition, and alliance structures.",
    topic: "Systems",
    author: "Marc Delacroix",
    publishedAt: "May 15, 2026",
    readTime: "12 min read",
    imageAlt: "Industrial corridor with fabrication facilities and freight rail",
    pullQuote:
      "Industrial policy is no longer exceptional intervention; it is becoming the baseline operating condition for strategic markets.",
    body: [
      "For three decades, the dominant assumption was that states should shape rules while markets allocate capital. That boundary is being redrawn. In semiconductors, energy infrastructure, and critical supply chains, public institutions are allocating capital directly or indirectly through guarantees, tax architecture, and procurement design.",
      "The structural driver is strategic vulnerability. Pandemic dislocations, energy shocks, and geopolitical rivalry demonstrated that pure efficiency models can underprice systemic fragility. Governments now treat resilience as an economic output, not merely a political objective.",
      "Incentive structures are changing accordingly. Corporates seek policy certainty before committing multi-decade capex. Governments seek domestic capacity without sacrificing competitiveness. Investors seek exposure to policy-supported demand while hedging regulatory reversal risk.",
      "Capital allocation therefore becomes hybrid: private balance sheets scale projects, but public frameworks increasingly determine viability. This shifts valuation discipline toward jurisdictional credibility, administrative competence, and long-cycle policy consistency.",
      "The long-term interpretation is not deglobalization but re-architected globalization. Networks are being re-layered through strategic blocs, and capital will be rewarded where interoperability and security are jointly engineered.",
    ],
  },
  {
    slug: "trust-as-financial-premium",
    title: "Why Trust Is Becoming a Financial Premium",
    dek: "Institutional credibility is increasingly priced as economic infrastructure in an era of fragmentation, sanctions risk, and policy volatility.",
    topic: "Risk",
    author: "Noah Steiner",
    publishedAt: "May 13, 2026",
    readTime: "10 min read",
    imageAlt: "Institutional architecture in monochrome with strong geometric lines",
    pullQuote:
      "In uncertain systems, trust functions as collateral: it lowers transaction friction and expands the feasible horizon of capital.",
    body: [
      "Markets often treat trust as an intangible narrative variable. In practice, trust is an operating asset with measurable effects on funding costs, contractual duration, and cross-border deal velocity.",
      "Fragmentation magnifies this dynamic. As sanctions frameworks, data localization rules, and strategic export controls proliferate, counterparties price institutional reliability more aggressively than in the low-volatility globalization era.",
      "The incentive map is clear. Governments need credibility to attract strategic investment; corporations need predictable governance environments; investors need confidence that legal and political commitments will survive electoral cycles.",
      "Capital implications are material. Jurisdictions and institutions with durable procedural legitimacy command valuation premiums, while governance opacity increasingly behaves like a hidden leverage factor in portfolios.",
      "Long-term, trust should be analyzed as part of financial architecture rather than corporate messaging. The institutions that preserve procedural integrity through stress will define the next baseline for global capital allocation.",
    ],
  },
  {
    slug: "political-capital-flows-incentive-economy",
    title: "Political Capital Flows and the Incentive Economy",
    dek: "Capital increasingly follows incentive design rather than declared ideology, requiring a more structural reading of policy and disclosures.",
    topic: "Geopolitics",
    author: "Alicia Renner",
    publishedAt: "May 11, 2026",
    readTime: "11 min read",
    imageAlt: "Parliament district and financial center connected by transport network",
    pullQuote: "Policy language explains intent; incentive architecture reveals destination.",
    body: [
      "Public debate often frames capital flows through partisan narratives. A more useful lens is incentive engineering: tax treatment, procurement access, subsidy conditionality, disclosure regimes, and legal certainty.",
      "When these variables align, capital moves quietly and persistently, frequently before headlines catch up. This is visible across energy transition manufacturing, strategic logistics, and advanced technology build-outs.",
      "Actors respond rationally. Policymakers optimize for domestic resilience and employment quality. Corporates optimize for margin durability and regulatory predictability. Asset allocators optimize for downside containment alongside policy-supported demand.",
      "The capital implication is methodological: analysts should map incentives and implementation capacity, not just speeches and policy announcements. The largest positioning errors now come from mistaking declared priorities for executable frameworks.",
      "Long-term, the incentive economy will shape a new political geography of returns. Regions that combine policy clarity with institutional trust will capture durable investment cycles.",
    ],
  },
  {
    slug: "new-geography-of-strategic-capital",
    title: "The New Geography of Strategic Capital",
    dek: "AI, energy, semiconductors, defense, and logistics are reconfiguring where long-horizon capital can compound with acceptable systemic risk.",
    topic: "Capital",
    author: "Sofia Weiss",
    publishedAt: "May 9, 2026",
    readTime: "13 min read",
    imageAlt: "Global map abstraction linking ports, grids, and industrial clusters",
    pullQuote:
      "Strategic capital no longer seeks only growth; it seeks jurisdictions where infrastructure, incentives, and institutions align.",
    body: [
      "Capital is redrawing its map around strategic systems. The central question is no longer where labor is cheapest, but where critical infrastructure can scale without geopolitical interruption.",
      "AI compute clusters require abundant power, stable regulation, and advanced hardware supply. Defense modernization requires manufacturing depth and political alignment. Energy transition requires permitting velocity and grid reliability. These constraints are geographic before they are financial.",
      "Incentives determine movement. Sovereign guarantees, industrial tax regimes, and procurement commitments can re-route billions in long-duration investment within a single planning cycle.",
      "For allocators, this shifts due diligence from sector-only analysis toward system analysis: energy architecture, legal resilience, alliance exposure, and institutional competence all become valuation inputs.",
      "The long-term implication is a more regionalized but still interconnected global economy. Capital will not retreat from globalization; it will selectively re-anchor in jurisdictions that can deliver strategic continuity.",
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return latestAnalysis.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string) {
  return latestAnalysis.filter((article) => article.slug !== currentSlug).slice(0, 3);
}
