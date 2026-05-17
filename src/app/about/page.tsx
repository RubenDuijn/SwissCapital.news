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
          SwissCapital.news is built for readers who need clarity across capital markets, technological systems, and geopolitical shifts.
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
    </div>
  );
}
