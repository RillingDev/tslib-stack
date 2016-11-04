"use strict";

const gulp = require("gulp");
const clean = require("gulp-clean");

module.exports = function() {
    return gulp.task("clean", function() {
        return gulp.src("./dist/**/*", {
                read: false
            })
            .pipe(clean());
    });
};
