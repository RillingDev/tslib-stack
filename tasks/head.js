//Write head to js
"use strict";

const fs = require("fs");
const packageJson = require("../package.json");
const lib = packageJson.module;
const files = [
    `es6/${lib.id}.amd.js`,
    `es6/${lib.id}.common.js`,
    `es6/${lib.id}.es.js`,
    `es6/${lib.id}.js`,
    `${lib.id}.amd.js`,
    `${lib.id}.common.js`,
    `${lib.id}.es.js`,
    `${lib.id}.js`
];
const head =
`/**
 * ${lib.name} ${packageJson.version}
 * Author: ${packageJson.author}
 * Homepage: ${packageJson.homepage}
 * License: ${packageJson.license}
 */

`;

function writeHeader(file) {
    const path = `./dist/${file}`;

    fs.readFile(path, function read(err, data) {

        if (err) {
            throw err;
        }

        fs.writeFile(path, head + data, function (err) {
            if (err) {
                throw err;
            }
            console.log(`wrote ${path}`);
        });
    });
}

files.forEach(file => {
    writeHeader(file);
});
