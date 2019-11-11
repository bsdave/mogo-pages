const { watch, src, dest } = require('gulp'),
  sass = require('gulp-sass'),
  autoprefixer = require('gulp-autoprefixer')

function css() {
  return src('uncompiled_scss/style.scss')
    .pipe(sass({
      outputStyle: 'compact'
    }))
    .on("error", sass.logError)
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest('assets/styles/'))
}

function loopCompiling() {
  watch('uncompiled_scss/**/*', css);
}

exports.default = loopCompiling;
