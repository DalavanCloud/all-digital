/**
 * @ngdoc object
 * @name styles
 * @description
 *
 * Generated the styles from sass
 */
'use strict';

var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  notify = require('gulp-notify'),
  concat = require('gulp-concat'),
  path = require('path'),
  sourcemaps = require('gulp-sourcemaps'),
  autoprefixer = require('gulp-autoprefixer'),
  sass = require('gulp-sass'),
  minifycss = require('gulp-minify-css'),
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
 * @name styles:styles꞉dev
 * @methodOf styles
 * @description
 *
 * Generates css from sass for dev
 */
gulp.task('styles:dev', function () {
  return gulp.src(['src/sass/**/*.scss'])
    .pipe(plumber(plumberErrorHandler))
    .pipe(sourcemaps.init())
    .pipe(sass()).on('error', sass.logError)
    .pipe(autoprefixer({ browsers: ['last 3 versions', 'IE 9', 'IE 10']}))
    .pipe(concat('style.css'))
    .pipe(sourcemaps.write())
    .pipe(gulp.dest('src/assets/css'));
});

/**
 * @ngdoc method
 * @name styles:styles꞉prod
 * @methodOf styles
 * @description
 *
 * Generates css from sass for prod (minifies)
 */
gulp.task('styles:prod', function () {
  return gulp.src(['src/sass/**/*.scss'])
    .pipe(plumber(plumberErrorHandler))
    .pipe(sass()).on('error', sass.logError)
    .pipe(autoprefixer({ browsers: ['last 3 versions', 'IE 9', 'IE 10']}))
    .pipe(gulp.dest('build/assets/css'))
    .pipe(minifycss())
    .pipe(gulp.dest('build/assets/css'));
});
