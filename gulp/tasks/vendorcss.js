const gulp = require('gulp')
const config = require('../config')

module.exports = function vendorcss() {
    return gulp.src(config.dir.src.vendorcss).pipe(gulp.dest(config.dir.build.vendorcss));
}
