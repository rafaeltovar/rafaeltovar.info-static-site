# Changelog

All notable changes to this project are documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/).
The project has no version numbers, so released changes are grouped by the date they were published.

## Unreleased

### Added

- `AGENTS.md` with guidelines for AI agents (branch naming, commits and pushes, changelog), linked as `CLAUDE.md`.
- `CHANGELOG.md` to track changes to the project.
- `docs/theme-init.js`, which applies the theme from `<head>` to avoid a flash of the wrong theme on load.
- Spanish translations for the link labels.
- Translated `aria-label`s for the language, theme and watermelon buttons.

### Changed

- Expanded the README with features, structure, local setup, deployment and contributing notes, and a mention that the site is built with Claude.
- The page title is now "Home - Rafael Tovar" in English and "Principal - Rafael Tovar" in Spanish.
- Moved the inline CSS and JavaScript out of `docs/index.html` into `docs/style.css` and `docs/script.js`.
- The page language is now `en` by default and is updated when switching language.
- Replaced generic `div`s with `main`, `p` and `nav`.
- The language switch and the watermelon are now `button`s instead of a link and a `div`.
- Translated content is now toggled with the `hidden` attribute instead of inline styles.

### Fixed

- Missing period in the Spanish text.

### Removed

- Outdated `public/` directory; the site is served from `docs/`.

## 2025-12-23

### Added

- Watermelon icon in the bottom corner that switches sides when clicked.
- `CNAME` for the `rafaeltovar.info` custom domain.

### Changed

- Moved the site to `docs/` so GitHub Pages can serve it.
- The links list now uses the Roboto font.

## 2025-11-15

### Added

- Dark theme, detected from the system preference and switchable with a button.

## 2025-11-14

### Added

- First version of the site: rotating greeting, English/Spanish text and links.

### Fixed

- Spanish text.
