# Bible app

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
- **Create single HTML file**: `clojure -M:build` - generates self-contained HTML file at `target/bible.html` using Hiccup and Garden
  - This step requires the production build to exist first
  - **One-step complete build**: `npm run build:html` - builds JS and generates HTML in one command

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
├── deps.edn               # Clojure dependencies (Reagent, Garden, Hiccup)
├── package.json           # npm dependencies (Shadow-cljs, React)
├── shadow-cljs.edn        # Shadow-cljs build configuration
├── build/
│   └── build.clj          # Build script using Hiccup to generate HTML
├── src/
│   └── bible/
│       ├── core.cljs      # Main entry point with Reagent components
│       └── styles.cljs    # Garden CSS definitions (runtime)
├── resources/
│   └── public/
│       ├── index.html     # HTML template (for development server only)
│       └── bible.json     # raw bible data (compiled ahead of time separately using scripts/parse_bible.clj
├── target/
│   ├── release/           # Production builds (main.js)
│   └── bible.html         # Final single-file output
└── test/                  # Test files
```

### Build Configuration
- `shadow-cljs.edn`: Defines builds, source paths, and compiler options
- `deps.edn`: Manages Clojure/ClojureScript library dependencies
- `package.json`: Manages JavaScript dependencies (React, Shadow-cljs)

### Build Process Architecture
The build pipeline is fully Clojure-based:

1. **ClojureScript Compilation** (`npm run build`):
   - Shadow-cljs compiles ClojureScript to optimized JavaScript
   - Output: `target/release/main.js`

2. **HTML Generation** (`clojure -M:build`):
   - `build/build.clj` uses **Hiccup** to generate HTML structure
   - Garden generates CSS from Clojure data structures (defined in `build.clj`)
   - JavaScript is inlined into `<script>` tag
   - CSS is inlined into `<style>` tag
   - Output: Single self-contained `target/bible.html`

**Why this approach?**
- Pure Clojure solution - no shell scripts or string manipulation
- Type-safe HTML generation with Hiccup
- Programmatic CSS with Garden
- Easy to extend (add meta tags, inline data, etc.)

**Details and process**
The bible content itself is stored in `resources/kjv.txt`. This is parsed and processed into a json stored in `resources/bible.json` which is then included into the html template. The script which handles this is in `scripts/parse_bible.clj`. The html template includes boilerplate such as the outermost `<html>` tags and metadata and the react app is injected into it. So, the process is:

- Parse bible text into json
- Generate html template including bible json data
- Run clojurescript app which generates html/js and inject into html template

### App execution structure
On page load the following happens:
1. The raw bible data as bible.json is loaded into an atom named `bible-data`
2. The app state is set at the start of the bible in an atom which is a map
   it looks like this: `{:current-book "Genesis" :current-chapter 1 :current-verse 1}`
3. The react app is loaded into the html template


### Data structure
The raw bible data in bible.json has the following shape:
```json
{
  "books": [
    {
      "name": "Genesis",
      "chapters": [ {
        "chapter": 1,
        "verses":[ {
          "verse": 1,
          "text": "..."
        }, {
          "verse": 2,
          "text": "..."
        }]
      }, {
        ...
      }]
    }, {
      "name": "Exodus",
      ...
    }
  ]
}
```

the app state is stored in an atom named `app-state` and is defined intially as follows:
```clojure
(defonce app-state (r/atom {:current-book "Genesis"
                            :current-chapter 1
                            :current-verse 1}))
```
