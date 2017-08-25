/**
 * @ngdoc object
 * @name favicon
 * @description
 *
 * A set of commands for processing packaging favicons
 */
'use strict';

var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  path = require('path');

var notifyInfo = {
  title: 'Gulp',
  icon: path.join(__dirname, 'gulp.png')
};

//error notification settings for plumber
var plumberErrorHandler = { errorHandler: notify.onError({
  title: notifyInfo.title,
  icon: notifyInfo.icon,
  message: 'Error: <%= error.message %>'
})};

/**
 * @ngdoc method
 * @name favicon:favicon:dev
 * @methodOf favicon
 * @description
 *
 * Moves favicons to the build directory for the development environment
 */
gulp.task('favicon:dev', function () {
  return gulp.src(['src/favicon/**'])
    .pipe(plumber(plumberErrorHandler))
    .pipe(gulp.dest('src/'));
});

/**
 * @ngdoc method
 * @name favicon:favicon:prod
 * @methodOf favicon
 * @description
 *
 * Moves favicons to the build directory for the production environment
 */
gulp.task('favicon:prod', function () {
  return gulp.src(['src/favicon/**'])
    .pipe(plumber(plumberErrorHandler))
    .pipe(gulp.dest('build/'));
});
