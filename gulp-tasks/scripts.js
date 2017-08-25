/**
 * @ngdoc object
 * @name scripts
 * @description
 *
 * Set of commands for building scripts
 */
'use strict';

var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  path = require('path'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  replace = require('gulp-replace-task'),
  notifyInfo = {
    title: 'Gulp',
    icon: path.join(__dirname, 'gulp.png')
  },
  // error notification settings for plumber
  plumberErrorHandler = { errorHandler: notify.onError({
    title: notifyInfo.title,
    icon: notifyInfo.icon,
    message: 'Error: <%= error.message %>'
  })};

/**
 * @ngdoc method
 * @name scripts:scripts꞉dev
 * @methodOf scripts
 * @description
 *
 * Concatenates scripts together for development environment
 */
gulp.task('scripts:dev', function() {
  return gulp.src('src/app/**/*.js')
    .pipe(plumber(plumberErrorHandler))
    .pipe(replace({
      prefix: 'GULP_REPLACE_',
      patterns: [
        {
          match: 'authTimeout',
          replacement: 3600
        },
        {
          match: 'debugInfoEnabled',
          replacement: true
        }
      ]
    }))
    .pipe(sourcemaps.init())
    .pipe(concat('main.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/assets/js'));
});

/**
 * @ngdoc method
 * @name scripts:scripts꞉prod
 * @methodOf scripts
 * @description
 *
 * Concatenates scripts together for development environment
 */
gulp.task('scripts:prod', function() {
  return gulp.src('src/app/**/*.js')
    .pipe(plumber(plumberErrorHandler))
    .pipe(replace({
      prefix: 'GULP_REPLACE_',
      patterns: [
        {
          match: 'authTimeout',
          replacement: 900
        },
        {
          match: 'debugInfoEnabled',
          replacement: false
        }
      ]
    }))
    .pipe(concat('main.js'))
    .pipe(gulp.dest('build/assets/js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/assets/js'));
});
