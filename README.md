# Northstar

Landing site for **Northstar**, a Roblox PvP game in development where four rival
factions fight over one shared treasury.

Live: https://northstar112.github.io/NAVAX/

## Editing the text

All copy lives in one file: [`src/content.js`](src/content.js). Change it there and
it updates everywhere on the page — you never need to open the components.

## Working on it locally

```bash
npm install     # once
npm run dev     # local dev server with hot reload
npm run build   # writes the published site into docs/
```

## Deploying

GitHub Pages serves the committed `docs/` folder on `main`
(Settings → Pages → Source: *Deploy from a branch*, Branch: `main` / `docs`).

So to publish a change:

```bash
npm run build
git add -A
git commit -m "Update site"
git push
```

The live site refreshes about a minute later.

## Layout

| Path | What it is |
| --- | --- |
| `src/content.js` | Every piece of text on the site |
| `src/components/` | React components, each with its own CSS file |
| `src/hooks/` | Scroll, reveal, count-up and pointer-glow behaviour |
| `src/styles/` | Design tokens and global styles |
| `docs/` | Build output — generated, don't edit by hand |

Built with React and Vite. Hero photograph by SnapSaga on Unsplash.
