# Rafael Tovar Personal Website

This repository contains the source code for my personal website, [rafaeltovar.info](https://rafaeltovar.info).
It is a playful project. The first version was written with GitHub Copilot in Visual Studio Code, and it has since been developed with [Claude](https://claude.com/claude-code), Anthropic's AI assistant.

Feel free to explore!

## Features

- Greeting that rotates through several languages
- English and Spanish versions of the content
- Light and dark themes, following the system preference by default
- A watermelon 🍉

## Structure

The site is plain static HTML, CSS and JavaScript, with no build step and no dependencies.

```
docs/
├── index.html      # The page
├── style.css       # Styles
├── script.js       # Greeting, language and theme switchers
├── theme-init.js   # Applies the theme before the page is painted
└── CNAME           # Custom domain for GitHub Pages
```

## Running locally

Open `docs/index.html` in a browser, or serve the `docs/` directory with any static server:

```sh
python3 -m http.server --directory docs
```

Then visit <http://localhost:8000>.

## Deployment

The site is published with GitHub Pages from the `docs/` directory of the `main` branch.
Every push to `main` updates the live site.

## Contributing

- Branch naming and other working rules are described in [AGENTS.md](AGENTS.md).
- Changes are recorded in [CHANGELOG.md](CHANGELOG.md).

🍉 Free Palestine! All power to the workers of the world! ✊
