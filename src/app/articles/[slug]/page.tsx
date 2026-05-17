import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/article-card";
import { getArticleBySlug, getRelatedArticles, latestAnalysis } from "@/lib/content";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return latestAnalysis.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: ArticlePageProps): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    return {
      title: "Article",
    };
  }

  return {
    title: article.title,
    description: article.dek,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug);

  return (
    <div className="mx-auto max-w-5xl pb-16 pt-12 md:pt-16">
      <article className="mx-auto max-w-3xl">
        <header className="fade-in-up border-b border-border pb-8">
          <p className="text-xs uppercase tracking-[0.16em] text-muted">{article.topic}</p>
          <h1 className="mt-4 text-5xl leading-tight text-ink md:text-6xl">{article.title}</h1>
          <p className="mt-5 text-lg leading-8 text-muted">{article.dek}</p>

          <div className="mt-7 flex flex-wrap items-center gap-2 text-sm text-muted">
            <span>{article.author}</span>
            <span className="text-border">•</span>
            <time>{article.publishedAt}</time>
            <span className="text-border">•</span>
            <span>{article.readTime}</span>
          </div>

          <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted">
            <span>Share</span>
            <a href="#" className="rounded-full border border-border px-3 py-1 transition hover:border-ink/40 hover:text-ink">
              X
            </a>
            <a href="#" className="rounded-full border border-border px-3 py-1 transition hover:border-ink/40 hover:text-ink">
              LinkedIn
            </a>
            <a href="#" className="rounded-full border border-border px-3 py-1 transition hover:border-ink/40 hover:text-ink">
              Copy Link
            </a>
          </div>
        </header>

        <section className="editorial-prose fade-in-up fade-delay-1 mt-10">
          {article.body.map((paragraph, index) => (
            <p key={`${article.slug}-${index}`}>{paragraph}</p>
          ))}

          <blockquote className="my-10 border-l-2 border-border pl-6 font-serif text-2xl leading-relaxed text-ink md:text-3xl">
            “{article.pullQuote}”
          </blockquote>

          <p>
            Related dynamics are tracked in our weekly briefing, where we map cross-sector implications and update key scenarios.
          </p>
        </section>
      </article>

      <section className="fade-in-up fade-delay-2 mt-16 border-t border-border pt-10">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-3xl text-ink">Related Analysis</h2>
          <Link href="/" className="story-link text-sm text-muted">
            Return to Homepage
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {relatedArticles.map((item) => (
            <ArticleCard key={item.slug} article={item} compact />
          ))}
        </div>
      </section>
    </div>
  );
}
