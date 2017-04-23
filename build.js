"use strict";

const fs = require("fs");
const rollup = require("rollup");
const babel = require("babel-core");
const uglify = require("uglify-js");
const packageJson = require("./package.json");

const DIR_SRC = "./src/";
const DIR_DIST = "./dist/";
const FILE_SRC = DIR_SRC + "main.js";
const FILE_DIST = DIR_DIST + packageJson.namespace.file;

rollup
    .rollup({
        entry: FILE_SRC,
        plugins: []
    })
    .then(bundle => {
        const result_es = bundle.generate({
            format: "es"
        }).code;
        const result_cjs = bundle.generate({
            format: "cjs"
        }).code;
        const result_iife = babel.transform(bundle.generate({
            moduleName: packageJson.namespace.module,
            format: "iife"
        }).code).code;
        const result_iife_min = uglify.minify(result_iife, {
            fromString: true
        }).code;

        fs.writeFile(`${FILE_DIST}.es.js`, result_es, (err) => console.log(err || "Saved ES"));
        fs.writeFile(`${FILE_DIST}.common.js`, result_cjs, (err) => console.log(err || "Saved CJS"));
        fs.writeFile(`${FILE_DIST}.js`, result_iife, (err) => console.log(err || "Saved IIFE"));
        fs.writeFile(`${FILE_DIST}.min.js`, result_iife_min, (err) => console.log(err || "saved IIFE-min"));
    })
    .catch(err => {
        throw err;
    });
