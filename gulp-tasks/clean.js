/**
 * @ngdoc object
 * @name clean
 * @description
 *
 * A command for removing the build artifacts
 */
'use strict';

var gulp = require('gulp'),
  del = require('del');

/**
 * @ngdoc method
 * @name clean:clean
 * @methodOf clean
 * @description
 *
 * A task that deletes the build and dist directory
 */
gulp.task('clean', ['clean:build', 'clean:dist']);

 /**
  * @ngdoc method
  * @name clean:clean
  * @methodOf clean
  * @description
  *
  * A syncronous task that deletes the build directory
  */
gulp.task('clean:build', function () {
  return del.sync(['build/**']);
});

/**
 * @ngdoc method
 * @name clean:clean
 * @methodOf clean
 * @description
 *
 * A syncronous task that deletes the dist directory
 */
gulp.task('clean:dist', function () {
  return del.sync(['dist/**']);
});
