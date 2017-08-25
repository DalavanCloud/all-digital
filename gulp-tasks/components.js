/**
 * @ngdoc object
 * @name components
 * @description
 *
 * A set of commands for compiling the bower components for the project
 */
'use strict';

var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  path = require('path'),
  sourcemaps = require('gulp-sourcemaps'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
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
 * @name components:components꞉dev
 * @methodOf components
 * @description
 *
 * Compiles the bower components for local development
 */
gulp.task('components:dev', function() {
  return gulp.src([
    'src/components/angular/*.min.js',
    'src/components/**/*.min.js'
  ])
    .pipe(plumber(plumberErrorHandler))
    .pipe(sourcemaps.init())
    .pipe(concat('components.js'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/assets/js'));
});

/**
 * @ngdoc method
 * @name components:components꞉prod
 * @methodOf components
 * @description
 *
 * Compiles and uglifies the bower components for production
 */
gulp.task('components:prod', function() {
  return gulp.src([
    'src/components/angular/*.min.js',
    'src/components/**/*.min.js'
  ])
    .pipe(plumber(plumberErrorHandler))
    .pipe(concat('components.js'))
    .pipe(gulp.dest('build/assets/js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/assets/js'));
});
