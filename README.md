# TSLib Stack

> A stack for modern TypeScript libraries

## Tools

-   Typescript
-   TSLint
-   Jasmine
-   Rollup
-   Uglify

## Structure

-   `src/` Contains the main library code.
    -   `main.ts` Library entry point.
-   `specs/` Jasmine tests.
    -   `main.ts` Test entry point.
-   `dist/` Library output.
-   `types/` Type definitions generated together with output.
-   `docs/` Documentation generated from docs script.

## Scripts

-   `watch` Starts the rollup watcher
-   `build` Compiles the application to CJS and ES modules
-   `dist` Compiles the application to all formats
-   `docs` Generates JSDoc documentation
-   `lint` Lints all source scripts and tests
-   `fix` Auto-fixes issues in source scripts and tests
-   `test` Compiles and runs tests
