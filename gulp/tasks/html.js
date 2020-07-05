const gulp = require('gulp')
const rigger = require('gulp-rigger')
const plubmer = require("gulp-plumber")
const config = require('../config')
const wait = require('gulp-wait')

module.exports = function html() {
        return gulp.src(config.dir.src.html)
                .pipe(wait(1000))
                .pipe(rigger())
                .pipe(plubmer())
                .pipe(gulp.dest(config.dir.build.html));
}