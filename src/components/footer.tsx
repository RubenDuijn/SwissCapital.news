import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-border py-10">
      <div className="mx-auto flex w-full max-w-6xl flex-col justify-between gap-6 px-5 md:flex-row md:items-end md:px-8">
        <div>
          <p className="font-serif text-lg text-ink">SwissCapital.news</p>
          <p className="mt-2 max-w-md text-sm text-muted">
            Intelligence on capital, technology, and global systems.
          </p>
        </div>
        <div className="space-y-2 text-sm text-muted">
          <p>Zurich | Geneva | London</p>
          <div className="flex items-center gap-4">
            <Link href="/archive" className="story-link">
              Archive
            </Link>
            <Link href="/about" className="story-link">
              Editorial Charter
            </Link>
            <Link href="/newsletter" className="story-link">
              Weekly Briefing
            </Link>
          </div>
          <p className="text-xs">© {new Date().getFullYear()} SwissCapital.news</p>
        </div>
      </div>
    </footer>
  );
}
