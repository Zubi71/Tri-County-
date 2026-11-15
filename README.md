# Tri County Handyman Inc. — Website

Single-page Next.js (App Router) website for Tri County Handyman Inc.,
a handyman business in Montgomery, AL, USA.

- Phone: (334) 313-7897
- Email: stevemegerson@yahoo.com
- Google rating: 4.9 stars, 14 reviews

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Production build

```bash
npm run build
npm run start
```

## Deploy on Vercel

1. Push this folder to a GitHub repo.
2. In Vercel: **Add New → Project → Import** the repo.
3. Framework preset: **Next.js** (auto-detected). No environment variables needed.
4. Deploy.

## Notes

- Six pages (`src/app/page.tsx` + `/about`, `/services`, `/gallery`, `/reviews`, `/contact`), sharing one header/footer.
- Every section uses the shared `.container` class: `max-width: 1400px`, centered.
- No external images or web fonts — system font stack + one custom SVG logo
  (`public/logo.svg`, also used as the favicon) for fast loading.
- Glassmorphism: sticky glass header, glass hero badge/card and service cards.
- Fully responsive with a hamburger menu on mobile.
- The quote form has no backend — submitting opens the visitor's email app
  with a pre-filled message to stevemegerson@yahoo.com (mailto).
- No prices, testimonials, addresses or licences are shown — only the
  verified facts above.
