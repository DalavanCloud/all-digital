/**
 * @ngdoc object
 * @name webserver
 * @description
 *
 * Sets up local webserver for development
 */
'use strict';

var gulp = require('gulp'),
    webserver = require('gulp-webserver');


/**
 * @ngdoc method
 * @name webserver:webserver
 * @methodOf webserver
 * @description
 *
 * Launches local webserver with proxies for apis
 */
gulp.task('webserver', ['styles:dev', 'images:dev', 'favicon:dev', 'scripts:dev', 'top:dev', 'components:dev', 'html2js:templates:dev', 'html2js:directives:dev'], function () {
  return gulp
    .src('./src')
    .pipe(webserver({
      port: 5000,
      livereload: false,
      open: 'http://all-digital.local.xfinity.com:5000'
    }));
});
