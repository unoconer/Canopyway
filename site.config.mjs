/**
 * ============================================================================
 *  CANOPYWAY — SITE & BUSINESS CONFIGURATION
 *  Single source of truth for the page, footer, structured data (JSON-LD),
 *  sitemap and canonical URLs.
 * ============================================================================
 *
 *  - `null` means "not provided yet". Required items show a marked placeholder
 *    on the page and are listed when you run `node build.mjs`.
 *  - `STRICT=1 node build.mjs` fails while required launch items are missing.
 *  - Nothing here is invented. Never add private data (EIN, home address).
 * ============================================================================
 */

export default {
  site: {
    url: 'https://canopyway.netlify.app', // no trailing slash
    googleSiteVerification: null, // Search Console HTML-tag "content" value
    locale: 'en_US',
    language: 'en-US',
  },

  business: {
    legalName: null, // PRIVATE — schema only, and only if different from publicName
    publicName: 'Canopyway',
    tagline: 'Solo & Self-Directed 401(k) Plan Support',
    publicNameConfirmed: false, // true once the trade name is registered (Fulton County Clerk of Superior Court)
    owner: null, // optional
    foundingYear: null,

    phone: '(470) 375-0647',
    phoneE164: '+14703750647',
    email: null, // optional — hidden until set; visitors use the contact form

    /**
     * "office": a staffed storefront office that receives clients during the
     * posted hours (Google Business Profile "Local store"). The address shows
     * on the site, the map appears and storefront schema is output ONLY once
     * streetAddress and postalCode are real. Until then, marked placeholders.
     */
    locationType: 'office',
    address: {
      streetAddress: null, // [REQUIRED] e.g. "1234 Example St, Suite 200" — real, staffed office only
      addressLocality: 'Atlanta',
      addressRegion: 'GA',
      postalCode: null, // [REQUIRED]
      addressCountry: 'US',
    },
    geo: null, // real coordinates of the office only
    serviceArea: ['Atlanta, GA'],

    hours: [
      { days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' },
    ],
    hoursNote: 'Office meetings by appointment.',
    timeZoneLabel: 'Eastern Time',

    sameAs: [],
  },

  /** All confirmed by the owner. */
  services: {
    education: { offered: true },
    solo401k: { offered: true },
    planSetup: { offered: true },
    filing: { offered: true },
    recordkeeping: { offered: true },
    ongoing: { offered: true },
    consultation: { offered: true },
  },

  team: [],
  about: { story: null, professionalBackground: null },
  form: { name: 'consultation' },
  analytics: { plausibleDomain: null },

  /** MEDIA — self-hosted, people-free imagery in src/assets/media/. */
  media: {
    // Pexels video 20624154 — Atlanta aerials at sunset (Pexels License)
    heroVideo: { webm: '/assets/media/hero.webm', mp4: '/assets/media/hero.mp4', poster: '/assets/media/hero-poster.webp' },
    // Stock photos from Pexels (Pexels License), no people — sources in docs/MEDIA.md
    images: {
      canopy: { src: '/assets/media/canopy.webp', pos: '50% 50%', alt: 'Atlanta skyline rising above a wide canopy of trees, in black and white' },
      records: { src: '/assets/media/records.webp', pos: '50% 50%', alt: 'Notebook, calculator, pens and notes on a wooden desk' },
      city: { src: '/assets/media/city.webp', pos: '50% 45%', alt: 'Downtown Atlanta skyline seen from the Jackson Street Bridge' },
    },
  },
};
