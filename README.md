# KESO INVEST website

Production foundation for the KESO INVEST corporate website redesign.

## Commands

```bash
npm install
npm run dev
npm run build
npm run lint
npm run typecheck
```

The local development server runs at `http://localhost:3000`.

The production build uses Next.js' supported Webpack path. Turbopack's
PostCSS worker cannot bind its internal process port in the current managed
environment; this does not add a dependency or change the App Router setup.

## Stack

- Next.js App Router
- React
- TypeScript in strict mode
- Tailwind CSS
- ESLint

## Current phase

Phase 2 — technical foundation only. KEEP routes contain minimal technical placeholders; migrated content, final layout, design, motion, forms and final SEO are intentionally not implemented.

Phase 1 source-of-truth files remain at the project root:

- `CONTENT_SOURCE.md`
- `CONTENT_QUESTIONS.md`
- `ASSET_MANIFEST.md`
- `ROUTE_MAP.md`

## Fonts

The project currently uses system fallback stacks defined in `src/styles/globals.css`. When the final licensed font files are approved, add them through `next/font/local` in `src/lib/fonts.ts`; the root layout already consumes the exported font class, so no page-level changes will be needed.

## Environment

No environment variables or external services are required in Phase 2, so `.env.example` is intentionally omitted.
