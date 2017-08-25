/**
 * @ngdoc object
 * @name top
 * @description
 *
 * Generating and compiling javascript assets available at the top of the page
 */
'use strict';

var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  path = require('path'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

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
 * @name top:top꞉dev
 * @methodOf top
 * @description
 *
 * packages top assets for dev
 */
gulp.task('top:dev', [], function() {
  return gulp.src([
    'vendor/assets/javascripts/modernizr.js'
  ])
    .pipe(plumber(plumberErrorHandler))
    .pipe(concat('top.js'))
    .pipe(gulp.dest('src/assets/js'));
});

/**
 * @ngdoc method
 * @name top:top꞉prod
 * @methodOf top
 * @description
 *
 * packages top assets for production (uglifies)
 */
gulp.task('top:prod', [], function() {
  return gulp.src([
    'vendor/assets/javascripts/modernizr.js'
  ])
    .pipe(plumber(plumberErrorHandler))
    .pipe(sourcemaps.init())
    .pipe(concat('top.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('build/assets/js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/assets/js'));
});
