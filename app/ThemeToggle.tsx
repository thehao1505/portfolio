"use client";

import { useEffect, useState } from "react";

/**
 * Bracket-style header button that switches the site between the dark
 * (default) and light themes by toggling `data-theme` on `<html>`, and
 * persists the explicit choice in `localStorage["theme"]` — the same
 * storage contract read by the anti-FOUC inline script in app/layout.tsx.
 *
 * The `mounted` gate avoids a hydration mismatch: SSR always assumes the
 * `data-theme="dark"` default baked into layout.tsx, but the inline script
 * may have already flipped `data-theme` to "light" before this component
 * hydrates. The page's actual colors are already correct pre-hydration;
 * only this button's own label/aria-label catches up one tick later.
 */
export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">("dark");

  useEffect(() => {
    const current = document.documentElement.getAttribute("data-theme");
    setTheme(current === "light" ? "light" : "dark");
    setMounted(true);
  }, []);

  function toggle() {
    const next = theme === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
  }

  const label = mounted ? theme : "dark";
  return (
    <button
      type="button"
      className="sb-theme"
      onClick={toggle}
      aria-label={`Switch to ${label === "dark" ? "light" : "dark"} theme`}
    >
      {label}
    </button>
  );
}
