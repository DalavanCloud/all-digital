/**
 * @ngdoc object
 * @name html2js
 * @description
 *
 * Set of commands for precompile the angular partial templates to javascript
 */
'use strict';

var gulp = require('gulp'),
  ngHtml2Js = require('gulp-ng-html2js'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify');

/**
 * @ngdoc method
 * @name html2js:html2js꞉directives꞉dev
 * @methodOf html2js
 * @description
 *
 * Precompiles the directives partials for the development environment
 */
gulp.task('html2js:directives:dev', function () {
  return gulp.src('./src/app/directives/**/*.html')
    .pipe(ngHtml2Js({
      moduleName: 'all_digital',
      prefix: 'app/directives/'
    }))
    .pipe(gulp.dest('src/assets/js/directives'))
    .pipe(concat('directives.js'))
    .pipe(gulp.dest('src/assets/js'));
});

/**
 * @ngdoc method
 * @name html2js:html2js꞉directives꞉prod
 * @methodOf html2js
 * @description
 *
 * Precompiles the directives partials for the production
 */
gulp.task('html2js:directives:prod', function () {
  return gulp.src('./src/app/directives/**/*.html')
    .pipe(ngHtml2Js({
      moduleName: 'all_digital',
      prefix: 'app/directives/'
    }))
    .pipe(gulp.dest('build/assets/js/directives'))
    .pipe(concat('directives.js'))
    .pipe(gulp.dest('build/assets/js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/assets/js'));
});

/**
 * @ngdoc method
 * @name html2js:html2js꞉templates꞉dev
 * @methodOf html2js
 * @description
 *
 * Precompiles the page template partials for the development environment
 */
gulp.task('html2js:templates:dev', function () {
  return gulp.src('./src/app/templates/**/*.html')
    .pipe(ngHtml2Js({
      moduleName: 'all_digital',
      prefix: 'app/templates/'
    }))
    .pipe(gulp.dest('src/assets/js/templates'))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('src/assets/js'));
});

/**
 * @ngdoc method
 * @name html2js:html2js꞉templates꞉prod
 * @methodOf html2js
 * @description
 *
 * Precompiles the page template partials for the production environment
 */
gulp.task('html2js:templates:prod', function () {
  return gulp.src('./src/app/templates/**/*.html')
    .pipe(ngHtml2Js({
      moduleName: 'all_digital',
      prefix: 'app/templates/'
    }))
    .pipe(gulp.dest('build/assets/js/templates'))
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/assets/js'))
    .pipe(uglify())
    .pipe(gulp.dest('build/assets/js'));
});
