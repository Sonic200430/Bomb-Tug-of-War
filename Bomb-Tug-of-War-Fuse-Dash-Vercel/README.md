# Bomb Tug-of-War: Fuse Dash

A single-page Canvas game. Career stats, settings, daily scores, and ghosts stay in browser `localStorage`; no database or environment variables are required.

## Deploy to Vercel

1. Push this project to a GitHub repository. Keep `package.json`, `vercel.json`, `build.mjs`, and `index.html` at the repository root.
2. In Vercel, choose **Add New Project** and import that GitHub repository.
3. Set the Root Directory to `./`. Let Vercel detect the framework as **Other** (static site).
4. Use the build settings from `vercel.json`: Build Command `npm run build`, Output Directory `dist`. Install Command can remain the default `npm install`.
5. Leave Environment Variables empty and deploy.

The project has no runtime or development dependencies. Each browser profile keeps its own progress; local data does not sync between devices.

## Build locally

Run `npm install`, then `npm run build`. The build copies the static game into `dist/` using Node.js built-ins only. You can also open `index.html` directly for local play.
