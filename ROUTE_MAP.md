# KESO INVEST — Route Map

Status: `CONTENT MIGRATION MAP / HTTP TREATMENT NOT YET APPROVED`

## KEEP

Preserve these exact paths and their relevant content. No redirect is required if the path remains unchanged.

| Existing URL | Future path | Purpose |
|---|---|---|
| `https://kesoinvest.com/` | `/` | Corporate homepage |
| `https://kesoinvest.com/luma-residence/` | `/luma-residence/` | Corporate project presentation with external Luma website CTA |
| `https://kesoinvest.com/reference/` | `/reference/` | Completed projects and Luma reference |
| `https://kesoinvest.com/o-investitoru/` | `/o-investitoru/` | Investor/company presentation |
| `https://kesoinvest.com/contact/` | `/contact/` | Contact details and inquiry form |

## MOVE TO LUMA PROJECT

These routes and features no longer belong to the KESO corporate website. Keep
their current placeholders available until the final Luma domain and matching
destinations are approved; do not implement final redirects yet.

| Existing URL/content | Future handling | Status |
|---|---|---|
| `https://kesoinvest.com/prvi-sprat/` | Future 301 to the matching first-floor destination on the Luma website | `DESTINATION UNCONFIRMED` |
| `https://kesoinvest.com/drugi-sprat/` | Future 301 to the matching second-floor destination on the Luma website | `DESTINATION UNCONFIRMED` |
| `https://kesoinvest.com/treci-sprat/` | Future 301 to the matching third-floor destination on the Luma website | `DESTINATION UNCONFIRMED` |
| `https://kesoinvest.com/cetvrti-sprat/` | Future 301 to the matching fourth-floor destination on the Luma website | `DESTINATION UNCONFIRMED` |
| Floor selectors, apartment hotspots, availability states, unit modals and apartment data | Rebuild only inside the separate Luma project | `OUT OF KESO SCOPE` |
| Garage-space sales/application functionality | Rebuild only inside the separate Luma project if required | `OUT OF KESO SCOPE` |
| `https://kesoinvest.com/wp-content/uploads/2025/11/Luma-residence-Infobook-1-print.pdf` | Move to the Luma project; preserve or redirect the existing URL only after backlink and campaign checks | `DESTINATION UNCONFIRMED` |

### Migration reference retained

Detailed floor, apartment, availability and infobook content remains preserved
in `CONTENT_SOURCE.md` for the future Luma website. It is intentionally not
rendered by the KESO corporate presentation page.

### Document URL migration

| Existing URL | Proposed future handling | Status |
|---|---|---|
| `https://kesoinvest.com/wp-content/uploads/2025/11/Luma-residence-Infobook-1-print.pdf` | Preserve temporarily, then redirect to the approved Luma website document location | `UNCONFIRMED`; do not redirect until the destination and SEO/backlink checks are complete |

## REMOVE

These are clear Luxtower/theme/demo content and must not be migrated into the new site or included in the new sitemap.

### Demo pages

- `/about-us/`
- `/faqs/`
- `/building/`
- `/neighborhood/`
- `/gallery/`
- `/amenities/`
- `/availability/`
- `/residences/`
- `/icons/`
- `/apartment/`
- `/sample-page/`
- `/blog/`

### Demo apartment entries

- `/apartment/classic-suite/`
- `/apartment/studio-apartments/`
- `/apartment/penthouses/`
- `/apartment/3-bedrooms/`
- `/apartment/2-bedrooms/`
- `/apartment/1-bedroom/`
- `/apartment/modern-suite/`
- `/apartment/studio-apartments-2/`
- `/apartment/luxury-apartments/`

### Demo posts

- `/hello-world-2/`
- `/interior-insights-kate-marker-interiors-2/`
- `/the-claremont-collection-by-sophie-paterson-2/`
- `/tiffany-keep-has-been-in-the-thick-of-the-xc-action/`
- `/interior-insights-kate-marker-interiors/`
- `/the-claremont-collection-by-sophie-paterson/`
- `/introducing-shelf-brackets/`
- `/valley-electrical_titan-racing-team-launch/`
- `/racer-blog-tiffany-keep-in-the-zone/`

Removal means removal from the new content model and sitemap. Final HTTP behavior (`404`, `410`, or a justified specific redirect) belongs to the later SEO migration phase.

## VERIFY

These are not new public pages to build, but their index/backlink behavior must be checked before cutover.

### WordPress image-map/custom-post URLs

- `/?post_type=da_image`
- `/?da_image=6427`
- `/?da_image=prvi-sprat-lamelaab`
- `/?da_image=prvi-sprat-lamelaab-2`
- `/?da_image=prvi-sprat-lamelaab-2-2`
- `/?da_image=prvi-sprat-lamelaab-2-2-2`

### Taxonomy, author and archive families

- `/category/*`
- `/tag/*` and WordPress post-tag URLs
- `/author/*`
- Pagination/feed variants of demo archives
- WordPress search URLs `/?s=*`

### Media and generated WordPress URLs

- All currently linked `/wp-content/uploads/*` files listed in `ASSET_MANIFEST.md`.
- WordPress attachment pages, if indexed.
- Generated image-size variants such as `-300x300`, `-1024x669`, etc.

### Required verification before removal

1. Google Search Console indexed-pages report.
2. External backlink report.
3. Organic landing-page report, if analytics are available.
4. Whether any sales campaigns link directly to floor URLs, the PDF, images or query URLs.
5. Whether the existing PDF URL must remain byte-compatible or can be redirected to an optimized version.
