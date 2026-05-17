import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { NewsletterCta } from "@/components/newsletter-cta";
import { featuredArticle, latestAnalysis, topics } from "@/lib/content";

export default function Home() {
  const leadStory = featuredArticle;
  const latest = latestAnalysis.slice(1, 5);

  return (
    <div className="pb-16 pt-10 md:pt-16">
      <section className="fade-in-up border-b border-border pb-14">
        <p className="text-xs uppercase tracking-[0.2em] text-muted">SwissCapital.news</p>
        <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] tracking-tight text-ink md:text-7xl">
          Intelligence on capital, technology, and global systems.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-muted md:text-lg">
          Independent structural analysis for decision-makers navigating long-cycle shifts in power, technology, and capital.
        </p>
        <div className="mt-6 flex flex-wrap items-center gap-3 text-sm text-muted">
          <span>Institutional desk bylines</span>
          <span className="text-border">•</span>
          <span>Public-source grounded analysis</span>
          <span className="text-border">•</span>
          <Link href="/archive" className="story-link text-ink">
            View archive
          </Link>
        </div>
      </section>

      <section className="fade-in-up fade-delay-1 grid gap-8 border-b border-border py-12 lg:grid-cols-[1.2fr_0.8fr]">
        <article className="rounded-2xl border border-border bg-panel p-7 md:p-10">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Featured Analysis</p>
          <h2 className="mt-4 font-serif text-4xl leading-tight text-ink md:text-5xl">
            <Link href={`/articles/${leadStory.slug}`} className="story-link">
              {leadStory.title}
            </Link>
          </h2>
          <p className="mt-5 max-w-2xl text-base leading-8 text-muted">{leadStory.dek}</p>
          <div className="mt-8 flex flex-wrap items-center gap-3 text-sm text-muted">
            <span>{leadStory.author}</span>
            <span className="text-border">•</span>
            <span>{leadStory.publishedAt}</span>
            <span className="text-border">•</span>
            <span>{leadStory.readTime}</span>
          </div>
        </article>

        <aside className="rounded-2xl border border-border bg-panel p-7">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">Editorial Positioning</p>
          <p className="mt-4 text-sm leading-7 text-muted">
            SwissCapital.news examines how institutions, incentives, and infrastructure interact beneath the surface of current events.
          </p>
          <p className="mt-4 text-sm leading-7 text-muted">
            We publish selectively. The objective is editorial signal, not volume.
          </p>
          <div className="mt-6 space-y-2 border-t border-border pt-5 text-sm text-muted">
            <p>Bylines use institutional desk attribution rather than persona-led commentary.</p>
            <p>Anchor essays are structured around thesis, incentives, capital implications, and long-term system effects.</p>
          </div>
          <Link href="/about" className="mt-8 inline-flex items-center rounded-full border border-ink bg-ink px-5 py-2.5 text-sm text-background transition hover:-translate-y-0.5 hover:bg-charcoal">
            Read the Editorial Charter
          </Link>
        </aside>
      </section>

      <section className="fade-in-up fade-delay-2 py-12">
        <div className="flex items-end justify-between gap-4">
          <h2 className="text-3xl text-ink md:text-4xl">Foundational Analysis</h2>
          <Link href="/archive" className="story-link text-sm text-muted">
            Full Archive
          </Link>
        </div>
        <div className="mt-7 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {latest.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      </section>

      <section className="border-y border-border py-12">
        <h2 className="text-3xl text-ink md:text-4xl">Topics</h2>
        <div className="mt-6 flex flex-wrap gap-2.5">
          {topics.map((topic) => (
            <span
              key={topic}
              className="rounded-full border border-border bg-panel px-4 py-2 text-xs uppercase tracking-[0.13em] text-muted transition hover:border-ink/40 hover:text-ink"
            >
              {topic}
            </span>
          ))}
        </div>
      </section>

      <div className="pt-12">
        <NewsletterCta />
      </div>
    </div>
  );
}
