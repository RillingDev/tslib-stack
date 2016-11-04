"use strict";

const gulp = require("gulp");
const tasks = require("gulp-task-loader")("tasks");

gulp.task("watch", function() {
    gulp.watch("./src/**/*.js", ["bundle"]);
});

gulp.task("dev", ["watch"]);
gulp.task("test", ["spec"]);
gulp.task("bundle", ["bundle-browser", "bundle-common", "bundle-es"]);
gulp.task("build", ["clean", "bundle", "uglify"]);
gulp.task("dist", ["sync", "build", "test"]);
gulp.task("default", ["dist", ]);
