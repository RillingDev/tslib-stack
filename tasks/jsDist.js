"use strict";

const babel = require("babel-core");
const uglify = require("uglify-es");
const bundle = require("./lib/bundle");

const OPTIONS_BABEL = {
    compact: false,
    ast: false,
    presets: [
        ["env", {
            targets: {
                browsers: "chrome >= 58",
            }
        }]
    ]
};

bundle([{
    id: "es",
    ext: ".esm",
    name: "ES",
    fn: code => code
}, {
    id: "cjs",
    ext: ".common",
    name: "CommonJS",
    fn: code => code
}, {
    id: "iife",
    ext: "",
    name: "IIFE",
    fn: code => babel.transform(code, OPTIONS_BABEL).code
}, {
    id: "iife",
    ext: ".min",
    name: "IIFE:min",
    fn: code => uglify.minify(babel.transform(code, OPTIONS_BABEL).code).code
}], []);
