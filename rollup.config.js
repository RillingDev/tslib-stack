import resolve from "@rollup/plugin-node-resolve";
import { rollupOptions } from "./package.json";

export default {
    input: `./dist/esm/src/main.js`,
    output: [
        {
            format: "iife",
            sourcemap: true,
            name: rollupOptions.moduleName,
            file: `./dist/main.iife.js`,
            globals: rollupOptions.globals,
        },
        {
            format: "cjs",
            sourcemap: true,
            name: rollupOptions.moduleName,
            file: `./dist/main.common.js`,
        },
    ],
    external: rollupOptions.external,
    plugins: [resolve()],
};
