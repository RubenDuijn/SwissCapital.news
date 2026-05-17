import Link from "next/link";
import type { Article } from "@/lib/content";

type ArticleCardProps = {
  article: Article;
  compact?: boolean;
};

export function ArticleCard({ article, compact = false }: ArticleCardProps) {
  return (
    <article className="group rounded-2xl border border-border bg-panel p-5 transition duration-300 hover:-translate-y-1 hover:border-ink/30">
      <p className="text-xs uppercase tracking-[0.14em] text-muted">{article.topic}</p>
      <h3 className={compact ? "mt-3 font-serif text-xl leading-tight text-ink" : "mt-3 font-serif text-2xl leading-tight text-ink"}>
        <Link href={`/articles/${article.slug}`} className="story-link">
          {article.title}
        </Link>
      </h3>
      <p className="mt-3 text-sm leading-6 text-muted">{article.dek}</p>
      <div className="mt-6 flex items-center justify-between border-t border-border pt-4 text-xs text-muted">
        <span>{article.publishedAt}</span>
        <span>{article.readTime}</span>
      </div>
    </article>
  );
}
