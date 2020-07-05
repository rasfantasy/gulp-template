const gulp = require('gulp')
const imagemin = require('gulp-imagemin')
const pngquant = require('imagemin-pngquant')
const config = require('../config')

module.exports = function imageMinify() { 
	return gulp.src(config.dir.src.img)
        .pipe(imagemin({
            progressive: true,
            svgoPlugins: [{ removeViewBox: false }],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(config.dir.build.img));
}


