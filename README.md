# OSSMA

Offline-first professional assessment app for sport and health professionals.

## Status

Initial foundation.

OSSMA now includes an initial onboarding shell for first-time configuration.

## Tech Stack

- SvelteKit
- TypeScript
- pnpm
- Vitest
- ESLint
- Prettier
- adapter-static

## Internationalization

OSSMA uses Paraglide for type-safe internationalization. The initial supported languages are
English and Brazilian Portuguese.

## PWA

OSSMA uses a PWA foundation to support installability and offline access after the first load.
For development validation, use the production build and preview server, then test offline mode in
browser DevTools.

```bash
pnpm run build
pnpm run preview
```

## Development

```bash
pnpm install
pnpm run dev
pnpm run format
pnpm run lint
pnpm run test
pnpm run check
```
