# Aero Works

A modular aerospace learning platform for flight test engineering, aerospace engineering, UAS, and pilot training. FAA Part 107 is the first learning track, with eight study briefings and a 60-question randomized practice bank.

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

To add a track, create a folder with lessons and questions matching the shared schema, export a `Track`, and register it in `src/content/index.ts`. Part 107 content follows the closed source policy in `docs/content-sources.md`: every lesson and question must trace to a supplied FAA course file or to a resource named in the supplied resources PDF. Aero Works is educational material, not regulatory or operational advice.

## Deployment

Pushes to `main` test and build the app, then deploy the static `dist` artifact to GitHub Pages. In repository settings, set **Pages → Source** to **GitHub Actions**.

## License

No license has been selected yet. All rights are reserved until the maintainers add one.
