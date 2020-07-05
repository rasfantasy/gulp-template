'use strict';

const gulp = require('gulp');
const html = require('./gulp/tasks/html');
const css = require('./gulp/tasks/css');
const vendorcss = require('./gulp/tasks/vendorcss');
const js = require('./gulp/tasks/js');
const vendorjs = require('./gulp/tasks/vendorjs');
const imageMinify = require('./gulp/tasks/imageMinify');
const fonts = require('./gulp/tasks/fonts');
const svgSprite = require('./gulp/tasks/svgSprite');
const serve = require('./gulp/tasks/serve');
const clean = require('./gulp/tasks/clean');


function setMode(isProduction = false) {
  return cb => {
    process.env.NODE_ENV = isProduction ? 'production' : 'development'
    cb()
  }
}

const dev = gulp.parallel(html, css, js, imageMinify, svgSprite, fonts, vendorjs, vendorcss)

const build = gulp.series(clean, dev) /*copyDependencies,*/ 

module.exports.start = gulp.series(setMode(), dev, serve)
module.exports.build = gulp.series(setMode(true), build)

//module.exports.lighthouse = gulp.series(lighthouse)