"use strict";

const gulp = require('gulp')

gulp.task('jade', () => {
  const config = require('../config')
  const jade = require('gulp-pug')
  const changed = require('gulp-changed')
  const notify = require('gulp-notify')
  const plumber = require('gulp-plumber')

  return gulp.src(config.jade.src)
    .pipe(plumber({
      errorHandler: notify.onError(err => {
        return {
          title: 'Jade',
          message: err.message
        }
      })
    }))
    .pipe(changed(config.dest))
    .pipe(jade({ pretty: true }))
    .pipe(gulp.dest(config.dest + '/' + config.projectName))
})
