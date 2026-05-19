# OSSMA

Offline-first professional assessment app for sport and health professionals.

## Tech Stack

- SvelteKit
- TypeScript
- pnpm
- Vitest
- ESLint
- Prettier
- adapter-static
- Dexie.js

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

## Local Database

OSSMA uses Dexie.js over IndexedDB for local-first domain data. Interface preferences still use
localStorage for now.

## Local Repositories

Clients and anamneses now have local repositories backed by Dexie. There is no CRUD interface yet.
The next persistence step is either professional/institution repositories or the first client UI.

## Development

```bash
pnpm install
pnpm run dev
pnpm run format
pnpm run lint
pnpm run test
pnpm run check
```
