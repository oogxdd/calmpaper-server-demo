# Calmpaper demo API

A zero-dependency, read-only JSON API for the public Calmpaper demo.

The original GraphQL Yoga / Prisma 2 service depended on old database,
GetStream, SendGrid, Stripe, Google OAuth, and upload credentials. Those
integrations are not started in demo mode. The deployable entry point exposes
sample books, authors, comments, and a fictional cross-era social feed without
requiring secrets or persistent storage.

## Run locally

```bash
bun install
bun run dev
```

The API starts on [http://localhost:4000](http://localhost:4000).

## Endpoints

- `GET /api/health`
- `GET /api/demo`
- `GET /api/books`
- `GET /api/books/:slug`
- `GET /api/authors`
- `GET /api/authors/:slug`
- `GET /api/feed`

All mutation methods return `405` because the public demo is read-only.

## Test

```bash
bun run check
```

## Deploy

`api/index.js` and `api/[...path].js` are Vercel Function entry points. No
environment variables are required. Set `DEMO_ALLOWED_ORIGIN` if the deployed
API should only be readable by one frontend origin; otherwise GET responses
use a public `*` CORS origin.

## Security notes

- The previously tracked PEM file has been removed from the working tree and
  ignored. Any historical key must be considered compromised and revoked.
- The old hard-coded Docker database password was replaced with a required
  environment variable.
- OAuth, payment, email, upload, and writable database routes are not exposed.
- `prisma/` and the unused legacy modules remain only as migration reference.

Before building a production API, rotate every historical credential and audit
or rewrite Git history with the repository owner’s explicit coordination.
