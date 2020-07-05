const gulp = require('gulp')
const svgstore = require('gulp-svgstore')
const rename = require('gulp-rename')
const cheerio = require('gulp-cheerio')
const replace = require('gulp-replace')
const config = require('../config')
const inject = require('gulp-inject')

module.exports = function svgSprite() {
  return gulp.src(config.dir.src.svg)
    .pipe(cheerio({
      run: function ($) {
        $('[fill]').removeAttr('fill');
        $('[stroke]').removeAttr('stroke');
        $('[style]').removeAttr('style');
      },
      parserOptions: { xmlMode: true }
    }))
    .pipe(replace('&gt;', '>'))
    .pipe(rename({ prefix: 'icon-' }))
    .pipe(svgstore(
      {
        inlineSvg: true
      }
    ))
    .pipe(rename('sprite.svg'))
    .pipe(gulp.dest(config.dir.build.svg))
}



