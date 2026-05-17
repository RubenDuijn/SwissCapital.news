import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about the SwissCapital.news editorial charter and mission.",
};

export default function AboutPage() {
  return (
    <div className="mx-auto max-w-4xl pb-16 pt-12 md:pt-16">
      <header className="fade-in-up border-b border-border pb-10">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">About</p>
        <h1 className="mt-4 text-5xl leading-tight text-ink md:text-6xl">Editorial Charter</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
          SwissCapital.news is built for readers who need clarity across capital markets, technological systems, geopolitical shifts, and long-cycle institutional change.
        </p>
      </header>

      <section className="editorial-prose fade-in-up fade-delay-1 mt-10">
        <p>
          Our reporting is grounded in institutional logic: what changes, why it changes, and where second-order effects emerge. We avoid narrative cycles driven by hype and focus on durable forces shaping global decision-making.
        </p>
        <p>
          We believe high-quality analysis should be concise, transparent in assumptions, and legible across disciplines. Financial context, policy architecture, and technical infrastructure are treated as a connected system rather than isolated beats.
        </p>
        <p>
          SwissCapital.news is a publication. The weekly briefing is distribution infrastructure for readers who want direct access to our analysis cadence.
        </p>
        <p>
          Authorship is institutional by design. SwissCapital.news publishes under desk bylines such as SwissCapital Research, SwissCapital Analysis, and Editorial Desk. That model keeps the emphasis on argument quality, sourcing discipline, and publication standards rather than on personality-driven commentary.
        </p>
        <p>
          Our essays are grounded in public filings, policy documents, official data, central bank material, company disclosures, and institutional research. The aim is not academic citation density, but sufficient sourcing and named evidence to make analytical claims inspectable.
        </p>
        <p>
          We publish selectively. Archive depth matters more than publishing cadence. It is better to release a small number of durable strategic essays than to simulate momentum through generic volume.
        </p>
      </section>

      <section className="fade-in-up fade-delay-2 mt-12 grid gap-4 md:grid-cols-3">
        <article className="rounded-2xl border border-border bg-panel p-5">
          <h2 className="text-2xl text-ink">Signal over Noise</h2>
          <p className="mt-3 text-sm leading-7 text-muted">Every article must answer a strategic question and provide actionable context.</p>
        </article>
        <article className="rounded-2xl border border-border bg-panel p-5">
          <h2 className="text-2xl text-ink">Global Lens</h2>
          <p className="mt-3 text-sm leading-7 text-muted">Coverage reflects interconnected systems across regions and sectors.</p>
        </article>
        <article className="rounded-2xl border border-border bg-panel p-5">
          <h2 className="text-2xl text-ink">Editorial Integrity</h2>
          <p className="mt-3 text-sm leading-7 text-muted">Clear separation between analysis, sponsorship, and commercial interests.</p>
        </article>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-2">
        <article className="rounded-2xl border border-border bg-panel p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Method</p>
          <h2 className="mt-3 text-3xl text-ink">How Analysis Is Built</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Each essay begins with a thesis, then proceeds through structural analysis, incentive analysis, capital implications, and long-term systemic interpretation. Named examples, policy frameworks, and public-source references are used where relevant to anchor the argument.
          </p>
        </article>
        <article className="rounded-2xl border border-border bg-panel p-6">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Scope</p>
          <h2 className="mt-3 text-3xl text-ink">What We Cover</h2>
          <p className="mt-4 text-sm leading-7 text-muted">
            Capital concentration, industrial policy, strategic infrastructure, energy systems, geopolitical fragmentation, institutional trust, biotechnology risk, and the financial architecture beneath technological change.
          </p>
        </article>
      </section>
    </div>
  );
}
