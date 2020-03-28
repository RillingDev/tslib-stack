# TSLib Stack

> A stack for modern TypeScript libraries

## Introduction

A stack with everything you need when writing modern, maintainable TypeScript libraries and tools.

**[Example Docs](https://felixrilling.github.io/tslib-stack/)**

## Tools

-   Typescript
-   Rollup
-   Jasmine
-   ESLint
-   TypeDoc

## Structure

-   `src/` Contains the main library code.
    -   `main.ts` Library entry point.
-   `specs/` Jasmine tests.
    -   `main.ts` Test entry point.
-   `dist/` Compiled output.
-   `docs/` Documentation generated from docs script.

## Configuration

When creating a new project, make sure to adapt the following in the `package.json`:

```
"rollupOptions": {
    "moduleName": "myLib", // Your module/libraries module name (used for CJS/IIFE bundles).
    "outputName": "myLib", // Your module/libraries output file name (used for CJS/IIFE bundles).
    "external": [], // External modules (see https://rollupjs.org/guide/en/#external).
    "globals": {} // External modules global names (see https://rollupjs.org/guide/en/#outputglobals).
},

"main": "./dist/myLib.common.js", // CJS file name, adapt according to rollupOptions.outputName from above.
```

## Scripts

-   `dist` Compiles the library, runs tests and builds docs.
-   `build` Compiles the library.
-   `test` Compiles and runs tests
-   `docs` Generates TypeDoc documentation
-   `lint` Lints all source scripts and tests
-   `fix` Auto-fixes issues in source scripts and tests
