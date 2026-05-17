import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Subscribe to receive weekly delivery of SwissCapital.news analysis.",
};

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-3xl pb-16 pt-12 md:pt-16">
      <section className="fade-in-up rounded-3xl border border-border bg-panel p-8 md:p-12">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Newsletter</p>
        <h1 className="mt-4 text-5xl leading-tight text-ink md:text-6xl">Weekly Intelligence Briefing</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
          The publication in weekly form. One concise distribution note every Saturday with our latest structural analysis.
        </p>

        <form className="mt-8 space-y-4" action="#" method="post">
          <label className="block text-sm text-muted" htmlFor="email">
            Work Email
          </label>
          <input
            id="email"
            type="email"
            required
            placeholder="name@institution.com"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition focus:border-ink/50"
          />

          <label className="block text-sm text-muted" htmlFor="role">
            Role
          </label>
          <select
            id="role"
            className="w-full rounded-xl border border-border bg-background px-4 py-3 text-sm text-ink outline-none transition focus:border-ink/50"
            defaultValue=""
          >
            <option value="" disabled>
              Select your primary focus
            </option>
            <option>Investor</option>
            <option>Executive</option>
            <option>Operator</option>
            <option>Research / Policy</option>
            <option>Student</option>
          </select>

          <button
            type="submit"
            className="inline-flex items-center rounded-full border border-ink bg-ink px-6 py-2.5 text-sm text-background transition hover:-translate-y-0.5 hover:bg-charcoal"
          >
            Subscribe
          </button>
        </form>

        <p className="mt-6 text-xs leading-6 text-muted">No promotional noise. No trend chasing. Unsubscribe anytime.</p>
      </section>
    </div>
  );
}
