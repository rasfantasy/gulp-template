const gulp = require('gulp')
const sass = require('gulp-sass')
const prefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const shorthand = require('gulp-shorthand');
const wait = require('gulp-wait')
const rename = require("gulp-rename")
const plubmer = require("gulp-plumber")
const config = require('../config')


module.exports = function css() {
    return gulp.src(config.dir.src.style)
        .pipe(wait(500))
        .pipe(plubmer())
        .pipe(sass().on('error', function (error) {
            console.log(error);
            done(error);
        }))
        .pipe(prefixer({
            cascade: false
        }))
        .pipe(shorthand())
        .pipe(cleanCSS())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest(config.dir.build.css));
}

