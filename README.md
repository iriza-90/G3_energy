# G3 Energy International Website

Production-ready marketing site built with **Next.js 15**, **React 19**, and **TypeScript**.

## Stack

- Next.js App Router (SSR/SSG-ready)
- Component-based UI under `src/components`
- Zod validation for contact form
- Security headers (CSP, HSTS, X-Frame-Options, etc.)
- Rate-limited `/api/contact` with honeypot anti-bot field

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Command | Purpose |
|---------|---------|
| `npm run dev` | Local development |
| `npm run build` | Production build |
| `npm run start` | Serve production build |
| `npm run lint` | ESLint |
| `npm run typecheck` | TypeScript check |

## Project structure

```
src/
  app/                 # Routes + API
  components/
    layout/            # Header, Footer
    sections/          # Page sections
    ui/                # Reusable primitives
  data/content.ts      # Site copy (single source of truth)
  hooks/               # Client hooks
  lib/                 # Validation, rate limit, utils
```

## Security practices

- `poweredByHeader: false` (no `X-Powered-By`)
- Strict CSP + HSTS + frame/mime/referrer policies in `next.config.ts`
- Contact payload validated + sanitized with Zod
- In-memory IP rate limiting (swap to Redis/Upstash for multi-instance)
- Honeypot field on contact form
- External links use `rel="noopener noreferrer"`
- React escapes output by default (XSS mitigation)

## Deploy

Recommended: **Vercel** (zero-config for Next.js).

```bash
npx vercel
```

Or any Node host (`npm run build && npm run start`).

Copy `.env.example` → `.env.local` for contact settings.
