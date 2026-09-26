# Workout Planner

A responsive, account-free personalized workout planner built with React, TypeScript and Vite. Assessment data stays in the browser session; no backend or AI API is required.

## Run locally

1. Install Node.js 18 or newer.
2. Open a terminal in this folder.
3. Run `npm install`.
4. Run `npm run dev`.

## Production build

```bash
npm install
npm run build
```

The deployable output is created in `dist/`.

## Deploy on Netlify from GitHub (recommended)

1. Create a GitHub repository and upload this project.
2. In Netlify choose **Add new project → Import an existing project**.
3. Select the repository.
4. Build command: `npm run build`
5. Publish directory: `dist`
6. Deploy.

`netlify.toml` already contains these settings and the SPA redirect.

## Netlify manual deployment

Netlify's manual drag-and-drop deploy expects already-built static files. Run `npm install && npm run build` locally, then drag the resulting **dist** folder into Netlify Drop. Do not drag the unbuilt source ZIP into the static drop area.

## Privacy and safety

The basic app does not require an account or backend. Assessment values are held in React state for the current browser session and are not transmitted to an external API. The workout generator provides general fitness guidance and is not medical treatment.

## Main architecture

- `src/data/exercises.ts` — structured exercise library
- `src/engine/generate.ts` — workout generation and progression rules
- `src/utils/pdf.ts` — A4 PDF export
- `src/types/` — assessment and plan data structures
- `src/App.tsx` — landing page, assessment wizard and results dashboard
