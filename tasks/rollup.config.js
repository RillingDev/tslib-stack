import json from "rollup-plugin-json";
import resolve from "rollup-plugin-node-resolve";
import { settings } from "../package.json";

export default {
    input: `./src/${settings.input}`,
    output: [
        {
            format: "es",
            file: `./dist/${settings.namespace.file}.mjs`
        },
        {
            format: "cjs",
            file: `./dist/${settings.namespace.file}.common.js`
        }
    ],
    plugins: [json(), resolve()]
};
