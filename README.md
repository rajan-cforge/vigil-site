# vigil-site

Brand site for [Vigil](https://github.com/rajan-cforge/ai-runtime-monitor-enterprise) —
endpoint security for the AI developer.

Deployed at https://vigil.gocloudforge.com via Cloudflare Pages.

## Tech stack

- Next.js 16+ App Router with static export (`output: "export"`)
- Tailwind CSS v4
- TypeScript
- Inter (body) and JetBrains Mono (code) via `next/font/google`
- No external UI/icon/animation libraries — inline SVG only

## Local development

```bash
npm install
npm run dev
# Open http://localhost:3000
```

## Production build

```bash
npm run build
# Static export emitted to out/
```

## Deployment (Cloudflare Pages)

- Framework preset: **Next.js (Static HTML Export)**
- Build command: `npm run build`
- Build output directory: `out`
- Root directory: (blank)
- Custom domain: `vigil.gocloudforge.com`

## Content source

Long-form copy is managed directly in the component files under
`app/components/`. Edit those files for any copy change — there is no
separate authoring doc to keep in sync.

## License

Apache 2.0.
