# Information Required Before Launch

Run `node build.mjs` to see what's still missing. Nothing on the site has been invented.

## Already set

- [x] Name: **Canopyway**
- [x] Site URL: `https://canopyway.netlify.app`
- [x] Phone: **(470) 375-0647**
- [x] Hours: **Monday–Friday, 9:00 AM – 5:00 PM (Eastern Time)**, office meetings by appointment
- [x] Business type: **storefront office** in Atlanta, GA (Google Business Profile "Local store")
- [x] Services confirmed: plan setup, records and valuations, Form 5500-EZ preparation, ongoing
      support, Self-Directed and Solo 401(k) education, and office meetings
- [x] Role: administrative support alongside the client's plan provider, at the sponsor's
      direction. The business is not a fiduciary, trustee, custodian, registered investment
      adviser or broker-dealer.
- [x] Format: a one-page site, with separate Privacy, Terms and Disclosures pages

## Required

| Item | Notes |
|---|---|
| **Office street address** | `business.address.streetAddress`. Must be a real office that is **staffed during the posted hours** and receives clients. No virtual office, mailbox (UPS/PO box) or unstaffed coworking address. Currently a visible placeholder. |
| **ZIP code** | `business.address.postalCode`. Currently a visible placeholder. |
| **Register the business name** | Georgia trade name registration with the Clerk of Superior Court in the county where the office is (Fulton or DeKalb), plus the required newspaper notice. Then set `business.publicNameConfirmed: true`. Check the Georgia Corporations Division search, the USPTO and Google Maps for "Canopyway" conflicts first. |

Optional once the address is set: `business.geo` with the office's real coordinates.

## Recommended before going public

- [ ] An attorney has reviewed the Privacy Policy, Terms and Disclosures (Georgia law, administrative-services wording).
- [ ] An ERISA attorney has confirmed the administrative-services role.
- [ ] Netlify: form detection is on, an email notification is set up, and a test submission was received.
- [ ] Netlify: the project is public. Then add the Search Console verification code to `site.googleSiteVerification`.

## Optional (hidden until set)

Business email, owner name, company history and credentials.
