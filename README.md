# Canopyway: Website

A one-page site for Canopyway, which provides Solo and self-directed 401(k) plan support from an
office in Atlanta, Georgia. It's static with no dependencies, built with Node and deployed
to **Netlify** at `https://canopyway.netlify.app`.

## Quick start

```bash
node build.mjs          # builds ./dist; checks internal links; lists missing info
STRICT=1 node build.mjs # pre-launch check (fails while the address placeholders remain)
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

## Office address (placeholder)

Canopyway is set up as a **storefront office** (`locationType: 'office'`). Until
`business.address.streetAddress` and `postalCode` are filled in, the page shows yellow
`[Street address — to be provided]` and `[ZIP]` tags, and no storefront schema or map is output.
Fill both in `site.config.mjs` with the real, staffed office address, then rebuild.

## Design

- **Palette:** warm charcoal `#22201C`, moss `#4F7246`, Georgia clay `#CF6A3F`, sage `#C5DDB5`, cream `#FBF8F2`
- **Type:** Literata (display) and Outfit (text), both self-hosted
- **Logo:** a round badge with a tree canopy and a clay path leading to it (`src/brand.mjs`)
- **Hero:** background video of Atlanta at sunset (desktop only; phones get the poster image)

See `docs/` for the launch checklist, media sources, Search Console and Google Business Profile steps.
