import { Logo } from "./Logo";
import { GithubMark } from "./icons/GithubMark";

const LINKS = [
  { href: "#what", label: "What it does" },
  { href: "#compare", label: "Static vs runtime" },
  { href: "#install", label: "Install" },
  { href: "#roadmap", label: "Roadmap" },
];

export function Nav() {
  return (
    <nav className="sticky top-0 z-40 border-b border-line bg-canvas/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-[1080px] items-center gap-4 px-7 py-3.5">
        <a href="#top" className="flex items-center gap-2.5">
          <Logo />
          <span className="text-base font-semibold tracking-tight">Vigil</span>
        </a>
        <div className="ml-auto flex items-center gap-1.5">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="hidden whitespace-nowrap rounded-md px-2.5 py-1.5 text-sm text-ink-2 hover:bg-elevated hover:text-ink md:inline"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://github.com/rajan-cforge/ai-runtime-monitor-enterprise"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg border border-line-2 px-3.5 py-2 text-sm font-medium text-ink hover:bg-hover"
          >
            <GithubMark className="size-[15px]" /> GitHub
          </a>
          <a
            href="#install"
            className="inline-flex items-center gap-2 whitespace-nowrap rounded-lg bg-brand px-3.5 py-2 text-sm font-semibold text-[#0b0d12] hover:bg-brand-hi"
          >
            Quick install
          </a>
        </div>
      </div>
    </nav>
  );
}
