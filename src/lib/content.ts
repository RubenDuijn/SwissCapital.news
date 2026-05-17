export type Topic =
  | "Capital"
  | "AI & Technology"
  | "Geopolitics"
  | "Systems"
  | "Risk"
  | "Energy"
  | "Biotechnology";

export type ArticleFormat = "Signal Brief" | "Analytical Essay" | "Strategic Deep Dive";

export type Reference = {
  title: string;
  source: string;
  href: string;
};

export type Article = {
  slug: string;
  title: string;
  dek: string;
  topic: Topic;
  author: string;
  authorNote: string;
  publishedAt: string;
  readTime: string;
  format: ArticleFormat;
  imageAlt: string;
  body: string[];
  pullQuote: string;
  references: Reference[];
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
  author: "SwissCapital Research",
  authorNote: "Institutional research desk",
  publishedAt: "May 17, 2026",
  readTime: "18 min read",
  format: "Strategic Deep Dive",
  imageAlt: "A minimalist skyline with compute campuses and transmission lines",
  pullQuote:
    "AI is no longer a software adoption story with expensive inputs. It is a capacity market in which control over chips, power, and distribution determines who can compound.",
  body: [
    "AI is no longer best modeled as a software adoption wave. It is better understood as a global capacity market in which compute, power, and distribution are rationed scarce assets. That framing matters because capacity markets reward ownership and financing depth before they reward application variety. The primary economic question is shifting from who has the best model benchmark to who controls the bottlenecks that convert model quality into durable cash flow.",
    "The first bottleneck is capex intensity. Hyperscalers are now committing balance sheets at a scale that only a handful of institutions can sustain through a full cycle. Microsoft has tied OpenAI distribution and Azure demand into one capex engine; Amazon has paired Anthropic with AWS infrastructure commitments; Google is integrating Gemini into Search, Cloud, and Workspace to keep model economics coupled to distribution and enterprise contracts.[1][2][12] This is not conventional platform expansion. It is vertical integration between frontier model access, cloud monetization, and enterprise lock-in.",
    "Spine sentence: AI economics are converging toward utility logic, where returns accrue first to operators that can finance and continuously expand constrained capacity. In utility-like systems, market share is defended through reliability and unit cost, not feature novelty. The same mechanism now appears in AI inference and training: lower marginal compute cost and higher uptime produce structural pricing power, while smaller providers remain exposed to externally set input prices.",
    "The semiconductor stack explains why the concentration dynamic is persistent rather than cyclical. Nvidia's position reflects more than chip leadership; it reflects control over a software ecosystem, developer tooling, and deployment compatibility that compresses customer switching incentives. TSMC remains the manufacturing anchor for advanced nodes, while ASML's lithography monopoly defines the speed limit of node progression.[3][4][5] Packaging capacity, memory bandwidth, and networking constraints further increase coordination complexity, raising barriers for any challenger without synchronized access across the full chain.",
    "Compute bottlenecks therefore function as an economic filter. If supply growth at the frontier remains slower than demand growth from enterprise AI deployment, capacity is allocated to counterparties with stronger long-duration purchasing power. That favors hyperscalers and state-aligned buyers over venture-backed application companies. Pricing outcomes then reinforce concentration: larger buyers secure priority allocation and better terms, which further lowers their unit costs relative to smaller competitors.",
    "Energy is the second hard constraint and the one most often underpriced in equity narratives. Data-center economics are increasingly shaped by grid interconnection delays, transmission build-out, cooling requirements, and exposure to merchant power volatility. EPRI and IEA work on electricity demand already points to data centers as a material load driver in several advanced markets.[6][7] As a result, AI competitiveness is becoming a function of power-system credibility: jurisdictions with bankable energy policy, permitting capacity, and reliable baseload can host the next wave of compute investment; jurisdictions without those attributes face a structural cost disadvantage.",
    "Power constraints alter corporate strategy directly. Model providers that do not control infrastructure must either accept margin compression from external capacity pricing or sign long-term commitments that reduce strategic flexibility. Infrastructure owners, by contrast, can arbitrage the cycle by pre-committing capex before demand fully clears, then monetizing scarcity through enterprise contracts. This is one reason the market is assigning disproportionate value to integrated cloud operators rather than to a broad field of standalone model and application firms.",
    "Policy frameworks are amplifying the concentration trend. The CHIPS and Science Act, export controls, and allied industrial policy are not neutral background variables; they are active allocation mechanisms that redirect where semiconductor capacity can be built and where advanced compute can be sold.[8][13] The EU AI Act applies a different lever by raising governance and compliance requirements, which tends to advantage firms with legal, operational, and auditing scale.[9] Policy is not replacing markets. Policy is reshaping the market frontier by changing the cost of participation.",
    "Sovereign capital is now a decisive actor inside that frontier. Gulf platforms such as MGX have moved upstream into compute infrastructure because infrastructure ownership captures strategic optionality that downstream model usage does not.[10] The institutional logic is straightforward: states with capital surpluses and energy depth can convert financial power into long-term leverage over AI capacity, while states without those assets risk becoming price takers in the next digital infrastructure cycle.",
    "Second-order effects are already visible in enterprise procurement. Large regulated institutions increasingly concentrate AI vendor relationships around counterparties that can demonstrate resilience across security, legal accountability, and capacity guarantees. This procurement behavior is rational under uncertainty, but it compresses market structure further by steering demand toward integrated providers. The implication is that compliance maturity and infrastructure guarantees are becoming product features in their own right.",
    "Spine sentence: in AI, the decisive moat is migrating from algorithmic novelty to system control across chips, power, and distribution. This changes valuation practice. Multiples based only on near-term revenue growth understate the strategic value of controllable capacity and overstate the durability of businesses that rent that capacity at volatile prices. For allocators, the relevant diligence stack now includes power contracts, semiconductor exposure, regulatory perimeter, and counterparty concentration risk.",
    "The geographic map follows the infrastructure map. The United States remains structurally advantaged through cloud scale, capital-market depth, and policy instruments; Taiwan remains central through manufacturing criticality; Europe retains regulatory influence but must still align governance ambition with faster infrastructure execution; Gulf jurisdictions are using sovereign balance sheets to buy relevance in the compute layer. AI leadership is therefore less about national branding and more about the ability to align finance, industrial capacity, and institutional execution over multi-year horizons.",
    "For long-horizon investors, the practical implication is to treat AI as a strategic infrastructure complex rather than a single technology sector. BlackRock's framing of infrastructure as a strategic asset class aligns with this shift because digital ambition is being translated into physical asset demand at scale.[11] The medium-term winners are likely to be institutions that own scarce capacity, secure low-cost power, and maintain policy-compatible market access. The losers are likely to be businesses dependent on commoditized access to constrained infrastructure.",
    "Spine sentence: when productivity depends on scarce compute, allocation power becomes the core source of economic rent. AI upside will not be distributed primarily by creativity at the edge; it will be mediated by the institutions that control the industrial base of computation. That is why the cycle should be interpreted as a structural re-ranking of capital, not a temporary excitement phase inside software.",
  ],
  references: [
    {
      title: "Microsoft Annual Report 2025",
      source: "Microsoft",
      href: "https://www.microsoft.com/investor/reports/ar25/index.html",
    },
    {
      title: "Anthropic and Amazon strategic collaboration",
      source: "Amazon",
      href: "https://www.aboutamazon.com/news/company-news/amazon-anthropic-generative-ai-investment",
    },
    {
      title: "Alphabet Form 10-K",
      source: "Alphabet",
      href: "https://abc.xyz/investor/",
    },
    {
      title: "NVIDIA Form 10-K",
      source: "NVIDIA",
      href: "https://investor.nvidia.com/financial-info/sec-filings/default.aspx",
    },
    {
      title: "TSMC Annual Report",
      source: "TSMC",
      href: "https://investor.tsmc.com/english/annual-reports",
    },
    {
      title: "ASML Annual Report",
      source: "ASML",
      href: "https://www.asml.com/en/investors/annual-report",
    },
    {
      title: "Electric Power Research Institute data center power studies",
      source: "EPRI",
      href: "https://www.epri.com/research/products/000000003002028905",
    },
    {
      title: "IEA Electricity 2025 outlook",
      source: "IEA",
      href: "https://www.iea.org/reports/electricity-2025",
    },
    {
      title: "CHIPS and Science Act overview",
      source: "US Department of Commerce",
      href: "https://www.commerce.gov/issues/chips",
    },
    {
      title: "Semiconductor export controls",
      source: "Bureau of Industry and Security",
      href: "https://www.bis.gov/licensing/exports-and-reexports-controls",
    },
    {
      title: "EU AI Act overview",
      source: "European Commission",
      href: "https://digital-strategy.ec.europa.eu/en/policies/regulatory-framework-ai",
    },
    {
      title: "MGX launch announcement",
      source: "MGX",
      href: "https://www.mgx.ae/",
    },
    {
      title: "Infrastructure as a strategic asset class",
      source: "BlackRock",
      href: "https://www.blackrock.com/us/individual/insights/infrastructure-investing",
    },
  ],
};

