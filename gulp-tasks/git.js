/**
 * @ngdoc object
 * @name git
 * @description
 *
 * Set up or run git hooks
 */
'use strict';

var gulp = require('gulp');

// Precommit task to run to verify commit will pass Gerrit's verify
gulp.task('git:precommit', ['verify'], function () {
  console.log('\n\t-----------' +
      '\n\tYou\'re ready to commit' +
      '\n\t-----------');
  process.exit(0);
});

gulp.task('git:hooks:install', function () {
  return gulp.src('./tasks/hooks/**/*')
    .pipe(gulp.dest('./.git/hooks'));
});
