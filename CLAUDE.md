# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project

Unofficial HAMKES: a client-side React 19 single-page app built with Vite 8. Plain JavaScript (JSX), no TypeScript. Package name is `unofficial-hamkes`. Remote is `git@github.com:brogrammer2000/UnofficialHAMKES.git`, default branch `main`.

## Rules for Claude Code

- **Commit and push automatically.** After completing a change, stage the relevant files, commit with a clear message, and push to `origin main` without waiting to be asked. Run `npm run lint` and `npm run build` first and do not commit if either fails.
- **Never commit secrets or sensitive files.** Do not stage `.env*` files containing real values, API keys, tokens, private keys, credentials, or personal data. `*.local` (including `.env.local`) is already gitignored; put secrets there. Before every commit, review `git diff --cached` for anything that looks like a secret and remove it from the commit if found.
- **Do not delete any files.** Never run `rm`, `git rm`, or otherwise remove files from the working tree or the repository, even ones that look unused or are leftover from the Vite starter. If a file should go, say so and let the user delete it.

## Commands

```
npm run dev       # Vite dev server with HMR
npm run build     # production build to dist/
npm run preview   # serve the dist/ build locally
npm run lint      # oxlint (not ESLint) over the whole project
```

There is no test runner configured yet. If one is added, document how to run a single test here.

## Architecture

- `index.html` is the Vite entry. It mounts `#root` and loads `src/main.jsx`.
- `src/main.jsx` creates the React root in `StrictMode` and renders `src/App.jsx`. Global styles live in `src/index.css`.
- `src/App.jsx` is currently the untouched Vite starter page (counter and link cards). Rewrite its contents rather than building around it.
- Static files in `public/` are served at the site root (e.g. `/icons.svg` is referenced via `<use href="/icons.svg#...">`). Assets in `src/assets/` are imported into components and hashed by the bundler.
- `vite.config.js` only registers `@vitejs/plugin-react` (Oxc-based). No path aliases, proxies, or env handling are set up.

## Linting

Config is `.oxlintrc.json`, using the `react` and `oxc` plugins. `react/rules-of-hooks` is an error and `react/only-export-components` is a warning (constant exports allowed, so component files should export only components plus constants to keep Fast Refresh working).

## Notes

- Uses ES modules (`"type": "module"` in `package.json`).
- The README is the stock Vite template README and does not describe this project.
