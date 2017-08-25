/**
 * @ngdoc object
 * @name build
 * @description
 *
 * A set of commands that build the frontend application.
 */
'use strict';

var gulp = require('gulp'),
  rev = require('gulp-rev'),
  collect = require('gulp-rev-collector'),
  tar = require('gulp-tar'),
  gzip = require('gulp-gzip');

// Variables for the build process
var productionAssets = 'src/assets',
  production = 'build',
  config = {
    src: {
      assets: [
        production + '/assets/**/*.css',
        production + '/assets/**/*.js',
        production + '/assets/**/*.{svg,png,gif,jpg,jpeg}'
      ]
    },
    dest: {
      assets: production + '/assets',
      manifest: {
        name: 'manifest.json',
        path: production
      }
    },
    collect: {
      src: [
        production + '/manifest.json',
        production + '/**/*.{html,json,css,js}'
      ],
      dest: production
    }
  };

/**
 * @ngdoc method
 * @name build:build꞉mv
 * @methodOf build
 * @description
 *
 * Moves the `index.html` to the `build/` directory
 *
 * Invoked with `gulp build:mv`
 */
gulp.task('build:mv', ['clean'], function () {
  return gulp.src('src/index.html').
  pipe(gulp.dest('build/'));
});


/**
 * @ngdoc method
 * @name build:revision
 * @methodOf build
 * @description
 *
 * Generate revisioned files and manifiest
 *
 * Invoked with `gulp revision`
 */
gulp.task('revision', ['build:mv', 'styles:prod', 'images:prod', 'favicon:prod', 'scripts:prod', 'components:prod', 'top:prod', 'html2js:templates:prod', 'html2js:directives:prod'], function () {
  return gulp.src(config.src.assets)
    .pipe(gulp.dest(config.dest.assets))
    .pipe(rev())
    .pipe(gulp.dest(config.dest.assets))
    .pipe(rev.manifest({ path: config.dest.manifest.name }))
    .pipe(gulp.dest(config.dest.manifest.path));
});

/**
 * @ngdoc method
 * @name build:rev꞉collect
 * @methodOf build
 * @description
 *
 * Collects revisioned and applies manifiest to index
 */
gulp.task('rev:collect', ['revision'], function () {
  return gulp.src(config.collect.src)
    .pipe(collect())
    .pipe(gulp.dest(config.collect.dest));
});

/**
 * @ngdoc method
 * @name build:package꞉cim
 * @methodOf build
 * @description
 *
 * Packages files for CIM Deploy
 */
gulp.task('package:cim', ['rev:collect'], function () {
  return gulp.src(['build/**/*'])
    .pipe(tar('build.tar'))
    .pipe(gzip())
    .pipe(gulp.dest('build'));
});

/**
 * @ngdoc method
 * @name build:package
 * @methodOf build
 * @description
 *
 * Packages for both cloud and cim
 */
gulp.task('package', ['package:cim']);
