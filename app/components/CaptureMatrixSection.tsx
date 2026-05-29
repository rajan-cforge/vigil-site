interface Layer {
  layer: string;
  captures: string;
  how: string;
}

const LAYERS: Layer[] = [
  {
    layer: "AI API traffic",
    captures: "Every prompt, response, token count, and tool call from agents that route through the HTTPS proxy",
    how: "mitmproxy addon, selective SSL inspection — AI API hostnames only (X.509 NameConstraints)",
  },
  {
    layer: "CLI agent sessions",
    captures: "Full Claude Code transcripts including system prompts, file reads, bash commands, and tool use",
    how: "JSONL transcript tailing under ~/.claude/projects/",
  },
  {
    layer: "Browser AI",
    captures: "Claude Web, ChatGPT, and Gemini conversations — verified end-to-end in v0.2. Perplexity, Copilot, and DeepSeek have coded support; verification in progress.",
    how: "Chrome extension (content script, isolated world)",
  },
  {
    layer: "Process / filesystem / network",
    captures: "Agent process lifecycle, files read or written, outbound connections, CPU and memory",
    how: "psutil + watchdog / FSEvents",
  },
];

export function CaptureMatrixSection() {
  return (
    <section id="capture" className="border-b border-line py-22">
      <div className="mx-auto max-w-[1080px] px-7">
        <div className="mb-[18px] text-xs font-semibold uppercase tracking-[0.12em] text-brand">
          Capture matrix
        </div>
        <h2 className="mb-4 text-[clamp(28px,4vw,38px)] font-semibold leading-[1.1] tracking-[-0.025em]">
          Four layers of visibility, set up once.
        </h2>
        <div className="mt-10 overflow-hidden rounded-xl border border-line">
          <table className="w-full border-collapse">
            <thead>
              <tr>
                <th className="w-[170px] border-b border-line bg-elevated px-[18px] py-3.5 text-left text-[11px] font-semibold uppercase tracking-[0.07em] text-ink-3">Layer</th>
                <th className="border-b border-line bg-elevated px-[18px] py-3.5 text-left text-[11px] font-semibold uppercase tracking-[0.07em] text-ink-3">What it captures</th>
                <th className="w-[32%] border-b border-line bg-elevated px-[18px] py-3.5 text-left text-[11px] font-semibold uppercase tracking-[0.07em] text-ink-3">How</th>
              </tr>
            </thead>
            <tbody>
              {LAYERS.map((l) => (
                <tr key={l.layer}>
                  <td className="whitespace-nowrap border-b border-line px-[18px] py-4 align-top text-sm font-medium text-ink last:border-0">{l.layer}</td>
                  <td className="border-b border-line px-[18px] py-4 align-top text-sm text-ink-2">{l.captures}</td>
                  <td className="border-b border-line px-[18px] py-4 align-top font-mono text-[12.5px] text-ink-3">{l.how}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mt-5 max-w-[760px] text-sm text-ink-2">
          The capture is selective: the proxy&apos;s <span className="font-mono text-ink-3">--allow-hosts</span> regex only
          intercepts AI API endpoints. Banking, email, and unrelated traffic flow through untouched.
        </p>
      </div>
    </section>
  );
}
