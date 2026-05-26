"use client";

import { useState } from "react";

export default function CopyButton({ text, label }: { text: string; label: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Browsers without clipboard API (rare; insecure context) — silently
      // no-op. The code block is already plain text and selectable.
    }
  }

  return (
    <button
      type="button"
      onClick={handleCopy}
      aria-label={copied ? `${label}: copied` : `Copy ${label} commands to clipboard`}
      title={copied ? "Copied" : "Copy"}
      className="inline-flex items-center gap-1 rounded border border-[var(--border)] bg-[#0d1117] px-2 py-1 text-xs text-[var(--muted)] transition hover:border-[var(--accent)] hover:text-[var(--foreground)]"
    >
      {copied ? (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-3.5 text-[var(--success)]"
            aria-hidden="true"
          >
            <path d="M4 10.5 8 14.5 16 6.5" />
          </svg>
          <span className="text-[var(--success)]">Copied</span>
        </>
      ) : (
        <>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="size-3.5"
            aria-hidden="true"
          >
            <rect x="6" y="6" width="10" height="11" rx="1.5" />
            <path d="M13 6V4.5A1.5 1.5 0 0 0 11.5 3h-5A1.5 1.5 0 0 0 5 4.5v9A1.5 1.5 0 0 0 6.5 15" />
          </svg>
          <span>Copy</span>
        </>
      )}
    </button>
  );
}
