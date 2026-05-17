import type { Metadata } from "next";
import { ArticleCard } from "@/components/article-card";
import { latestAnalysis } from "@/lib/content";

export const metadata: Metadata = {
  title: "Archive",
  description: "Archive of SwissCapital.news analysis and strategic essays.",
};

export default function ArchivePage() {
  return (
    <div className="pb-16 pt-12 md:pt-16">
      <header className="fade-in-up border-b border-border pb-10">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Archive</p>
        <h1 className="mt-4 text-5xl leading-tight text-ink md:text-6xl">Research Archive</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
          A selective archive of SwissCapital.news essays on capital, technology, geopolitical systems, and structural change.
        </p>
      </header>

      <section className="fade-in-up fade-delay-1 mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {latestAnalysis.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>
    </div>
  );
}
