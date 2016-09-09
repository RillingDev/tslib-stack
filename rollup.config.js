"use strict";

import {
    rollup
} from "rollup";
import commonjs from "rollup-plugin-commonjs";
import nodeResolve from "rollup-plugin-node-resolve";

const lib = require("./package.json").module;

export default {
    moduleName: lib.name,
    moduleId: lib.id,
    entry: "src/main.js",
    plugins: [
        nodeResolve({
            jsnext: false,
            main: true
        }),
        commonjs({})
    ],
    targets: [{
        dest: `dist/es6/${lib.id}.amd.js`,
        format: "amd"
    }, {
        dest: `dist/es6/${lib.id}.common.js`,
        format: "cjs"
    }, {
        dest: `dist/es6/${lib.id}.es.js`,
        format: "es"
    }, {
        dest: `dist/es6/${lib.id}.js`,
        format: "iife"
    }]
};
