/**
 * @ngdoc object
 * @name images
 * @description
 *
 * A set of commands for processing packaging images
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
 * @name images:images:dev
 * @methodOf images
 * @description
 *
 * Moves images to the assets directory for the development environment
 */
gulp.task('images:dev', function () {
  return gulp.src([
    'src/components/all-digital/assets/images/**',
    'src/images/**'
  ])
    .pipe(plumber(plumberErrorHandler))
    .pipe(gulp.dest('src/assets/images'));
});

/**
 * @ngdoc method
 * @name images:images:prod
 * @methodOf images
 * @description
 *
 * Moves images to the build assets directory for the production environment
 */
gulp.task('images:prod', function () {
  return gulp.src([
    'src/components/all-digital/assets/images/**',
    'src/images/**'
  ])
    .pipe(plumber(plumberErrorHandler))
    .pipe(gulp.dest('build/assets/images'));
});
