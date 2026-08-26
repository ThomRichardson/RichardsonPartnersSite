# Richardson Partners, LLC

Single-page website for [richardsonpartnersllc.com](https://richardsonpartnersllc.com) — a veteran-owned real estate solutions company.

## Local Preview

Open `index.html` in a browser, or serve locally:

```bash
npx serve .
```

Then visit `http://localhost:3000`.

## Digital Business Card (QR Code)

Use **`/card.html`** as your QR code destination:

```
https://richardsonpartnersllc.com/card.html
```

Mobile-first contact page with photo, tap-to-call/email links, and a Save to Contacts button (vCard).

## Structure

```
RichardsonHoldingsSite/
├── index.html      # Single-page site
├── card.html       # Mobile contact card (QR code)
├── card.css        # Contact card styles
├── styles.css      # Main site styles
├── script.js       # Navigation handling
├── assets/
│   ├── logo.png
│   ├── ThomasRichardson.vcf
│   └── thom.jpg
└── README.md
```

## Deployment

This is a static site — deploy the entire folder to any static host (Netlify, Vercel, GitHub Pages, Cloudflare Pages, or your web server).

Point your domain `richardsonpartnersllc.com` DNS to your hosting provider.

## Contact

- **Phone:** (629) 206-6237
- **Email:** thom@richardsonpartnersllc.com
