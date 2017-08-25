/**
 * @ngdoc object
 * @name live
 * @description
 *
 * Runs live reload server
 */
'use strict';

var gulp = require('gulp'),
  plumber = require('gulp-plumber'),
  livereload = require('gulp-livereload'),
  notify = require('gulp-notify'),
  path = require('path'),
  notifyInfo = {
    title: 'Gulp',
    icon: path.join(__dirname, 'gulp.png')
  };


/**
 * @ngdoc method
 * @name live:live
 * @methodOf live
 * @description
 *
 * Turns on watchers to live reload the dev server
 */
gulp.task('live', function() {
  livereload.listen();

  // watch .scss files
  gulp.watch(['src/sass/**/*.scss', 'src/components/all-digital/**/*.scss'], ['styles:dev']);

  // watch .js files
  gulp.watch('src/app/**/*.js', ['scripts:dev']);

  // watch images files
  gulp.watch('src/images/**/*', ['images:dev']);

  // watch .html files
  gulp.watch('src/app/**/*.html', ['html2js:templates:dev', 'html2js:directives:dev']);

  // reload when a template file, the minified css, or the minified js file changes
  gulp.watch(['src/**/*.html', 'src/assets/css/style.css', 'src/js/assets/main.js'], function(event) {
    gulp.src(event.path)
      .pipe(plumber())
      .pipe(livereload())
      .pipe(notify({
          title: notifyInfo.title,
          icon: notifyInfo.icon,
          message: event.path.replace(__dirname, '').replace(/\\/g, '/') + ' was ' + event.type + ' and reloaded'
        })
      );
  });
});
