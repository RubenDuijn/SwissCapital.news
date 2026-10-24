import fs from "fs";
import path from "path";

export type Topic =
  | "Capital"
  | "AI & Technology"
  | "Geopolitics"
  | "Systems"
  | "Risk"
  | "Energy"
  | "Biotechnology";

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

function loadArticles(): Article[] {
  const files = fs.readdirSync(ARTICLES_DIR).filter((name) => name.endsWith(".json"));
  const articles = files.map((fileName) => readJsonFile<Article>(path.join(ARTICLES_DIR, fileName)));

  return articles.sort((a, b) => parsePublishedDate(b.publishedAt) - parsePublishedDate(a.publishedAt));
}

export const topics = readJsonFile<Topic[]>(path.join(CONTENT_ROOT, "topics.json"));

const featuredArticleFromFile = readJsonFile<Article>(path.join(CONTENT_ROOT, "featured-article.json"));
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
