"use strict";

const gulp = require("gulp");
const rollup = require("rollup-stream");
const source = require("vinyl-source-stream");
const packageJson = require("../package.json");

module.exports = function() {
    gulp.task("bundle-es", function() {
        return rollup({
                entry: "./src/main.js",
                format: "es"
            })
            .pipe(source(`${packageJson.module.name}.es.js`))
            .pipe(gulp.dest("./dist"));
    });
};
