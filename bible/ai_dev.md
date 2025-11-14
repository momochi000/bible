# AI-DEV.md (aka CLAUDE.md)

This file provides guidance to AI coding agents (including Claude Code (claude.ai/code)) when working with code in this repository.

## Project Overview

This is a ClojureScript project using the Clojure CLI tools (deps.edn) for dependency management.

### Project Context and purpose
The project is to create a (Christian) Bible app which is compiled into a single HTML file with no external dependencies. It is intended to be saved on a mobile phone (android or iphone) and be usable offline fully self-contained (although it should be usable from any device with a browser as well).

## Development Commands

### Prerequisites
- Node.js and npm must be installed
- Dockerfile should include: `RUN apt-get update && apt-get install -y nodejs npm`

### Building and Running
- **Install dependencies**: `npm install` - installs Shadow-cljs, React, and React-DOM
- **Start development server**: `npm run dev` or `npx shadow-cljs watch app` - starts dev server on port 8080 with hot-reload
- **Compile for development**: `npm run compile` or `npx shadow-cljs compile app` - one-time development build
- **Build production release**: `npm run build` or `npx shadow-cljs release app` - optimized build with advanced compilation
- **Create single HTML file**: After running production build, run `./build-html.sh` or manually inline JS into HTML

### Testing
- **Run tests**: `npx shadow-cljs compile test && npx shadow-cljs release test` (requires test build configuration)

### Dependency Management
- **Add dependency**: Edit `deps.edn` and add to `:deps` map with Maven coordinates
- **Check dependency tree**: `clj -Stree`
- **Update dependencies**: `clj -Sforce` to force re-resolution

## Code Architecture

### Tech Stack
- **Build Tool**: Shadow-cljs (installed via npm) - modern ClojureScript compiler with hot-reload
- **UI Framework**: Reagent - minimalistic React wrapper using Hiccup syntax
- **CSS**: Garden - CSS-in-CLJS for generating styles programmatically
- **State Management**: Reagent atoms (simple), will upgrade to Re-frame when complexity grows
- **Target Output**: Single self-contained HTML file (~368KB optimized)

### ClojureScript Conventions
- Source files belong in `src/` directory with path matching namespace (e.g., `src/bible/core.cljs` for `bible.core`)
- Test files belong in `test/` directory following same structure as `src/`
- Use `.cljs` extension for ClojureScript files, `.cljc` for cross-platform Clojure/ClojureScript code
- Namespaces use dashes (e.g., `bible-app.core`) while file names use underscores (e.g., `bible_app/core.cljs`)

### Project Structure
```
├── deps.edn               # Clojure dependencies (Reagent, Garden)
├── package.json           # npm dependencies (Shadow-cljs, React)
├── shadow-cljs.edn        # Shadow-cljs build configuration
├── build-html.sh          # Script to create single HTML file
├── src/
│   └── bible/
│       ├── core.cljs      # Main entry point with Reagent components
│       └── styles.cljs    # Garden CSS definitions
├── resources/
│   └── public/
│       └── index.html     # HTML template
├── target/
│   ├── release/           # Production builds (main.js)
│   └── bible.html         # Final single-file output
└── test/                  # Test files
```

### Build Configuration
- `shadow-cljs.edn`: Defines builds, source paths, and compiler options
- `deps.edn`: Manages Clojure/ClojureScript library dependencies
- `package.json`: Manages JavaScript dependencies (React, Shadow-cljs)
