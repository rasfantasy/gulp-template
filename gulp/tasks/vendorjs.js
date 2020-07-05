const gulp = require('gulp')
const config = require('../config')

module.exports = function js() { 
	return gulp.src(config.dir.src.vendorjs).pipe(gulp.dest(config.dir.build.vendorjs));
}
