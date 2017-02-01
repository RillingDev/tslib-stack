"use strict";

const fs = require("fs");
const rollup = require("rollup");
const babel = require("babel-core");
const uglify = require("uglify-js");
const packageJson = require("./package.json");

const DIR_SRC = "./src/";
const DIR_DIST = "./dist/";
const outputPath = DIR_DIST + packageJson.namespace.file;

rollup
    .rollup({
        entry: DIR_SRC + "main.js",
    })
    .catch(err => {
        console.log("An error occured while bundling");
        console.log(err);
    })
    .then(bundle => {
        const result = {
            es: bundle.generate({
                format: "es"
            }),
            cjs: bundle.generate({
                format: "cjs"
            }),
            iife: babel.transform(bundle.generate({
                moduleName: packageJson.namespace.module,
                format: "iife"
            }).code)
        };


        fs.writeFile(`${outputPath}.js`, result.iife.code, () => {
            fs.writeFileSync(`${outputPath}.min.js`, uglify.minify(`${outputPath}.js`).code);
        });
        fs.writeFileSync(`${outputPath}.es.js`, result.es.code);
        fs.writeFileSync(`${outputPath}.common.js`, result.cjs.code);
    });
