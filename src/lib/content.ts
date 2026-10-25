import fs from "fs";
import path from "path";

export type Topic =
  | "Wealth & Capital"
  | "Markets & Research"
  | "Technology & AI"
  | "Luxury & Industrial Brands"
  | "Infrastructure & Energy"
  | "The Long View";

export type ArticleFormat = "Signal Brief" | "Analytical Essay" | "Strategic Deep Dive";

export type Reference = {
  title: string;
  source: string;
  href: string;
};

export type Article = {
  slug: string;
  title: string;
  dek: string;
  topic: Topic;
  author: string;
  authorNote: string;
  publishedAt: string;
  readTime: string;
  format: ArticleFormat;
  imageAlt: string;
  body: string[];
  pullQuote: string;
  references: Reference[];
};

type RawArticle = Omit<Article, "readTime"> & {
  readTime?: string;
};

const CONTENT_ROOT = path.join(process.cwd(), "src/content");
const ARTICLES_DIR = path.join(CONTENT_ROOT, "articles");

function readJsonFile<T>(filePath: string): T {
  const raw = fs.readFileSync(filePath, "utf8");
  return JSON.parse(raw) as T;
}

function parsePublishedDate(input: string) {
  const parsed = new Date(input);
  return Number.isNaN(parsed.getTime()) ? 0 : parsed.getTime();
}

function estimateReadTime(body: string[]) {
  const wordsPerMinute = 220;
  const plain = body
    .join(" ")
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, "$1")
    .replace(/[^\w\s]/g, " ")
    .replace(/\s+/g, " ")
    .trim();

  const wordCount = plain ? plain.split(" ").length : 0;
  const minutes = Math.max(1, Math.round(wordCount / wordsPerMinute));
  return `${minutes} min read`;
}

function withComputedReadTime(article: RawArticle): Article {
  return {
    ...article,
    readTime: estimateReadTime(article.body),
  };
}

function loadArticles(): Article[] {
  const files = fs.readdirSync(ARTICLES_DIR).filter((name) => name.endsWith(".json"));
  const articles = files
    .map((fileName) => readJsonFile<RawArticle>(path.join(ARTICLES_DIR, fileName)))
    .map(withComputedReadTime);

  return articles.sort((a, b) => parsePublishedDate(b.publishedAt) - parsePublishedDate(a.publishedAt));
}

export const topics = readJsonFile<Topic[]>(path.join(CONTENT_ROOT, "topics.json"));

const featuredArticleFromFile = withComputedReadTime(
  readJsonFile<RawArticle>(path.join(CONTENT_ROOT, "featured-article.json")),
);
const loadedArticles = loadArticles();

export const featuredArticle =
  loadedArticles.find((article) => article.slug === featuredArticleFromFile.slug) ?? featuredArticleFromFile;

export const latestAnalysis: Article[] = [
  featuredArticle,
  ...loadedArticles.filter((article) => article.slug !== featuredArticle.slug),
];

export function getArticleBySlug(slug: string) {
  return latestAnalysis.find((article) => article.slug === slug);
}

export function getRelatedArticles(currentSlug: string) {
  return latestAnalysis.filter((article) => article.slug !== currentSlug).slice(0, 3);
}
