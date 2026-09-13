# Kartik Sharma — Portfolio (macOS-style)

An interactive, macOS-desktop-styled portfolio site. Click the dock icons to open windows: GitHub projects, About Me notes, Resume, Spotify, and an interactive terminal (CLI).

## Tech stack
React + Vite, SCSS

## Getting started

```bash
npm install
npm run dev       # local dev server
npm run build     # production build -> dist/
npm run preview   # preview the production build
```

## Structure
- `src/components/Dock.jsx` — dock icons and their links (email, GitHub, etc.)
- `src/components/windows/Github.jsx` + `src/assets/github.json` — project cards
- `src/components/windows/Note.jsx` + `public/note.txt` — About Me content
- `src/components/windows/Cli.jsx` — interactive terminal commands
- `src/components/windows/Resume.jsx` + `public/resume.pdf` — embedded resume

## Deploying
Run `npm run build`, then deploy the `dist/` folder to Vercel, Netlify, or GitHub Pages.
