<!-- BEGIN:nextjs-agent-rules -->

# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` (resolved from this file's directory; in monorepos the `next` package may not be visible from the repo root) before writing any code. Heed deprecation notices.

This block is written and re-added by `next dev` — verify at `node_modules/next/dist/server/lib/generate-agent-files.js`. Removing it from a diff only re-creates the uncommitted change; committing it with your work keeps the tree clean.

<!-- END:nextjs-agent-rules -->

# Loghook (Next.js 16.3.1, App Router)

Fishing catch log. pnpm 11 is the package manager; run everything with `pnpm`.

## Commands

- `pnpm dev` — dev server (also reachable at `http://10.0.0.3:3000` via `allowedDevOrigins` in `next.config.ts`)
- `pnpm build` — production build
- `pnpm lint` — run oxlint
- `pnpm format` — run oxfmt (config `.oxfmtrc.json`: single quotes, semicolons, printWidth 80).
- Typecheck — `pnpm exec tsc --noEmit` (there is no `typecheck` script)
- No test framework, no test scripts, no CI.

## Data layer (non-obvious)

- The active repository is `JSONRepository` in `src/repositories/repository.json.ts`. It is **server-side only** and reads/writes `/tmp/catches.json`. Data is ephemeral and shared across all processes.
- `Catch` shape and validation live in `src/data/schema.ts` (zod) — single source of truth.

## Layout / conventions

- Layer order: `src/actions/` (server actions, `'use server'`) → `src/services/` (business logic) → `src/repositories/` (`Repository<T>` interface in `repository.ts`) → `src/data/` (schema).
- Import path alias `@/*` → `src/*`; use it for all intra-app imports.
- Form state: react-hook-form + zodResolver against `CatchSchema`.
