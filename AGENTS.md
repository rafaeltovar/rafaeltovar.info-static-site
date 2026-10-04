# AGENTS.md

Guidelines for AI coding agents working on this repository.

## Project

Personal website of Rafael Tovar, built with plain static HTML, CSS and JavaScript (no build step, no dependencies).
It is published with GitHub Pages from the `docs/` directory of the `main` branch, under the custom domain set in `docs/CNAME`.

- `docs/index.html` — the page
- `docs/style.css` — styles
- `docs/script.js` — behaviour (greeting rotation, language and theme switchers)
- `docs/theme-init.js` — applies the saved/preferred theme from `<head>`, before the page is painted
- `docs/CNAME` — custom domain for GitHub Pages; do not modify or remove it

## Branches

Name every new branch with one of these prefixes:

| Prefix  | Use it for                                       | Example              |
|---------|--------------------------------------------------|----------------------|
| `feat/` | A new feature                                    | `feat/photo-gallery` |
| `fix/`  | A bug fix, or a small change                     | `fix/spanish-typo`   |
| `imp/`  | An improvement to something that already exists | `imp/semantic-html`  |

After the prefix, use a short, lowercase, hyphen-separated description of the change.
