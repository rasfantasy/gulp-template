const path = require('path')

const root = path.join(__dirname, '../')
const src = path.join(root, 'src')


const dir = {
    build: {
        html: 'build/',
        js: 'build/js/',
        css: 'build/css/',
        img: 'build/images/',
        svg: 'build/images/',
        fonts: 'build/fonts/',
        vendorjs: 'build/js/vendor/',
        vendorcss: 'build/css/vendor/'
    },
    src: {
        html: 'src/pages/*.html',
        js: 'src/js/main.js',
        style: 'src/style/main.scss',
        img: 'src/images/**/*.*',
        svg: 'src/sprites/*.svg',
        fonts: 'src/fonts/**/*.*',
        vendorjs: 'src/vendor/js/*.js',
        vendorcss: 'src/vendor/css/*.css'
    },
    watch: {
        html: 'src/pages/**/*.html',
        js: 'src/js/**/*.js',
        style: 'src/style/**/*.scss',
        img: 'src/images/**/*.*',
        svg: 'src/sprites/*.svg',
        fonts: 'src/fonts/**/*.*',
        vendorjs: 'src/vendor/js/*.js',
        vendorcss: 'src/vendor/css/*.css'
    }
}

//properties
module.exports = {
    dir,
    src,
    root
}