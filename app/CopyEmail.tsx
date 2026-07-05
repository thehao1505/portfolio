"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";

/**
 * Copies the email to the clipboard and flashes a terminal-style "copied ✓"
 * label. Falls back to opening the mail client when the Clipboard API is
 * unavailable (non-https, old browsers).
 */
export default function CopyEmail({
  email,
  className,
  children,
}: {
  email: string;
  className?: string;
  children: ReactNode;
}) {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timer.current) clearTimeout(timer.current);
    },
    [],
  );

  async function copy() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      location.href = `mailto:${email}`;
      return;
    }
    setCopied(true);
    if (timer.current) clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 1800);
  }

  return (
    <button
      type="button"
      className={className}
      onClick={copy}
      title={email}
      aria-live="polite"
    >
      {copied ? "copied ✓" : children}
    </button>
  );
}
