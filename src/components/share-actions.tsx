"use client";

import { useCallback } from "react";

type ShareActionsProps = {
  title: string;
  url: string;
};

export function ShareActions({ title, url }: ShareActionsProps) {
  const encodedTitle = encodeURIComponent(title);
  const encodedUrl = encodeURIComponent(url);

  const copyLink = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(url);
    } catch {
      // Clipboard access can fail on unsupported contexts; no-op fallback.
    }
  }, [url]);

  return (
    <div className="mt-6 flex items-center gap-2 text-xs uppercase tracking-[0.14em] text-muted">
      <span>Share</span>
      <a
        href={`https://x.com/intent/tweet?url=${encodedUrl}&text=${encodedTitle}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Share this analysis on X"
        className="rounded-full border border-border px-3 py-1 transition hover:border-ink/40 hover:text-ink"
      >
        X
      </a>
      <a
        href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`}
        target="_blank"
        rel="noreferrer"
        aria-label="Share this analysis on LinkedIn"
        className="rounded-full border border-border px-3 py-1 transition hover:border-ink/40 hover:text-ink"
      >
        LinkedIn
      </a>
      <button
        type="button"
        onClick={copyLink}
        aria-label="Copy analysis link"
        className="rounded-full border border-border px-3 py-1 transition hover:border-ink/40 hover:text-ink"
      >
        Copy Link
      </button>
    </div>
  );
}
