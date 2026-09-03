# AGENTS.md

## Project intent
Aero Works is a broad aerospace learning platform. Keep domains independent: flight-test, engineering, UAS, and pilot-training content must use the shared contracts without embedding domain rules in UI components.

## Working rules
- Keep educational content in `src/content`; keep rendering and scoring logic elsewhere.
- Every question needs a stable ID, objective ID, explanation, difficulty, tags, and authoritative references.
- Never present sample content as current regulatory advice. Prefer primary FAA sources and verify citations when content changes.
- New tracks must export the shared `Track` type and register through `src/content/index.ts`.
- Add tests for scoring, selection, validation, or state behavior when changing learning logic.
- Before completion, run `pnpm test`, `pnpm lint`, and `pnpm build`.
- Preserve GitHub Pages compatibility: static assets and routing must work beneath `/aero-works/`.
