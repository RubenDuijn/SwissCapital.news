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
    "AI has entered an infrastructure regime: when compute, electricity, and semiconductor throughput are binding constraints, allocation power determines return concentration.",
  body: [
    "AI should now be modeled as an infrastructure-constrained industrial system rather than a software diffusion cycle. The key shift is economic: performance improvements matter, but the binding determinants of value are compute throughput, electricity access, and capital capacity to finance both at scale. In that environment, return concentration is a function of constraint control, not narrative momentum.",
    "Spine sentence: AI is reallocating capital from software-margin expansion toward infrastructure-constrained buildouts governed by chip supply, megawatt availability, and balance-sheet endurance. Institutions that control those constraints will capture the first durable layer of economic rent.",
    "Corporate disclosures already show the scale transition. Microsoft stated plans to invest roughly $80 billion in AI-enabled data centers in fiscal 2025, signaling that frontier model economics now sit inside multi-year infrastructure commitments rather than discretionary product budgets.[16] Alphabet's disclosures and guidance similarly point to elevated capex profiles tied to AI infrastructure and technical capacity expansion.[12] The mechanism is straightforward: when utilization and latency performance depend on owned capacity, capex becomes strategic inventory, not optional spend.",
    "This capex intensity creates a financing filter. Hyperscalers can deploy long-duration capital across model training, inference infrastructure, enterprise distribution, and compliance layers in one coordinated stack. Smaller model and application firms typically cannot internalize all four layers, so they remain exposed to external pricing on compute and hosting. The result is a structural spread between owners of capacity and renters of capacity.",
    "The semiconductor chain is the first binding industrial constraint. Nvidia's advantage is not only silicon performance; it is ecosystem lock-in across software tooling, deployment workflows, and enterprise compatibility. TSMC remains central to advanced-node production and ASML remains central to leading-edge lithography throughput, creating an upstream concentration profile that cannot be replicated quickly through capital alone.[3][4][5] HBM availability, advanced packaging, and networking integration further tighten the effective frontier supply.",
    "Compute scarcity therefore behaves as an allocation regime. Capacity is prioritized to buyers with contractual depth, purchasing credibility, and strategic relevance, which reinforces incumbent advantages in cost and reliability. GPU availability is not merely a procurement challenge; it is a market-structure mechanism that determines who can ship, scale, and price before the next hardware cycle resets.",
    "Energy is the second binding constraint and increasingly the more difficult one to solve. IEA analysis indicates data-center electricity demand moving toward roughly 1,000 TWh by 2026 from about 460 TWh in 2022, implying that grid systems are becoming co-determinants of AI expansion.[7] In practice, interconnection queues, transmission delays, and local permitting are often the gating factors, not campus land or financing access.",
    "Spine sentence: in AI, the scarce input is no longer only advanced compute; it is synchronized compute plus power at deliverable time horizons. Where that synchronization fails, capital efficiency deteriorates regardless of model quality.",
    "This is why power-system credibility now enters valuation discipline. Jurisdictions with predictable permitting, bankable utility frameworks, and reliable baseload can convert AI demand into investable asset formation. Jurisdictions with volatile power pricing or prolonged interconnection cycles face delayed monetization and lower capital productivity. The constraint is temporal as well as physical: delayed power is equivalent to deferred revenue.",
    "Policy frameworks intensify, rather than dilute, concentration dynamics. The CHIPS and Science Act provides $39 billion for semiconductor manufacturing incentives and $11 billion for research and workforce programs, directly shaping where capacity can be financed and built.[8] Export controls add an additional filter by constraining high-end compute transfer across jurisdictions.[13] The EU AI Act introduces governance obligations with penalties that can reach up to 7% of global turnover for severe non-compliance, which favors operators with large compliance and legal infrastructure.[9]",
    "Sovereign and institutional capital is responding to the same logic. Platforms such as MGX have moved upstream into compute and infrastructure assets because ownership of constrained layers captures strategic optionality that downstream application exposure cannot.[10] Pension and sovereign allocations toward data centers, power networks, and semiconductor-adjacent assets reflect the same thesis: durable value accrues where supply bottlenecks are financed and governed, not where demand narratives are loudest.",
    "Second-order effects are now visible in procurement behavior. Regulated enterprises and public institutions are concentrating vendor selection around counterparties that can provide capacity assurance, governance controls, and legal accountability in one package. This is rational risk management, but it also accelerates market concentration by linking demand aggregation to infrastructure assurance.",
    "Spine sentence: the decisive moat in AI is migrating from algorithmic novelty to system control across semiconductors, power, compliance, and distribution. As that migration completes, equity narratives based solely on near-term software growth increasingly misprice long-run capital formation dynamics.",
    "Geography follows infrastructure and policy coherence. The United States retains scale advantages through cloud depth, capital markets, and industrial policy tools; Taiwan remains manufacturing-critical; Europe has regulatory leverage but must pair it with faster infrastructure delivery; Gulf jurisdictions are using sovereign balance sheets and energy position to secure strategic relevance. The relevant question is no longer who has the strongest AI narrative, but who can align finance, hardware, power, and policy over multi-year execution windows.",
    "For long-horizon allocators, AI should be treated as a strategic infrastructure complex with technology upside, not as a pure software theme. BlackRock's infrastructure framing is relevant because digital ambition is now translating into physical asset demand at system scale.[11] Expected winners are entities that can underwrite constrained capacity, secure energy reliability, and preserve policy-compatible market access. Expected laggards are entities dependent on commoditized access to bottlenecked inputs.",
    "Spine sentence: when productivity is mediated by scarce compute and scarce power, allocation authority becomes the core generator of economic rent. AI upside will be distributed by infrastructure governance and supply control before it is distributed by application creativity.",
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
    {
      title: "Apple Form 10-K",
      source: "Apple",
      href: "https://investor.apple.com/investor-relations/default.aspx",
    },
    {
      title: "AMD Annual Report",
      source: "AMD",
      href: "https://www.amd.com/en/corporate/investor-relations/financial-information/annual-reports-proxy-statements.html",
    },
    {
      title: "Microsoft plans to invest $80B in AI-enabled datacenters in FY2025",
      source: "Microsoft",
      href: "https://blogs.microsoft.com/blog/2025/01/03/microsoft-to-invest-80-billion-to-expand-ai-enabled-data-centers-to-train-ai-models-and-deploy-ai-and-cloud-based-applications-around-the-world/",
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
    readTime: "14 min read",
    format: "Analytical Essay",
    imageAlt: "Industrial corridor with fabrication facilities and freight rail",
    pullQuote:
      "Industrial policy is no longer exceptional intervention; it is becoming the baseline operating condition for strategic markets.",
    body: [
      "Industrial policy has moved from cyclical exception to baseline market architecture. In strategic sectors, the state is no longer only referee; it is a co-designer of return profiles through tax credits, grants, guaranteed offtake, export rules, and permitting priority. Capital now evaluates policy frameworks as part of core underwriting, not as exogenous political risk.",
      "The mechanism is straightforward: governments are pricing resilience as a public good and using fiscal tools to close the gap between private hurdle rates and strategic capacity needs. That changes project viability at the margin. A battery plant, fab, or grid component facility that fails a purely market discount-rate test can become financeable once policy compresses construction risk, demand uncertainty, or financing cost.",
      "In the United States, CHIPS and the Inflation Reduction Act illustrate this shift in two different ways: CHIPS lowers entry friction for semiconductor capacity linked to national-security goals, while IRA provisions create multi-year demand visibility for clean-energy and industrial decarbonization investments.[1][2] In Europe, the Net-Zero Industry framework and state-aid flexibility aim to prevent strategic sectors from being pulled entirely into US subsidy gravity.[3]",
      "This is not a return to command economics. It is a transition to incentive-governed capitalism in which public balance sheets shape the distribution of private risk. The most important variable is therefore execution quality: policy ambition without grid capacity, labor pipelines, and permitting throughput does not produce investable output. Capital is increasingly differentiating between jurisdictions that announce and jurisdictions that deliver.",
      "Corporate behavior has adjusted accordingly. Boards now sequence capex around policy durability and administrative credibility, not only around labor cost or end-market growth. The relevant due-diligence stack includes subsidy eligibility, local-content constraints, trade-exposure scenarios, and potential election-cycle reversals. Location strategy is becoming policy strategy by another name.",
      "Spine sentence: industrial policy now functions as a forward guidance system for private capital, signaling where states are willing to absorb first-loss risk in exchange for strategic capacity. Once that signal is credible, financing costs decline for aligned sectors and rise for non-aligned ones. The policy perimeter therefore becomes a valuation perimeter.",
      "Second-order effects are becoming visible in alliance economics. Subsidy competition among allies can fragment supply chains if interoperability rules diverge, but it can also accelerate bloc-level redundancy in semiconductors, energy hardware, and defense-adjacent manufacturing. The direction depends less on headline funding totals and more on whether standards, procurement rules, and trade controls are harmonized.",
      "For investors, the practical implication is to model industrial policy as a long-duration cash-flow modifier rather than a one-off catalyst. Policy can improve downside protection by anchoring demand, but it can also introduce regime risk when fiscal constraints tighten or political coalitions shift. The key analytical task is scenario-weighting policy continuity, not assuming linear support.",
      "The long-term result is not deglobalization but a re-layered globalization organized by strategic blocs and policy-compatible corridors. Capital will continue to cross borders, but with stronger filters around security alignment, supply-chain trust, and institutional execution. The central question is no longer whether industrial policy has returned. It is which states can translate policy intent into durable industrial cash flows without impairing fiscal credibility.",
    ],
    references: [
      { title: "CHIPS Program Office", source: "US Department of Commerce", href: "https://www.commerce.gov/issues/chips" },
      { title: "Inflation Reduction Act Guidebook", source: "The White House", href: "https://www.whitehouse.gov/cleanenergy/inflation-reduction-act-guidebook/" },
      { title: "Net-Zero Industry Act", source: "European Commission", href: "https://single-market-economy.ec.europa.eu/industry/sustainability/net-zero-industry-act_en" },
      { title: "State of U.S. Semiconductor Manufacturing", source: "Semiconductor Industry Association", href: "https://www.semiconductors.org/chips/" },
      { title: "Fiscal Monitor", source: "IMF", href: "https://www.imf.org/en/Publications/FM" },
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
    readTime: "12 min read",
    format: "Analytical Essay",
    imageAlt: "Institutional architecture in monochrome with strong geometric lines",
    pullQuote:
      "In uncertain systems, trust functions as collateral: it lowers transaction friction and expands the feasible horizon of capital.",
    body: [
      "Trust is being repriced from reputational attribute to financial infrastructure. In cross-border markets, counterparties increasingly treat institutional reliability as part of collateral quality because enforceability, disclosure standards, and procedural predictability determine whether contractual rights survive stress events. Where trust is high, transaction costs fall; where trust is ambiguous, pricing embeds a structural risk premium.",
      "The repricing is most visible under geopolitical fragmentation. Sanctions expansion, data-sovereignty regimes, and export-control complexity have increased the penalty for legal uncertainty. Investors now evaluate not only growth trajectories but also enforcement coherence: can a jurisdiction apply rules consistently, adjudicate disputes credibly, and maintain policy continuity through electoral turnover?",
      "Spine sentence: in a fragmented system, trust lowers the cost of time. It allows capital to extend duration, commit to larger ticket sizes, and accept thinner near-term spreads because expropriation, arbitrariness, and process risk are perceived as lower. Without that confidence, financing tenors shorten and required returns rise.",
      "Institutional trust therefore has measurable transmission channels. It affects sovereign borrowing cost via policy credibility, affects corporate valuation through legal and reporting regimes, and affects currency demand through reserve-manager preferences. The relationship is not linear, but directionally robust: jurisdictions with stable legal architecture and credible institutions tend to attract stickier strategic capital over cycles.",
      "The current environment sharpens this effect because capital is being asked to fund strategic transitions simultaneously: energy systems, digital infrastructure, supply-chain redundancy, and defense modernization. Those transitions require multi-year investment horizons. Multi-year horizons require confidence that rules, contracts, and tax assumptions will not be retroactively rewritten.",
      "This helps explain why financial centers with long legal traditions and high adjudication credibility retain relevance even when growth is faster elsewhere. Switzerland, Singapore, London, and the United States each sit in different geopolitical positions, yet all benefit when investors prioritize custody quality, settlement reliability, and rule-bound dispute resolution. In stressed regimes, operational trust is often more valuable than incremental yield.",
      "Second-order effects are now appearing in corporate strategy. Multinationals increasingly separate market-entry decisions from treasury and legal domicile decisions, keeping core financing and IP structures in high-trust jurisdictions while operating commercial exposure across a wider geographic footprint. That architecture reduces tail risk but also concentrates high-value financial activity in a narrower set of institutional hubs.",
      "For allocators, trust should be modeled as a risk-adjusted cash-flow input rather than a qualitative narrative. Governance opacity acts like hidden leverage: benign in stable periods, punitive in stress. Durable trust, by contrast, behaves like a yield-enhancing stabilizer because it reduces legal friction, compliance volatility, and policy surprise risk across the full life of the asset.",
      "The long-horizon implication is that credibility itself is becoming a strategic asset class characteristic. In a world where policy, technology, and security frictions are structurally elevated, trusted institutional architecture is not decorative. It is investable infrastructure.",
    ],
    references: [
      { title: "Worldwide Governance Indicators", source: "World Bank", href: "https://info.worldbank.org/governance/wgi/" },
      { title: "Global Financial Centres Index", source: "Z/Yen", href: "https://www.longfinance.net/programmes/financial-centre-futures/global-financial-centres-index/" },
      { title: "Reserve currency composition", source: "IMF COFER", href: "https://data.imf.org/COFER" },
      { title: "Worldwide Risk Governance Survey", source: "OECD", href: "https://www.oecd.org/gov/risk/" },
      { title: "Global sanctions data", source: "UN Security Council", href: "https://main.un.org/securitycouncil/en/sanctions/information" },
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
    readTime: "13 min read",
    format: "Analytical Essay",
    imageAlt: "Parliament district and financial center connected by transport network",
    pullQuote: "Policy language explains intent; incentive architecture reveals destination.",
    body: [
      "Political capital flows are best understood as a response to incentive architecture rather than ideological signaling. Tax treatment, subsidy design, procurement guarantees, export-license regimes, and legal enforceability determine expected cash-flow durability more directly than campaign rhetoric. Capital allocators are therefore reading policy mechanics first and narrative framing second.",
      "This explains why investment patterns often diverge from media narratives. While public debate emphasizes political polarization, long-duration capital moves toward jurisdictions that provide executable incentive pathways: land access, permit sequencing, grid interconnection, and contract enforceability. The market signal appears in debt issuance, industrial land absorption, and supplier relocation well before headline consensus shifts.",
      "Spine sentence: incentive systems are now acting as invisible routing protocols for global capital. They direct not only where factories are built, but where financing ecosystems, supplier networks, and strategic employment clusters accumulate over time. Once these ecosystems reach scale, they become path dependent and difficult to reverse.",
      "The convergence of state and corporate incentives is particularly visible in semiconductors, batteries, and defense-adjacent manufacturing. Governments seek resilience and domestic capability; companies seek margin stability and policy certainty; investors seek downside protection supported by public frameworks. These objectives are not identical, but they are compatible enough to create durable co-investment channels.",
      "Execution quality remains the key differentiator. Announcements do not produce capital flows unless agencies can operationalize credits, procurement commitments, and compliance guidance quickly and predictably. Where administrative capacity is weak, policy promises convert into delay risk and discount-rate expansion. Where capacity is strong, the same policy promise can compress financing costs and accelerate project closure.",
      "Cross-border implications are now substantial. Competing subsidy regimes among allies can attract capital in the short run but create long-run friction if local-content rules, standards, and state-aid disciplines diverge. Investors must therefore price not only domestic policy durability but also interoperability risk across trade blocs and treaty relationships.",
      "Second-order effects are evident in portfolio construction. Capital is increasingly allocated across political-economy regimes rather than broad geography labels, with heavier emphasis on policy continuity, institutional trust, and fiscal sustainability. This favors jurisdictions that can combine strategic ambition with credible budget management and legal consistency.",
      "For practitioners, the methodological shift is clear: replace ideology-based forecasting with incentive mapping and implementation tracking. The strongest leading indicators are rulemaking milestones, procurement calendars, tax-credit uptake, and sovereign co-financing behavior. These signals provide higher-resolution insight into where political intent is being translated into investable reality.",
      "The long-term implication is a new geography of returns shaped by incentive coherence. Regions that align policy design, execution capacity, and institutional credibility will capture disproportionate strategic capital, regardless of rhetorical posture. Regions that rely on signaling without execution will remain structurally under-allocated.",
    ],
    references: [
      { title: "US Treasury clean energy tax credits guidance", source: "US Treasury", href: "https://home.treasury.gov/policy-issues/inflation-reduction-act" },
      { title: "EU State aid Temporary Crisis and Transition Framework", source: "European Commission", href: "https://competition-policy.ec.europa.eu/state-aid/temporary-crisis-and-transition-framework_en" },
      { title: "OECD Investment incentives and industrial policy", source: "OECD", href: "https://www.oecd.org/investment/" },
      { title: "World Investment Report", source: "UNCTAD", href: "https://unctad.org/publication/world-investment-report-2024" },
      { title: "Fiscal Monitor", source: "IMF", href: "https://www.imf.org/en/Publications/FM" },
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
    readTime: "14 min read",
    format: "Analytical Essay",
    imageAlt: "Global map abstraction linking ports, grids, and industrial clusters",
    pullQuote:
      "Strategic capital no longer seeks only growth; it seeks jurisdictions where infrastructure, incentives, and institutions align.",
    body: [
      "Strategic capital is reorganizing around system reliability rather than cost minimization. The central allocation question is no longer where production is cheapest, but where critical infrastructure can scale under geopolitical and regulatory stress. This shift is visible across semiconductor fabs, data-center campuses, defense manufacturing, and logistics corridors tied to allied industrial networks.",
      "The underlying driver is constraint coupling. AI expansion requires chips, power, land, cooling, and network connectivity in synchronized sequence; energy transition requires grid modernization, permitting throughput, and mineral processing; defense rearmament requires specialized suppliers and long-cycle procurement credibility. Because these inputs are geographically uneven, capital returns are increasingly determined by place-specific system performance.",
      "Spine sentence: geography has become a balance-sheet variable. Jurisdiction now influences not only tax and labor assumptions, but also delivery risk, policy continuity, and infrastructure uptime, all of which affect terminal value. Where system reliability is low, discount rates rise regardless of headline demand growth.",
      "Incentive frameworks then accelerate divergence. Sovereign guarantees, export-credit channels, local-content regimes, and strategic procurement commitments can redirect large capital programs within a planning cycle. What appears as a sector bet is often a jurisdiction-and-regime bet in disguise. Investors who ignore this layer risk misattributing policy-driven returns to managerial outperformance.",
      "Evidence from recent supply-chain reconfiguration supports the pattern: North American nearshoring in selected manufacturing segments, semiconductor clustering around policy-supported nodes, and Gulf ambitions in compute and energy-intensive infrastructure all reflect deliberate concentration in politically and operationally aligned systems.[1][2][3] These moves are less about retreat from globalization than about redesigning its topology.",
      "Second-order effects include a widening premium for institutional execution. Regions that combine legal predictability, grid reliability, port and rail efficiency, and permitting discipline can attract follow-on capital across adjacent sectors. Regions lacking one of those pillars face compounding friction, as each delay increases financing cost and erodes supplier confidence.",
      "For asset allocators, due diligence must shift from sector narratives to system diagnostics: transmission build-out timelines, maritime chokepoint exposure, alliance durability, workforce depth, and administrative capacity. A lower-cost jurisdiction can underperform if these variables are weak. A higher-cost jurisdiction can compound if it provides predictable strategic continuity.",
      "The geopolitical layer further strengthens this logic. As export controls and security reviews expand, capital seeks jurisdictions that are not only commercially attractive but also policy-compatible with key trade and technology blocs. Market access itself is becoming contingent on geopolitical alignment and compliance credibility.",
      "The long-horizon implication is selective regionalization inside a still-global system. Capital will continue to move internationally, but with stricter filters around reliability, interoperability, and strategic trust. The next decade's winners are unlikely to be the cheapest geographies. They are more likely to be jurisdictions that consistently convert infrastructure capability into investable certainty.",
    ],
    references: [
      { title: "World Investment Report", source: "UNCTAD", href: "https://unctad.org/publication/world-investment-report-2024" },
      { title: "Global supply chain pressure and reconfiguration research", source: "Federal Reserve Bank of New York", href: "https://www.newyorkfed.org/research/policy/gscpi" },
      { title: "Semiconductor ecosystem investments in the US", source: "Semiconductor Industry Association", href: "https://www.semiconductors.org/chips/" },
      { title: "World Energy Outlook", source: "IEA", href: "https://www.iea.org/reports/world-energy-outlook-2025" },
      { title: "Defence Expenditure of NATO Countries", source: "NATO", href: "https://www.nato.int/cps/en/natohq/topics_49198.htm" },
    ],
  },
];

export function getArticleBySlug(slug: string) {
  return latestAnalysis.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string) {
  return latestAnalysis.filter((article) => article.slug !== currentSlug).slice(0, 3);
}
