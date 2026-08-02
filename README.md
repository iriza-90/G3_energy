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

### Quick start (testing)

1. Create a free Resend account and an API key  
2. Copy `.env.example` to `.env.local` and set:

```bash
RESEND_API_KEY=re_xxxx
CONTACT_TO_EMAIL=you@yourdomain.com
RESEND_FROM_EMAIL=G3 Energy <onboarding@resend.dev>
```

3. With `onboarding@resend.dev`, Resend only delivers to the email on your Resend account — fine for testing.

### Production (custom domain)

Before pointing **g3energy.eco** at Vercel:

1. In [Resend → Domains](https://resend.com/domains), add **g3energy.eco** and add the DNS records they provide (SPF, DKIM, optional DMARC).
2. Set these in Vercel (and `.env.local` if testing locally):

```bash
RESEND_API_KEY=re_xxxx
RESEND_FROM_EMAIL=G3 Energy International <noreply@g3energy.eco>
CONTACT_TO_EMAIL=info@g3energy.eco
CONTACT_AUTO_REPLY=true
```

3. Redeploy after saving env vars.

### What gets sent

| Email | Recipient | Purpose |
|-------|-----------|---------|
| Team notification | `CONTACT_TO_EMAIL` | Full enquiry details; **Reply** goes to the visitor |
| Auto-reply | Visitor's email | Confirmation that the message was received |

Until `RESEND_API_KEY` and `CONTACT_TO_EMAIL` are set, the form shows a clear error with a mailto fallback instead of a fake success.
