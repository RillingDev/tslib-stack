import resolve from "rollup-plugin-node-resolve";
import { rollupOptions } from "./package.json";

export default {
    input: `./dist/esm/main.js`,
    output: [{
        format: "iife",
        name: rollupOptions.moduleName,
        file: `./dist/${rollupOptions.outputName}.js`,
        globals: rollupOptions.globals
    }, {
        format: "cjs",
        name: rollupOptions.moduleName,
        file: `./dist/${rollupOptions.outputName}.common.js`
    }],
    external: rollupOptions.external,
    plugins: [
        resolve()
    ]
};