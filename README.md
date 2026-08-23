# Portofolio Rizky Ardiansyah

Next.js 16 (App Router) + Tailwind v4. Built from `../design_handoff_portfolio`.
Static content, no database, no API keys.

```bash
npm run dev     # http://localhost:3000
npm run build
npm test        # mailto composer self-check
```

## Where things live

| What | File |
|---|---|
| All copy, projects, skills, experience | `lib/data.ts` |
| Colours, type scale, spacing, primitives | `app/globals.css` |
| Header, theme toggle, scroll bar | `components/site-header.tsx` |
| Screenshot slots | `components/shot.tsx` |

## Routes

`/` · `/proyek` (filter via `?kind=`) · `/proyek/[slug]` · `/tentang` · `/kontak`

## Images to supply

Every slot currently renders as a labelled dashed placeholder. Drop a file into
`public/` and set `image` on the matching project in `lib/data.ts`:

- 5 project screenshots, 16:10 or wider (the case-study hero crops to 16:9)
- 1 portrait photo, 3:4, wired in `app/tentang/page.tsx`

The dashed cards on `/proyek` are the 21 public repositories without a case
study. They carry real names and real links; only the write-up is missing.

## Repo counts

`otherRepos` in `lib/data.ts` was verified against the GitHub API on
2026-08-23. Every count on the site derives from it, so adding a case study or
a repo updates the headline, the stat tiles and the section copy together. When
you push a new public repo, add a line to that array.

## Still to wire

- `metadataBase` in `app/layout.tsx` is a placeholder domain. Set the real one.
- The contact form opens the visitor's mail client. Swap the submit handler in
  `components/contact-form.tsx` for a Server Action if submissions need to land
  in an inbox you can query.
