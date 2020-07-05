const gulp = require('gulp')

const imageMinify = require('./imageMinify')
const svgSprite = require('./svgSprite')
const styles = require('./css')
const vendorcss = require('./vendorcss')
const vendorjs = require('./vendorjs')
const html = require('./html')
const script = require('./js')
const fonts = require('./fonts')
//const copyDependencies = require('./copyDependencies')

const server = require('browser-sync').create()
const config = require('../config')

function readyReload(cb) {
  server.reload()
  cb()
}


module.exports = function serve(cb) {
  server.init({
    server: 'build',
    notify: false,
    open: true,
    cors: true
  })

  gulp.watch(config.dir.watch.img, gulp.series(imageMinify, readyReload))
  gulp.watch(config.dir.watch.svg, gulp.series(svgSprite, readyReload))
  gulp.watch(config.dir.watch.style, gulp.series(styles, cb => gulp.src('build/css').pipe(server.stream()).on('end', cb)))
  gulp.watch(config.dir.watch.vendorcss, gulp.series(vendorcss, readyReload))
  gulp.watch(config.dir.watch.js, gulp.series(script, readyReload))
  gulp.watch(config.dir.watch.vendorjs, gulp.series(vendorjs, readyReload))
  gulp.watch(config.dir.watch.html, gulp.series(html, readyReload))
  gulp.watch(config.dir.watch.fonts, gulp.series(fonts, readyReload))

  // gulp.watch('package.json', gulp.series(copyDependencies, readyReload))

  return cb()
}
