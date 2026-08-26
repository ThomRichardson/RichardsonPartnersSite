# Richardson Partners, LLC

Single-page website for [richardsonpartnersllc.com](https://richardsonpartnersllc.com) — a veteran-owned real estate solutions company.

## Local Preview

Open `index.html` in a browser, or serve locally:

```bash
npx serve .
```

Then visit `http://localhost:3000`.

## Digital Business Card (QR Code)

Use **`/contact-thom`** as your QR code destination:

```
https://richardsonpartnersllc.com/contact-thom
```

Mobile-first contact page with photo, tap-to-call/email links, and a Save to Contacts button (vCard).

**QR display page** (show on your phone):

```
https://richardsonpartnersllc.com/contact-thom/qr
```

## Structure

```
RichardsonHoldingsSite/
├── index.html           # Single-page site
├── contact-thom/        # Mobile contact card (QR code)
│   ├── index.html
│   ├── card.css
│   └── qr/
│       ├── index.html
│       ├── qr.css
│       └── qr-code.png
├── card.html            # Redirects to /contact-thom
├── styles.css           # Main site styles
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
