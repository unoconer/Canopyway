# Canopyway: Website

A one-page site for Canopyway, which provides Solo and self-directed 401(k) plan support from an
office in College Park, Georgia, serving Atlanta. It's static with no dependencies, built with Node and deployed
to **Netlify** at `https://canopyway.netlify.app`.

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check
```

## Deploy to Netlify

1. **Add new project → Import from Git**, then select this repo and branch `claude/nifty-cray-89pvhk`.
2. Name the project `canopyway`.
3. **Forms → Enable form detection**, then deploy. Add an email notification for the `consultation` form.
4. Make the project **public**, then verify it in Google Search Console.

## Structure

The homepage (`/`) holds every section, each reachable from the menu and the sticky section bar:
Services · How it works · Who does what · 401(k) basics · FAQ · About · Visit & contact (meeting form).
`/privacy-policy/`, `/terms/` and `/disclosures/` are separate pages under Georgia law
plus `/thank-you/` and `404.html`.

## Office address

Canopyway is a **storefront office** (`locationType: 'office'`) at **4751 Best Rd, College Park,
GA 30337**, serving Atlanta. The address shows in the hero card, footer and contact section, with a
map and storefront structured data. Keep it identical to the Google Business Profile.

## Design

- **Palette:** warm charcoal `#22201C`, moss `#4F7246`, Georgia clay `#CF6A3F`, sage `#C5DDB5`, cream `#FBF8F2`
- **Type:** Literata (display) and Outfit (text), both self-hosted
- **Logo:** a round badge with a tree canopy and a clay path leading to it (`src/brand.mjs`)
- **Hero:** background video of Atlanta at sunset (desktop only; phones get the poster image)

See `docs/` for the launch checklist, media sources, Search Console and Google Business Profile steps.
