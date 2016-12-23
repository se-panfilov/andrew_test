"use strict"

const gulp = require('gulp')

gulp.task('stylus', function () {
  const config = require('../config')
  const stylus = require('gulp-stylus')
  const nib = require('nib')
  const changed = require('gulp-changed')
  const concat = require('gulp-concat')
  const notify = require('gulp-notify')
  const plumber = require('gulp-plumber')

  return gulp.src(config.stylus.src)
    .pipe(plumber({
      errorHandler: notify.onError(err => {
        return {
          title: 'Styles',
          message: err.message
        }
      })
    }))
    .pipe(changed(config.dest))
    // .pipe(concat(config.projectName + '.styl'))
    .pipe(stylus({ use: [nib()], compress: false }))
    // .pipe(gulp.dest(config.dest + config.projectName))
    .pipe(gulp.dest(config.dest))
})
