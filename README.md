# Optika — Landingpage (Static Website)

Build a modern, premium, responsive landing page for a brand called **Optika** (optics / eyewear / eye-care).
This repo should become a ready-to-deploy static website.

## Goals
- Premium, clean, minimal design (Apple-like simplicity)
- Fast loading, accessible, responsive
- Clear conversion: "Termin buchen" / "Beratung anfragen"
- SEO-friendly structure and metadata

## Pages
- **/ (Landingpage)** — single page for now

## Sections (Landingpage)
1. Top navigation (logo, links, primary CTA button)
2. Hero section:
   - Headline: premium optics / eyewear
   - Subheadline: short value proposition
   - CTAs: "Termin buchen" (primary), "Kollektion ansehen" (secondary)
3. Trust bar (e.g., "4.9★ Bewertungen", "Kostenloser Sehtest", "Premium-Gläser")
4. Services / Benefits (3–6 cards)
5. Featured collection (3 product cards, placeholder images)
6. “So läuft’s ab” (3 steps)
7. Testimonials (2–3 quotes)
8. Pricing teaser (2 tiers: Basic / Premium) OR “Leistungen ab …”
9. FAQ (accordion or simple list)
10. Contact section with form (name, email, message) + business info
11. Footer (links, social placeholders, legal placeholders)

## Branding / Style
- Name: Optika
- Tone: modern, confident, short sentences, German copy
- Visual style:
  - Light background with subtle gradients
  - Dark text, high contrast
  - Rounded corners, soft shadows, thin borders
  - Use CSS variables for colors and spacing
- Typography:
  - system-ui stack (no external fonts required)

## Tech constraints
- Use **plain HTML + CSS** (and minimal vanilla JS only if needed)
- No frameworks
- No external dependencies
- Output files:
  - `index.html`
  - `styles.css`
  - `script.js` (optional)
  - `/assets` folder for placeholder images (use simple placeholders if no images exist)

## Acceptance criteria
- Lighthouse-friendly: semantic HTML, meta tags, alt text
- Responsive: looks great on mobile and desktop
- Buttons and form have hover/focus styles
- Consistent spacing and layout
- Easy to customize text & colors in one place (CSS variables)

## Local run
Open `index.html` in a browser, or use a simple server.

## Notes
- Replace placeholder address/phone/email with real data later.
- Keep legal links as placeholders for now (Impressum/Datenschutz).
