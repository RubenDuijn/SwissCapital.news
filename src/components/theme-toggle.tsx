"use client";

import { useEffect, useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  const savedTheme = window.localStorage.getItem("swisscapital-theme");
  if (savedTheme === "light" || savedTheme === "dark") {
    return savedTheme;
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

export function ThemeToggle({ className = "" }: { className?: string }) {
  const [theme, setTheme] = useState<Theme>(() => getInitialTheme());

  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  const toggleTheme = () => {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    setTheme(nextTheme);
    window.localStorage.setItem("swisscapital-theme", nextTheme);
    document.documentElement.classList.toggle("dark", nextTheme === "dark");
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label="Toggle color theme"
      className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-border bg-panel text-ink transition hover:-translate-y-0.5 hover:border-ink/40 ${className}`}
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.8">
        <circle cx="12" cy="12" r="4.25" />
        <path d="M12 2.8v2.1M12 19.1v2.1M3 12h2.1M18.9 12H21M5.1 5.1l1.5 1.5M17.4 17.4l1.5 1.5M5.1 18.9l1.5-1.5M17.4 6.6l1.5-1.5" />
      </svg>
    </button>
  );
}
