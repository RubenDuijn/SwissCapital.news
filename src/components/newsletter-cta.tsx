import Link from "next/link";

export function NewsletterCta() {
  return (
    <section className="fade-in-up rounded-3xl border border-border bg-panel p-8 md:p-10">
      <p className="text-xs uppercase tracking-[0.16em] text-muted">Newsletter</p>
      <h2 className="mt-3 max-w-2xl font-serif text-3xl leading-tight text-ink md:text-4xl">
        Receive one high-signal briefing every Saturday.
      </h2>
      <p className="mt-4 max-w-2xl text-base leading-7 text-muted">
        A concise intelligence note on capital, technology, and global systems. No noise, no hype.
      </p>
      <div className="mt-7 flex flex-wrap items-center gap-3">
        <Link
          href="/newsletter"
          className="inline-flex items-center rounded-full border border-ink bg-ink px-6 py-2.5 text-sm text-background transition hover:-translate-y-0.5 hover:bg-charcoal"
        >
          Join the Newsletter
        </Link>
        <Link href="/about" className="inline-flex items-center rounded-full border border-border px-6 py-2.5 text-sm text-ink transition hover:border-ink/40">
          Read the Editorial Charter
        </Link>
      </div>
    </section>
  );
}
