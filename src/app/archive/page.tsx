import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCard } from "@/components/article-card";
import { latestAnalysis } from "@/lib/content";

export const metadata: Metadata = {
  title: "Archive",
  description: "Archive of SwissCapital.news analysis and strategic essays.",
};

type ArchivePageProps = {
  searchParams?: Promise<{ topic?: string }>;
};

export default async function ArchivePage({ searchParams }: ArchivePageProps) {
  const params = (await searchParams) ?? {};
  const availableTopics = Array.from(new Set(latestAnalysis.map((article) => article.topic)));
  const selectedTopic = availableTopics.find((topic) => topic === params.topic) ?? null;
  const filteredArticles = selectedTopic
    ? latestAnalysis.filter((article) => article.topic === selectedTopic)
    : latestAnalysis;

  return (
    <div className="pb-16 pt-12 md:pt-16">
      <header className="fade-in-up border-b border-border pb-10">
        <p className="text-xs uppercase tracking-[0.16em] text-muted">Archive</p>
        <h1 className="mt-4 text-5xl leading-tight text-ink md:text-6xl">Research Archive</h1>
        <p className="mt-5 max-w-2xl text-base leading-8 text-muted">
          A selective archive of SwissCapital.news essays on capital, technology, geopolitical systems, and structural change.
        </p>

        <div className="mt-6 flex flex-wrap items-center gap-2.5">
          <Link
            href="/archive"
            className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.13em] transition ${
              selectedTopic
                ? "border-border bg-panel text-muted hover:border-ink/40 hover:text-ink"
                : "border-ink bg-ink text-background"
            }`}
          >
            All
          </Link>
          {availableTopics.map((topic) => {
            const isActive = topic === selectedTopic;

            return (
              <Link
                key={topic}
                href={`/archive?topic=${encodeURIComponent(topic)}`}
                className={`rounded-full border px-4 py-2 text-xs uppercase tracking-[0.13em] transition ${
                  isActive
                    ? "border-ink bg-ink text-background"
                    : "border-border bg-panel text-muted hover:border-ink/40 hover:text-ink"
                }`}
              >
                {topic}
              </Link>
            );
          })}
        </div>
      </header>

      <section className="fade-in-up fade-delay-1 mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </section>
    </div>
  );
}
