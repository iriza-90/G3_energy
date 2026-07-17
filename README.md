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

## Contact form email

The contact form posts to `/api/contact`, which sends mail through [Resend](https://resend.com).

1. Create a free Resend account and an API key  
2. Set these environment variables (local `.env.local` and/or Vercel):

```bash
RESEND_API_KEY=re_xxxx
CONTACT_TO_EMAIL=you@yourdomain.com
RESEND_FROM_EMAIL=G3 Energy <onboarding@resend.dev>
```

3. For production, verify your domain in Resend and switch `RESEND_FROM_EMAIL` to something like `G3 Energy <noreply@g3energy.com>`

Until those vars are set, the form shows an error instead of a fake “sent” success.