export const latestAnalysis: Article[] = [
  featuredArticle,
  {
    slug: "quiet-return-of-industrial-policy",
    title: "The Quiet Return of Industrial Policy",
    dek: "States are re-emerging as long-horizon capital allocators in strategic sectors, with consequences for returns, competition, and alliance structures.",
    topic: "Systems",
    author: "SwissCapital Analysis",
    authorNote: "Policy and systems desk",
    publishedAt: "May 10, 2026",
    readTime: "11 min read",
    format: "Analytical Essay",
    imageAlt: "Industrial corridor with fabrication facilities and freight rail",
    pullQuote:
      "Industrial policy is no longer exceptional intervention; it is becoming the baseline operating condition for strategic markets.",
    body: [
      "For three decades, the dominant assumption was that states should shape rules while markets allocate capital. That boundary is being redrawn. In semiconductors, energy infrastructure, and critical supply chains, public institutions are allocating capital directly or indirectly through guarantees, tax architecture, and procurement design.",
      "The structural driver is strategic vulnerability. Pandemic dislocations, energy shocks, and geopolitical rivalry demonstrated that pure efficiency models can underprice systemic fragility. Governments now treat resilience as an economic output, not merely a political objective.",
      "The US CHIPS Act, the Inflation Reduction Act, Japan's semiconductor support packages, and the EU's Net-Zero Industry measures all point in the same direction: the state is back inside the investment equation. This does not mean planning is replacing markets. It means market outcomes are now being engineered through incentive regimes that compress uncertainty for favored sectors while raising it for everything outside the strategic perimeter.",
      "Incentive structures are changing accordingly. Corporates seek policy certainty before committing multi-decade capex. Governments seek domestic capacity without sacrificing competitiveness. Investors seek exposure to policy-supported demand while hedging regulatory reversal risk. The most important analytical move is to read budgets, subsidy criteria, and permitting pathways as capital-allocation maps rather than as political theater.",
      "Capital allocation therefore becomes hybrid: private balance sheets scale projects, but public frameworks increasingly determine viability. This shifts valuation discipline toward jurisdictional credibility, administrative competence, and long-cycle policy consistency. A subsidy promise matters less than a government's ability to execute grid upgrades, workforce pipelines, environmental approvals, and procurement contracts in sequence.",
      "The long-term interpretation is not deglobalization but re-architected globalization. Networks are being re-layered through strategic blocs, and capital will be rewarded where interoperability and security are jointly engineered. The question for investors is no longer whether industrial policy is back. It is which states can translate policy ambition into investable industrial capacity without eroding fiscal credibility.",
    ],
    references: [
      { title: "CHIPS Program Office", source: "US Department of Commerce", href: "https://www.commerce.gov/issues/chips" },
      { title: "Inflation Reduction Act Guidebook", source: "The White House", href: "https://www.whitehouse.gov/cleanenergy/inflation-reduction-act-guidebook/" },
      { title: "Net-Zero Industry Act", source: "European Commission", href: "https://single-market-economy.ec.europa.eu/industry/sustainability/net-zero-industry-act_en" },
    ],
  },
  {
    slug: "trust-as-financial-premium",
    title: "Why Trust Is Becoming a Financial Premium",
    dek: "Institutional credibility is increasingly priced as economic infrastructure in an era of fragmentation, sanctions risk, and policy volatility.",
    topic: "Risk",
    author: "Editorial Desk",
    authorNote: "Institutions and risk coverage",
    publishedAt: "May 3, 2026",
    readTime: "10 min read",
    format: "Analytical Essay",
    imageAlt: "Institutional architecture in monochrome with strong geometric lines",
    pullQuote:
      "In uncertain systems, trust functions as collateral: it lowers transaction friction and expands the feasible horizon of capital.",
    body: [
      "Markets often treat trust as a soft variable. In practice, trust functions like operational collateral. It lowers negotiation friction, extends contract duration, compresses compliance uncertainty, and reduces the premium counterparties demand for cross-border exposure.",
      "Fragmentation magnifies this dynamic. As sanctions frameworks, data localization rules, and strategic export controls proliferate, counterparties price institutional reliability more aggressively than in the globalization period when legal convergence was largely assumed. A jurisdiction with unclear enforcement norms or volatile policy sequencing now carries a higher implicit cost of capital, even when headline growth looks attractive.",
      "The incentive map is clear. Governments need credibility to attract strategic investment; corporations need predictable governance environments; investors need confidence that legal and political commitments will survive electoral cycles. The result is that procedural legitimacy begins to matter economically in a way that resembles infrastructure quality. It is not decorative governance. It is a condition of investability.",
      "This can be observed in reserve preferences, in the premium assigned to rule-bound capital markets, and in the enduring attraction of jurisdictions that combine neutrality, legal predictability, and institutional competence. Switzerland, Singapore, and the United States play different roles in the system, but each benefits when investors need trustworthy venues for dispute resolution, asset custody, or financing depth.",
      "Capital implications are material. Jurisdictions and institutions with durable procedural legitimacy command valuation premiums, while governance opacity increasingly behaves like a hidden leverage factor in portfolios. Trust, in this sense, is best analyzed as part of financial architecture rather than as reputational narrative. When the global system becomes less certain, credibility itself becomes yield-generating infrastructure.",
    ],
    references: [
      { title: "Worldwide Governance Indicators", source: "World Bank", href: "https://info.worldbank.org/governance/wgi/" },
      { title: "Global Financial Centres Index", source: "Z/Yen", href: "https://www.longfinance.net/programmes/financial-centre-futures/global-financial-centres-index/" },
      { title: "Reserve currency composition", source: "IMF COFER", href: "https://data.imf.org/COFER" },
    ],
  },
  {
    slug: "political-capital-flows-incentive-economy",
    title: "Political Capital Flows and the Incentive Economy",
    dek: "Capital increasingly follows incentive design rather than declared ideology, requiring a more structural reading of policy and disclosures.",
    topic: "Geopolitics",
    author: "SwissCapital Research",
    authorNote: "Political economy and incentives",
    publishedAt: "April 28, 2026",
    readTime: "11 min read",
    format: "Analytical Essay",
    imageAlt: "Parliament district and financial center connected by transport network",
    pullQuote: "Policy language explains intent; incentive architecture reveals destination.",
    body: [
      "Public debate often frames capital flows through partisan narratives. A more useful lens is incentive engineering: tax treatment, procurement access, subsidy conditionality, disclosure regimes, and legal certainty. Capital does not read ideology first. It reads the operating environment.",
      "When those variables align, capital moves quietly and persistently, often before headlines catch up. This is visible across battery supply chains, semiconductor fabs, defense procurement, and logistics corridors serving allied manufacturing. The market signal tends to appear first in land acquisition, permitting acceleration, debt issuance, and sovereign co-investment rather than in public rhetoric.",
      "Actors respond rationally. Policymakers optimize for domestic resilience and employment quality. Corporates optimize for margin durability and regulatory predictability. Asset allocators optimize for downside containment alongside policy-supported demand. Those incentives frequently converge even when official messaging suggests conflict between state intervention and market freedom.",
      "The largest analytical mistake is to mistake announcements for implementation. Incentive systems only become capital flows when agencies can administer them, when procurement pipelines are credible, and when legal frameworks endure beyond a single electoral cycle. That is why analysts should track rule-making, financing terms, and administrative capacity rather than speeches alone.",
      "The capital implication is methodological: map incentives and execution quality, not just declared priorities. Long-term, the incentive economy will shape a new political geography of returns. Regions that combine policy clarity with institutional trust and physical capacity will attract strategic capital even if they are not the loudest jurisdictions in public debate.",
    ],
    references: [
      { title: "US Treasury clean energy tax credits guidance", source: "US Treasury", href: "https://home.treasury.gov/policy-issues/inflation-reduction-act" },
      { title: "EU State aid Temporary Crisis and Transition Framework", source: "European Commission", href: "https://competition-policy.ec.europa.eu/state-aid/temporary-crisis-and-transition-framework_en" },
      { title: "OECD Investment incentives and industrial policy", source: "OECD", href: "https://www.oecd.org/investment/" },
    ],
  },
  {
    slug: "new-geography-of-strategic-capital",
    title: "The New Geography of Strategic Capital",
    dek: "AI, energy, semiconductors, defense, and logistics are reconfiguring where long-horizon capital can compound with acceptable systemic risk.",
    topic: "Capital",
    author: "SwissCapital Analysis",
    authorNote: "Capital allocation and infrastructure coverage",
    publishedAt: "April 21, 2026",
    readTime: "12 min read",
    format: "Analytical Essay",
    imageAlt: "Global map abstraction linking ports, grids, and industrial clusters",
    pullQuote:
      "Strategic capital no longer seeks only growth; it seeks jurisdictions where infrastructure, incentives, and institutions align.",
    body: [
      "Capital is redrawing its map around strategic systems. The central question is no longer where labor is cheapest, but where critical infrastructure can scale without geopolitical interruption. That change is visible from Arizona semiconductor expansion to Gulf data-center ambition to the renewed strategic relevance of logistics corridors connecting Mexico, Eastern Europe, and Southeast Asia to larger industrial blocs.",
      "AI compute clusters require abundant power, stable regulation, and advanced hardware supply. Defense modernization requires manufacturing depth and alliance alignment. Energy transition requires permitting velocity, grid reliability, and mineral-processing capability. These constraints are geographic before they are financial, which is why location decisions increasingly behave like strategic asset-allocation decisions.",
      "Incentives determine movement. Sovereign guarantees, industrial tax regimes, export-credit support, and procurement commitments can re-route billions in long-duration investment within a single planning cycle. That is why capital has become more sensitive to legal reliability, alliance exposure, and infrastructure execution than to abstract narratives about globalization versus deglobalization.",
      "For allocators, this shifts due diligence from sector-only analysis toward system analysis: energy architecture, legal resilience, maritime access, alliance depth, and institutional competence all become valuation inputs. A jurisdiction may look attractive on labor cost and still fail on grid readiness or permitting discipline. Conversely, a higher-cost jurisdiction can outperform if it offers predictable delivery on strategic infrastructure.",
      "The long-term implication is a more regionalized but still interconnected global economy. Capital will not retreat from globalization; it will selectively re-anchor in jurisdictions that can deliver strategic continuity. The next winners will not simply be the cheapest markets. They will be the most reliable systems.",
    ],
    references: [
      { title: "World Investment Report", source: "UNCTAD", href: "https://unctad.org/publication/world-investment-report-2024" },
      { title: "Global supply chain pressure and reconfiguration research", source: "Federal Reserve Bank of New York", href: "https://www.newyorkfed.org/research/policy/gscpi" },
      { title: "Semiconductor ecosystem investments in the US", source: "Semiconductor Industry Association", href: "https://www.semiconductors.org/chips/" },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return latestAnalysis.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string) {
  return latestAnalysis.filter((article) => article.slug !== currentSlug).slice(0, 3);
}
