# Akmin Minerals website — developer handoff (Nov 7, 2026)

## 1. What is live, and where it comes from

- Live URL: https://akmin-minerals.vercel.app
- Hosting: Vercel, team `husot09s-projects`, project `akmin-minerals`
  (project id `prj_BcI4Jtcw3zA8hCo3MyrCWM5Zmjyv`).
- Current production deployment: `dpl_Dru6U9GcNDsUr9HRRDzrzrtJYFGT` (Nov 7, 2026).
  The previous production version (July 2026) is `dpl_5qxousJWJagG8ZaiieNFPJCGzGJY`,
  and it can be restored with "Instant Rollback" in the Vercel dashboard.
- The live site is a **plain static site: HTML + CSS + vanilla JS. There is no build step and no framework.**
  It is uploaded directly to Vercel (CLI/API), and the Vercel project is **not** connected to Git.

### IMPORTANT: GitHub `main` is NOT the live site
- Repo: https://github.com/Husot09/AKMIN-MINERALS (public)
- `main` holds an **old, unused Next.js/TypeScript/Tailwind version from May 2026**.
  Do not edit or deploy `main` expecting it to change the live site.
- `static-site` branch is the working copy of the **live** site (see section 3).

## 2. File structure (live site)

```
index.html          Home
materials.html      Materials (feldspar, quartz)
about.html          About (story, milestones, how we work, leadership)
contact.html        Contact (info + form)
vercel.json         cleanUrls, no build, + one rewrite (see section 5)
robots.txt, sitemap.xml
assets/css/style.css
assets/js/main.js   EN/TR translations, language toggle, mobile nav,
                    scroll reveal, recipe-tool preview tabs, contact form
assets/img/         photos + favicon.svg + blurred tool previews
```

## 3. What is in the `static-site` branch — and what is missing

Present: every HTML, CSS and JS file, vercel.json, robots.txt, sitemap.xml,
`assets/img/tool-sheet-preview.jpg`, `assets/img/tool-report-preview.jpg`,
and `assets/img/conveyor.jpg` (the retouched version).

**Missing** (exist only on the live site and in the original folder on Huso's Mac):
`excavator.jpg, favicon.svg, feldspar.jpg, hero-stockpile.jpg, loading.jpg,
plant.jpg, quarry-panorama.jpg, quartz.jpg, stockpile-dusk.jpg`
(`family.jpg` was intentionally removed from the site.)

To get them, either copy them from the original local folder, or download them from
https://akmin-minerals.vercel.app/assets/img/<name>
Once all photos are in the branch, the branch is a complete copy of the site.

## 4. How text and translations work (read before editing copy)

- Every visible text element has a `data-i18n="key"` attribute.
- `assets/js/main.js` contains `const I18N = { en: {...}, tr: {...} }`.
  On load (and when EN/TR is clicked), JS replaces each element's text with `I18N[lang][key]`.
- **Every text change must be made in THREE places:**
  1. the HTML file (the default English text, which is what search engines see),
  2. `I18N.en[key]` in main.js,
  3. `I18N.tr[key]` in main.js.
  If you only change the HTML, the JS overwrites it on page load.
- Language choice is saved in `localStorage` (`akmin-lang`).
- The recipe-tool preview tabs and captions are in `TOOL_SHOTS` in main.js (they have their own en/tr text).
- Sanity check after editing: every `data-i18n` key used in the HTML must exist in both `en` and `tr`.

## 5. Special cases — do not break these

1. **Confidential recipe tool screenshots.** The home page shows previews of an internal
   recipe tool. The family requires them to be fully unreadable.
   - Only `tool-sheet-preview.jpg` and `tool-report-preview.jpg` are published. These are
     180 px-wide, pre-blurred copies, and the page applies an extra CSS blur on top.
   - The original sharp files (`tool-sheet.png`, `tool-report.png`, `tool-settings.png`)
     were deliberately removed from the site. **Never re-add them or any sharp screenshot.**
   - The "Targets & limits" tab intentionally has **no image** (`img: null`).
2. **Retouched conveyor photo (temporary workaround).** `vercel.json` has a rewrite that
   serves `/assets/img/conveyor.jpg` from jsDelivr, using the commit on the `static-site` branch:
   `https://cdn.jsdelivr.net/gh/Husot09/AKMIN-MINERALS@85c7dbe0a8300db655cf9ae1cf6afa5160c2b67e/assets/img/conveyor.jpg`
   When you deploy the full site with `assets/img/conveyor.jpg` included, **remove that rewrite**.
   A real file at that path takes precedence anyway, but the rewrite should not stay.
3. **Header CSS fix.** At the end of style.css, nav labels are kept on one line and the
   "Get in touch" button is hidden below 900 px. Turkish labels are longer and were
   wrapping onto two lines. Keep this fix.
4. **Contact form** has no backend: submitting opens the visitor's email app (mailto:
   akmin@akminmaden.com). `contact.html?topic=datasheet` preselects "Technical data sheet request".

## 6. Content decisions already made by the family (do not revert)

- Home hero title: "Feldspar and Quartz Supply for Industrial Manufacturers" (TR: "Endüstriyel üreticiler için feldspat ve kuvars tedariki").
- Home hero subtitle: "Akmin combines mineral supply with applied technical know-how…"
- The stats band (1980s / 2001–2006 / >26% / Çine) was removed. The "26%" figure was removed site-wide.
- Home materials heading: "Consistent Quality, Reliable Supply."
- Materials page: the "How the two minerals compare" table was removed. The intro text was replaced
  (Turkish text written by the family; English matches it). There are "Request a technical data sheet" buttons.
- About page: new hero, Our Story, Milestones (4 steps: Early 1980s, First company –
  acquired by Sibelco, Second company – sold to a company listed on Borsa Istanbul, Today –
  third feldspar & quartz project), Leadership (Saffet Sever, Founder).
  The "Family" section and family photo were removed. "How we work" is its own section where
  "Family" used to be.
- Turkish copy was reviewed and rewritten for natural phrasing on Nov 7.

## 7. Recommended way of working

1. Make changes on the `static-site` branch (or a new branch from it). Never on `main`.
2. Deploy as a **preview** first (Vercel CLI: `vercel deploy` from the site folder, with no `--prod`).
   Check it on desktop and mobile, in both EN and TR.
3. Get approval from Huso / the family.
4. Only then deploy to production (`vercel deploy --prod`).
5. Better long term: put the complete site (with all photos) on one branch, connect the
   Vercel project to the GitHub repo with that branch as production, and remove the jsDelivr rewrite.
   Vercel's GitHub app is already installed on the `Husot09` account.

## 8. Open items

- Connect the custom domain (akminmaden.com) in Vercel. This needs DNS access.
- Replace the mailto contact form with a real form service (e.g. Formspree) that sends to
  akmin@akminmaden.com.
- Turkish is rendered client-side only, so Google indexes English only. Separate /tr/ pages
  with hreflang tags would fix this.
- Possible new page about the third feldspar & quartz deposit project.
- Unused CSS (`.stats*`, `.compare-table*`) can be cleaned up.
