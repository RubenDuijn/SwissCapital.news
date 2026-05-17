import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";
import { MobileMenu } from "@/components/mobile-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8 relative">
        <Link href="/" className="group inline-flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-tight text-ink">SwissCapital.news</span>
          <span className="text-xs uppercase tracking-[0.18em] text-muted">Global Intelligence</span>
        </Link>

        <div className="flex items-center gap-5">
          <ul className="hidden items-center gap-5 text-sm text-muted md:flex">
            <li>
              <Link href="/" className="story-link">
                Home
              </Link>
            </li>
            <li>
              <Link href="/archive" className="story-link">
                Archive
              </Link>
            </li>
            <li>
              <Link href="/about" className="story-link">
                About
              </Link>
            </li>
            <li>
              <Link href="/newsletter" className="story-link">
                Briefing
              </Link>
            </li>
          </ul>
          <div className="hidden md:flex">
            <ThemeToggle />
          </div>
          <MobileMenu />
        </div>
      </nav>
    </header>
  );
}
