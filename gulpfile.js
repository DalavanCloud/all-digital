'use strict';

require('require-dir')('./gulp-tasks');

var gulp = require('gulp');

gulp.task('default', ['webserver', 'live']);

gulp.task('build', ['package']);
