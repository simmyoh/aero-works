# Aero Works

A modular aerospace learning platform for flight test engineering, aerospace engineering, UAS, and pilot training. FAA Part 107 is the first learning track.

## Start locally

```bash
pnpm install
pnpm dev
```

Run `pnpm test`, `pnpm lint`, and `pnpm build` before opening a pull request.

## Architecture

- `src/content/tracks/<track-id>/` owns lessons, questions, and track metadata.
- `src/types/content.ts` is the content contract.
- `src/lib/` contains track-agnostic quiz and exam logic.
- `src/components/` renders reusable learning experiences.
- `docs/roadmap/` describes release scope.

To add a track, create a folder with lessons and questions matching the shared schema, export a `Track`, and register it in `src/content/index.ts`. Content should cite authoritative references and be reviewed for currency. Aero Works is educational material, not regulatory or operational advice.

## Deployment

Pushes to `main` test and build the app, then deploy the static `dist` artifact to GitHub Pages. In repository settings, set **Pages → Source** to **GitHub Actions**.

## License

No license has been selected yet. All rights are reserved until the maintainers add one.
