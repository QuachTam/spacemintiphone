# SmartGroup public app catalog

Publish these files together, in the same directory:

- `smartgroup-index.html` — responsive, four-language product page.
- `smartgroup-apps.js` — loads and renders live App Store information.
- `smartgroup-apps-catalog.json` — the public list of App Store IDs.

To add or remove an app, edit only `appIds` in `smartgroup-apps-catalog.json` and upload the
updated file. IDs may be strings or numbers. Keep between 1 and 24 IDs; duplicate
IDs are ignored. Visitors cannot edit the catalog from the page.

The page retrieves names, icons, descriptions, categories, platforms and links
from Apple's public iTunes Lookup API using JSONP. No API key or backend is
required. Only the display-language preference is stored in the browser.
The selected language chooses the US, Vietnam, Japan or Hong Kong storefront.
Missing listings fall back to the US storefront; descriptions remain in the
language supplied by Apple. Unavailable apps are omitted with a notice.
Live metadata is cached in memory for the current page session; reloading fetches it
again. Requests time out and show a retry action on failure. Icon failures show
initials. The grid can be filtered by iOS or Mac.

Serve over HTTP/HTTPS to preview; opening the HTML via `file://` may block the
catalog fetch. If your host sets a Content Security Policy, it must permit the
local script, the page's inline CSS, scripts from `https://itunes.apple.com`,
images from `https://*.mzstatic.com`, and the same-origin JSON request.

Apple controls availability and rate limits; the page depends on its API.
It does not include analytics, advertisements, or a public catalog editor.
The separate `privacy.html` describes the iOS cleanup app, not every app listed
in this hub. Each app's App Store page provides its own privacy/support links.

API reference: https://developer.apple.com/library/archive/documentation/AudioVideo/Conceptual/iTuneSearchAPI/LookupExamples.html

## SEO and refreshing the published catalog

Canonical URL: https://iphone.smartgroupapps.io.vn/smartgroup-index.html

The checked-in HTML includes app cards, icons, descriptions and store links
fetched from Apple, so users and crawlers can read it without JavaScript.
It also includes canonical, Open Graph/Twitter metadata and JSON-LD describing
the organization, collection page and app list. Structured data does not guarantee
rich results or ranking. English is the indexed default; the language selector
changes the client view, not separate language URLs or hreflang pages.

Before publishing, or after changing IDs, run from the repository root:

```sh
ruby Tools/Website/update-smartgroup-catalog.rb
```

This downloads current US App Store information and regenerates the HTML snapshot,
structured data and `smartgroup-sitemap.xml`. It needs Ruby and curl, no gems or API
key. Failed/missing app responses leave the existing page intact. Run this command
in your hosting build/deploy job (or a scheduled publishing job) to automate SEO
snapshot updates. This repository does not configure your hosting schedule.
Runtime JavaScript still refreshes from Apple and preserves the published snapshot
if live lookup fails. The public page has no editor.

Upload `smartgroup-sitemap.xml` alongside the page, then submit
`https://iphone.smartgroupapps.io.vn/smartgroup-sitemap.xml` in Google Search Console.
Alternatively merge its entry into the domain's existing sitemap. Do not replace
an existing domain robots.txt or sitemap. Ensure the host serves the page with
HTTP 200, has no X-Robots-Tag: noindex, and does not block the page, JS, or JSON.
Use Search Console URL Inspection after deployment to request indexing.
