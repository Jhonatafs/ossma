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

## Local Database

OSSMA uses Dexie.js over IndexedDB for local-first domain data. The current milestone creates
the database foundation only. Interface preferences still use localStorage for now, and domain
data will be implemented in later milestones.

## Local Repositories

Clients and anamneses now have local repositories backed by Dexie. There is no CRUD interface yet.
The next persistence step is either professional/institution repositories or the first client UI.

## Local Database

OSSMA uses Dexie.js over IndexedDB for local-first domain data. Interface preferences still use
localStorage for now.

## Local Repositories

Clients and anamneses now have local repositories backed by Dexie. There is no CRUD interface yet.

## Development

```bash
pnpm install
pnpm run dev
pnpm run format
pnpm run lint
pnpm run test
pnpm run check
```
