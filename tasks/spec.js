"use strict";

const gulp = require("gulp");
const jasmine = require("gulp-jasmine");

module.exports = function() {
    gulp.task("spec", ["dist"], function() {
        gulp.src("spec/main.spec.js")
            .pipe(jasmine());
    });
};
