const gulp = require('gulp')
//const uglify = require('gulp-uglify')
const plumber = require('gulp-plumber')
const config = require('../config')
const wait = require('gulp-wait')

module.exports = function js() {
        return gulp.src(config.dir.src.js)
                .pipe(wait(500))
                .pipe(plumber())
                .pipe(gulp.dest(config.dir.build.js));
}



