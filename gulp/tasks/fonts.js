const gulp = require('gulp')
const config = require('../config')

module.exports = function js() { 
	return gulp.src(config.dir.src.fonts).pipe(gulp.dest(config.dir.build.fonts));
}
