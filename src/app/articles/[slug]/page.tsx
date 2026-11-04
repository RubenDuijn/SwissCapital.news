import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import { ArticleCard } from "@/components/article-card";
import { ShareActions } from "@/components/share-actions";
import { getArticleBySlug, getRelatedArticles, latestAnalysis } from "@/lib/content";

type ArticlePageProps = {
  params: Promise<{ slug: string }>;
};

type ScenarioTable = {
  headers: [string, string, string, string];
  rows: Array<[string, string, string, string]>;
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

  const canonicalUrl = `https://swisscapital.news/articles/${article.slug}`;

  return {
    title: article.title,
    description: article.dek,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: article.title,
      description: article.dek,
      type: "article",
      url: canonicalUrl,
      siteName: "SwissCapital.news",
      publishedTime: new Date(article.publishedAt).toISOString(),
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.dek,
    },
  };
}

function renderParagraphWithLinks(paragraph: string, key: string) {
  const scenarioTable = parseScenarioTable(paragraph);
  if (scenarioTable) {
    return (
      <div key={key} className="my-8 overflow-x-auto rounded-md border border-border/70">
        <table className="min-w-full border-collapse text-left text-sm leading-7 text-muted">
          <thead className="bg-border/20 text-xs uppercase tracking-[0.12em] text-ink">
            <tr>
              {scenarioTable.headers.map((header) => (
                <th key={`${key}-${header}`} className="px-4 py-3 font-medium">
                  {header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scenarioTable.rows.map((row, rowIndex) => (
              <tr key={`${key}-row-${rowIndex}`} className="border-t border-border/60 align-top">
                {row.map((cell, cellIndex) => (
                  <td key={`${key}-row-${rowIndex}-cell-${cellIndex}`} className="px-4 py-3">
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }

  const normalizedParagraph = paragraph.replace(
    /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]+)\)\)/g,
    "[$1]($2)",
  );

  const markdownLinkRegex = /\[([^\]]+)\]\((https?:\/\/[^)\s]+|\/[^)\s]+)\)/g;
  const nodes: ReactNode[] = [];
  let cursor = 0;
  let match = markdownLinkRegex.exec(normalizedParagraph);

  while (match) {
    const [fullMatch, label, href] = match;
    const startIndex = match.index;

    if (startIndex > cursor) {
      nodes.push(normalizedParagraph.slice(cursor, startIndex));
    }

    const isExternal = href.startsWith("http://") || href.startsWith("https://");

    nodes.push(
      isExternal ? (
        <a key={`${key}-${href}-${startIndex}`} href={href} target="_blank" rel="noreferrer" className="story-link article-link text-ink">
          {label}
        </a>
      ) : (
        <Link key={`${key}-${href}-${startIndex}`} href={href} className="story-link article-link text-ink">
          {label}
        </Link>
      ),
    );

    cursor = startIndex + fullMatch.length;
    match = markdownLinkRegex.exec(normalizedParagraph);
  }

  if (cursor < normalizedParagraph.length) {
    nodes.push(normalizedParagraph.slice(cursor));
  }

  return <p key={key}>{nodes.length > 0 ? nodes : normalizedParagraph}</p>;
}

function parseScenarioTable(paragraph: string): ScenarioTable | null {
  const lines = paragraph
    .split("\n")
    .map((line) => line.trim())
    .filter(Boolean);

  if (lines.length < 5 || lines[0] !== "[[SCENARIO_TABLE]]") {
    return null;
  }

  const headerColumns = lines[1].split("|").map((column) => column.trim());
  if (headerColumns.length !== 4) {
    return null;
  }

  const rows: Array<[string, string, string, string]> = [];
  for (const line of lines.slice(2)) {
    const columns = line.split("|").map((column) => column.trim());
    if (columns.length !== 4) {
      return null;
    }
    rows.push(columns as [string, string, string, string]);
  }

  if (rows.length < 3) {
    return null;
  }

  return {
    headers: headerColumns as [string, string, string, string],
    rows,
  };
}

export default async function ArticlePage({ params }: ArticlePageProps) {
  const { slug } = await params;
  const article = getArticleBySlug(slug);

  if (!article) {
    notFound();
  }

  const relatedArticles = getRelatedArticles(article.slug);
  const articleUrl = `https://swisscapital.news/articles/${article.slug}`;

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
            <span>{article.authorNote}</span>
            <span className="text-border">•</span>
            <time>{article.publishedAt}</time>
            <span className="text-border">•</span>
            <span>{article.readTime}</span>
          </div>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-muted">
            This analysis is published under institutional authorship. SwissCapital.news uses desk bylines for research-led essays rather than individual commentator branding.
          </p>

          <ShareActions title={article.title} url={articleUrl} />
        </header>

        <section className="editorial-prose fade-in-up fade-delay-1 mt-10">
          {article.body.map((paragraph, index) => renderParagraphWithLinks(paragraph, `${article.slug}-${index}`))}

          <blockquote className="my-10 border-l-2 border-border pl-6 font-serif text-2xl leading-relaxed text-ink md:text-3xl">
            “{article.pullQuote}”
          </blockquote>

        </section>

        <section className="fade-in-up mt-12 border-t border-border pt-8">
          <div className="grid gap-6 md:grid-cols-[0.8fr_1.2fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.16em] text-muted">Research Basis</p>
              <p className="mt-3 text-sm leading-7 text-muted">
                SwissCapital.news uses public filings, policy documents, institutional reports, and official market disclosures to ground long-form analysis.
              </p>
            </div>
            <div>
              <ol className="space-y-3 text-sm leading-7 text-muted">
                {article.references.map((reference) => (
                  <li key={reference.href}>
                    <a href={reference.href} target="_blank" rel="noreferrer" className="story-link article-link text-ink">
                      {reference.title}
                    </a>
                    <span className="ml-2">{reference.source}</span>
                  </li>
                ))}
              </ol>
            </div>
          </div>
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
