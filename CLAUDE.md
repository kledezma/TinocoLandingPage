# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A React landing page for an educational campaign ("Recordar para Defender la Democracia") about the Tinoco brothers' dictatorship in Costa Rica (1917-1919). Deployed to GitHub Pages at `https://kledezma.github.io/TinocoLandingPage`.

## Commands

```bash
npm install       # Install dependencies
npm start         # Dev server (localhost:3000)
npm run build     # Production build
npm run deploy    # Build + deploy to GitHub Pages (gh-pages)
npm test          # Run tests
```

## Architecture

Single-page React app (React 17, Create React App). All content is in Spanish.

**Rendering order in `App.jsx`:**
`Header` → `Hero` → `ContextoHistorico` → `Timeline` → `Importancia` → `PropuestaInnovadora` → `PublicoObjetivo` → `TripleHelice` → `Footer`

Components not yet wired into `App.jsx` but present in `src/components/`: `CuadrupleHelice`, `AporteDesarrollo`, `Aprendizajes`, `Conclusion`.

**Styling:** Single global stylesheet at `src/styles/App.css`. No CSS modules or component-level styles — all classes are global. Colors center on a dark navy (`#1a365d`). Layout uses a `.container` class (max-width 1200px) and section `id` attributes are used for anchor navigation from the fixed `Header`.
