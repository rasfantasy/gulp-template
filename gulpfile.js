'use strict';

//properties
var path = {
    build: { 
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/images/',
        fonts: 'build/fonts/'
    },
    src: { 
        html: 'src/*.html',
        js: 'src/js/main.js',
        style: 'src/style/main.scss',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    watch: { 
        html: 'src/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/images/**/*.*',
        fonts: 'src/fonts/**/*.*'
    },
    clean: './build'
};


var gulp = require('gulp'),
    watch = require('gulp-watch'),
    rigger = require('gulp-rigger'),
	scss = require('gulp-scss'),
	uglify = require('gulp-uglify'),
	imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
	prefixer = require('gulp-autoprefixer'),
	cleanCSS = require('gulp-clean-css');
	


var config = {
    server: {
        baseDir: "./build"
    },
    tunnel: true,
    host: 'localhost',
    port: 9000,
    logPrefix: "Frontend_Devil"
};


//tasks
gulp.task('html:build', function (done) {
    gulp.src(path.src.html) 
        .pipe(rigger()) 
        .pipe(gulp.dest(path.build.html)); 
	done();
});

gulp.task('js:build', function (done) {
    gulp.src(path.src.js) 
        .pipe(rigger()) 
        .pipe(uglify()) 
        .pipe(gulp.dest(path.build.js)); 
	done();
});

gulp.task('style:build', function (done) {
    gulp.src(path.src.style) 
        .pipe(scss()) 
        .pipe(prefixer()) 
        .pipe(cleanCSS())
        .pipe(gulp.dest(path.build.css));
	done();
});

gulp.task('image:build', function (done) {
    gulp.src(path.src.img) 
        .pipe(imagemin({ 
            progressive: true,
            svgoPlugins: [{removeViewBox: false}],
            use: [pngquant()],
            interlaced: true
        }))
        .pipe(gulp.dest(path.build.img));
	done();
});

/*gulp.task('fonts:build', function() {
    gulp.src(path.src.fonts)
        .pipe(gulp.dest(path.build.fonts))
	done();
});*/

gulp.task('build', gulp.series(gulp.parallel(
    "html:build",
	"js:build",
    "style:build",
    //'fonts:build',
    "image:build")));

gulp.task('watch', function(){
    watch([path.watch.html], gulp.series(gulp.parallel('html:build')));
	watch([path.watch.js], gulp.series(gulp.parallel('js:build')));
	watch([path.watch.style], gulp.series(gulp.parallel('style:build')));
	watch([path.watch.img], gulp.series(gulp.parallel('image:build')));
	//watch([path.watch.fonts], gulp.series(gulp.parallel('fonts:build')));
});

 