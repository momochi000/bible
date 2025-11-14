# AI-DEV.md (aka CLAUDE.md)

This file provides guidance to AI coding agents (including Claude Code (claude.ai/code)) when working with code in this repository.

## Project Overview

This is a ClojureScript project using the Clojure CLI tools (deps.edn) for dependency management.

### Project Context and purpose
The project is to create a (Christian) Bible app which is compiled into a single HTML file with no external dependencies. It is intended to be saved on a mobile phone (android or iphone) and be usable offline fully self-contained (although it should be usable from any device with a browser as well).

## Development Commands

### Building and Running
- **Start a REPL**: `clj -M:dev` (after adding a `:dev` alias to deps.edn)
- **Compile ClojureScript**: `clj -M -m cljs.main -c <namespace>` - compiles the specified namespace
- **Run ClojureScript REPL**: `clj -M -m cljs.main -r` - starts a browser REPL
- **Compile for production**: `clj -M -m cljs.main -O advanced -c <namespace>` - optimized build

### Testing
- **Run tests**: `clj -M:test -m cljs.test-runner` (requires test runner alias in deps.edn)
- **Run specific test namespace**: `clj -M:test -m cljs.test-runner -n <namespace>`

### Dependency Management
- **Add dependency**: Edit `deps.edn` and add to `:deps` map with Maven coordinates
- **Check dependency tree**: `clj -Stree`
- **Update dependencies**: `clj -Sforce` to force re-resolution

## Code Architecture

### ClojureScript Conventions
- Source files belong in `src/` directory with path matching namespace (e.g., `src/app/core.cljs` for `app.core`)
- Test files belong in `test/` directory following same structure as `src/`
- Use `.cljs` extension for ClojureScript files, `.cljc` for cross-platform Clojure/ClojureScript code
- Namespaces use dashes (e.g., `my-app.core`) while file names use underscores (e.g., `my_app/core.cljs`)

### Project Structure
```
├── deps.edn           # Dependency and build configuration
├── src/               # ClojureScript source files
├── test/              # Test files
└── resources/         # Static resources (HTML, CSS, etc.)
```

### Build Configuration
The `deps.edn` file manages:
- Dependencies (`:deps` key)
- Development/build aliases (`:aliases` key)
- Source paths (`:paths` key)

Common aliases to add:
- `:dev` - development dependencies and paths
- `:test` - test runner and dependencies
- `:build` - production build configuration
