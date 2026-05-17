import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Archive", href: "/archive" },
  { label: "About", href: "/about" },
  { label: "Briefing", href: "/newsletter" },
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/70 bg-background/90 backdrop-blur-sm">
      <nav className="mx-auto flex h-16 w-full max-w-6xl items-center justify-between px-5 md:px-8">
        <Link href="/" className="group inline-flex items-baseline gap-2">
          <span className="font-serif text-xl tracking-tight text-ink">SwissCapital.news</span>
          <span className="text-xs uppercase tracking-[0.18em] text-muted">Global Intelligence</span>
        </Link>

        <div className="flex items-center gap-5">
          <ul className="hidden items-center gap-5 text-sm text-muted md:flex">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link href={item.href} className="story-link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  );
}
