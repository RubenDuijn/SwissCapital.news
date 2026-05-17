"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Archive", href: "/archive" },
  { label: "About", href: "/about" },
  { label: "Briefing", href: "/newsletter" },
];

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      return () => document.removeEventListener("keydown", handleEscape);
    }
  }, [isOpen]);

  return (
    <>
      {/* Hamburger button - visible only on mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="md:hidden flex flex-col gap-1.5 w-6 h-6 justify-center items-center"
        aria-label="Toggle menu"
        aria-expanded={isOpen}
      >
        <span
          className={`block w-full h-0.5 bg-ink transition-all duration-300 ${
            isOpen ? "rotate-45 translate-y-2" : ""
          }`}
        />
        <span
          className={`block w-full h-0.5 bg-ink transition-all duration-300 ${
            isOpen ? "opacity-0" : ""
          }`}
        />
        <span
          className={`block w-full h-0.5 bg-ink transition-all duration-300 ${
            isOpen ? "-rotate-45 -translate-y-2" : ""
          }`}
        />
      </button>

      {/* Mobile menu panel */}
      {isOpen && (
        <div className="absolute top-16 left-0 right-0 md:hidden bg-panel border-b border-border/70 shadow-sm animate-in fade-in slide-in-from-top-2 duration-200">
          <ul className="flex flex-col divide-y divide-border/50 py-2">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className="block px-5 py-3 text-sm text-muted hover:text-ink transition-colors story-link"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="border-t border-border/50 px-5 py-3 flex items-center justify-between">
            <span className="text-xs text-muted uppercase">Theme</span>
            <ThemeToggle />
          </div>
        </div>
      )}
    </>
  );
}
