export default function Problem() {
  return (
    <section className="border-t border-[var(--border)] bg-[var(--background)]">
      <div className="mx-auto max-w-5xl px-6 py-20 sm:py-24">
        <h2 className="text-balance text-3xl font-semibold tracking-tight sm:text-4xl">
          AI agents are writing code, accessing credentials, and calling APIs on your machine.
          Nobody&apos;s watching.
        </h2>
        <p className="mt-6 text-pretty text-lg text-[var(--muted)]">
          85% of developers use AI coding agents daily. 88% of organizations have reported
          AI-related security incidents. The agents install dependencies, read sensitive files,
          and make API calls — often overnight, often without supervision. Existing security
          tools weren&apos;t built for this. CrowdStrike watches for malware. Snyk watches your
          repository&apos;s dependencies. Nobody watches the AI agent that installs the
          dependencies, writes the code, and accesses production credentials at 3 AM while you
          sleep.
        </p>
        <aside className="mt-8 rounded-md border-l-4 border-[var(--critical)] bg-[var(--surface)] p-5 text-sm text-[var(--muted)]">
          <p className="font-semibold text-[var(--foreground)]">April 2026</p>
          <p className="mt-2">
            A developer at a major SaaS company installed a Chrome extension from an AI vendor,
            granted it broad Google Workspace permissions, and within days the company&apos;s
            internal systems were compromised through OAuth trust chain pivot. No endpoint
            security product saw it coming.
          </p>
        </aside>
      </div>
    </section>
  );
}
