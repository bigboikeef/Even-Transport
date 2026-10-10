# Transports Even — Website redesign

A contemporary redesign of [even.lu](https://www.even.lu/fr), developed on the `DEV` branch. The existing live site is not modified.

## Run locally

Requires Node.js 20+.

```bash
npm install
npm run dev
```

Open http://localhost:3000 (redirects to `/fr`).

## Routes

- `/fr`, `/de`, `/lu`, `/en` — language-specific homepage
- `/[lang]/presentation` — company story
- `/[lang]/services` — services
- `/[lang]/fleet` — vehicles
- `/[lang]/careers` — recruitment
- `/[lang]/art` — art gallery entry
- `/[lang]/contact` — contact details and email-compose form
- `/[lang]/legal` — company legal details

## Content, images and review notes

- Facts, contact details, navigation and service descriptions were drawn from existing even.lu pages.
- Truck photos currently load from public `www.even.lu/images/...` URLs. Before launch, confirm permission and copy approved image files into `public/images` so the site does not depend on hotlinked assets.
- The header uses a **reinterpreted typographic wordmark**, not an extracted official company logo. Replace with an approved original logo before production.
- Vehicle statistics may be out of date and are intentionally **not** repeated as live fleet counts. Confirm against current operations.
- Text for DE/LU/EN is a draft adaptation, not a certified reproduction of current site translations. Review all four languages.
- The contact form opens an email draft on the visitor's device; there is **no server mail delivery**. Connect an approved backend before claiming the form sends directly.
- Art by Even has an existing collection of 11 works, but image extraction is pending. The page links to the original gallery rather than inventing its contents.
- The former site remains untouched. Do not merge into `main` or publish without review.

## Original page references

- https://www.even.lu/fr
- https://www.even.lu/fr/presentation
- https://www.even.lu/fr/produits-services
- https://www.even.lu/fr/emploi-81206/carrieres-carreers-81208
- https://www.even.lu/fr/art-by-even-77304/art-by-even-77306
- https://www.even.lu/fr/nos-vehicules/nos-vehicules-113
- https://www.even.lu/fr/contact
- https://www.even.lu/fr/legalnotice
