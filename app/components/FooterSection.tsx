import { Logo } from "./Logo";

export function FooterSection() {
  return (
    <footer className="pb-16 pt-14">
      <div className="mx-auto grid max-w-[1080px] grid-cols-2 gap-6 px-7 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <a href="#top" className="flex items-center gap-2.5">
            <Logo />
            <span className="text-base font-semibold tracking-tight">Vigil</span>
          </a>
          <div className="mt-2 text-[13.5px] text-ink-2">
            by GoCloudForge, Inc. · © 2026
            <br />
            Apache 2.0 licensed · Built in San Jose
          </div>
        </div>
        <div>
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-3">Project</div>
          <a className="block py-1 text-sm text-ink-2 hover:text-ink" href="https://github.com/rajan-cforge/ai-runtime-monitor-enterprise" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a className="block py-1 text-sm text-ink-2 hover:text-ink" href="#">Documentation</a>
          <a className="block py-1 text-sm text-ink-2 hover:text-ink" href="#">Release notes</a>
        </div>
        <div>
          <div className="mb-2 text-[11px] font-semibold uppercase tracking-[0.08em] text-ink-3">Contact</div>
          <a className="block py-1 text-sm text-ink-2 hover:text-ink" href="mailto:security@gocloudforge.com">security@gocloudforge.com</a>
          <a className="block py-1 text-sm text-ink-2 hover:text-ink" href="mailto:hello@gocloudforge.com">hello@gocloudforge.com</a>
        </div>
      </div>
    </footer>
  );
}
