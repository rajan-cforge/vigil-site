"use client";

// Client-side scroll-to-anchor. Next.js App Router intercepts hash
// changes before the browser's native scroll-to-anchor fires, so a
// plain <a href="#install"> in this app moves the viewport by only
// the difference between the current and target hash anchors as the
// router resolves the navigation — visually about 75px of scroll
// instead of jumping to the Install section ~2100px down. Handling
// the scroll explicitly side-steps the router entirely.
export default function InstallCTA() {
  return (
    <button
      type="button"
      onClick={() => {
        const el = document.getElementById("install");
        if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      }}
      className="inline-flex items-center justify-center gap-2 rounded-md bg-[var(--accent)] px-6 py-3 text-sm font-medium text-[#0d1117] transition hover:brightness-110 sm:text-base"
    >
      Install with pip
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="size-4"
        aria-hidden="true"
      >
        <path
          fillRule="evenodd"
          d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm.78-11.53a.75.75 0 0 0-1.06 1.06L11.19 9H6.75a.75.75 0 0 0 0 1.5h4.44l-1.47 1.47a.75.75 0 1 0 1.06 1.06l2.75-2.75a.75.75 0 0 0 0-1.06l-2.75-2.75Z"
          clipRule="evenodd"
        />
      </svg>
    </button>
  );
}
