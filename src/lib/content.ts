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
  readTime: "16 min read",
  format: "Strategic Deep Dive",
  imageAlt: "A minimalist skyline with compute campuses and transmission lines",
  pullQuote:
    "When compute becomes strategic infrastructure, valuation is no longer only about growth; it is about control over the system that allocates future productivity.",
  body: [
    "The dominant public story around artificial intelligence still sounds like a software cycle: new applications arrive, adoption expands, and productivity eventually diffuses across the economy. That framing is directionally true but analytically incomplete. The decisive layer is not the interface but the infrastructure underneath it: access to advanced chips, long-duration power contracts, hyperscale data-center capacity, proprietary model distribution, and the balance-sheet resilience required to finance all four at once. Once AI is understood as infrastructure, concentration stops looking like a side effect and starts looking like the governing logic of the cycle.",
    "The emerging market structure already points in that direction. Microsoft's partnership with OpenAI is not only a distribution arrangement but also a capital allocation architecture that ties frontier model development to cloud demand, enterprise software channels, and a financing base large enough to absorb persistent capex. Amazon's relationship with Anthropic and Google's integration of Gemini across Search, Cloud, and Workspace express the same principle in different form. These are not simply product launches. They are vertically connected systems in which capital, compute, and distribution reinforce one another.[1][2]",
    "The semiconductor layer sharpens the point. Nvidia's pricing power over accelerators has been sustained not because of temporary excitement, but because the market cannot quickly replicate the combined stack of architecture, software tooling, ecosystem adoption, and manufacturing coordination. TSMC remains essential to advanced node production, while ASML's lithography position defines an additional chokepoint in the physical chain. Memory, packaging, and power-density constraints mean the relevant bottleneck is no longer a single component; it is the synchronized availability of a highly specialized industrial system.[3][4][5]",
    "That system is expensive enough to exclude all but the largest balance sheets. Frontier training runs require not only chips but also networking equipment, cooling infrastructure, real estate, and access to electricity at acceptable economics. Inference at scale then adds a second layer of cost discipline. The result is that AI economics are beginning to resemble utility economics: operators with cheaper and more reliable capacity can spread fixed costs across more demand, lower unit costs, and defend market share with structural rather than cosmetic advantages. For investors, this means the sector should be modeled less like high-multiple application software and more like a hybrid of cloud infrastructure, industrial policy, and regulated-capacity competition.",
    "Power is the least discussed but most important variable in this cycle. Data-center development is already constrained by grid bottlenecks in major US markets, while European capacity planning is increasingly linked to grid modernization and permitting regimes. AI therefore connects directly to energy infrastructure: transmission build-out, baseload reliability, merchant pricing exposure, and the credibility of long-term utility regulation. The most attractive AI jurisdiction is not simply where talent is available, but where large-scale compute can be financed without colliding with power scarcity or political backlash over industrial consumption.[6][7]",
    "Policy is reinforcing concentration rather than diluting it. The US CHIPS and Science Act, export controls on advanced semiconductors, and allied industrial-policy efforts are not creating a frictionless competitive field. They are reorganizing the field around strategic access, trusted manufacturing, and national-security alignment. The European Union is advancing a different but related logic through the AI Act and digital regulatory architecture: systems that can demonstrate compliance, governance, and operational resilience will be better positioned to secure enterprise and state adoption. In the Gulf, sovereign capital has moved rapidly into the compute and infrastructure layer because policymakers understand that model leadership without infrastructure control is strategically incomplete.[8][9][10]",
    "This has a direct consequence for capital concentration. If the infrastructure layer is scarce, then returns will not diffuse evenly across the software landscape. They will concentrate in the institutions that can finance capacity, lock in supplier relationships, obtain policy support, and intermediate demand. That favors hyperscalers, advanced semiconductor leaders, and a narrow set of infrastructure financiers over the much wider field of AI application aspirants. Many downstream companies may create real products, but their margin structure will still depend on access to upstream infrastructure controlled elsewhere.",
    "There is also a second-order governance effect. Large enterprises increasingly prefer a smaller number of AI counterparties with compliance maturity, legal resilience, and embedded cloud relationships. That is rational procurement behavior, but it further compresses the market. The pattern is historically familiar. Railroads, electrification, and cloud computing each began with narratives of broad productivity transformation; in each case, early economic power concentrated first around the operators of scarce infrastructure and only later diffused into wider productivity gains. AI appears to be following the same sequence, but at global digital speed.",
    "The strategic geography of the sector follows from that sequence. Jurisdictions combining abundant capital, trusted institutions, advanced energy systems, and allied semiconductor access will host the first durable centers of AI power. The United States remains advantaged because it combines frontier model development, cloud scale, capital-market depth, and industrial-policy instruments. Taiwan remains indispensable in manufacturing. Selected Gulf states are positioning themselves through sovereign investment, energy abundance, and geopolitical brokerage. Europe has regulatory leverage and strong industrial capability, but must still resolve whether it can pair governance strength with infrastructure scale at competitive speed.",
    "For allocators, the practical question is not whether AI matters. That is settled. The question is where value will persist after first-cycle enthusiasm fades. The answer is likely to favor the nodes that own the physical and institutional conditions of computation: semiconductors, data-center ecosystems, energy corridors, enterprise distribution, and financing platforms capable of underwriting capex before demand curves are fully proven. BlackRock's emphasis on infrastructure as a strategic asset class is relevant here because AI is steadily converting digital ambition into physical asset demand.[11]",
    "The long-term implication is that AI is reintroducing industrial concentration into what many investors assumed would remain a primarily software-mediated domain. That changes how the sector should be priced, how risk should be analyzed, and how national competitiveness should be understood. In a utility cycle, scale is not a vanity metric; it is the mechanism by which future productivity is rationed. The firms and jurisdictions controlling the infrastructure layer will not merely participate in AI upside. They will help determine who else can participate at all.",
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
