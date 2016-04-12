'use strict';

var gulp = require('gulp'),
    sass = require('gulp-sass'),
    eslint = require('gulp-eslint'),
    notify = require('gulp-notify'),
    livereload = require('gulp-livereload'),
    sourcemaps = require('gulp-sourcemaps');

// Sass
gulp.task('styles', function() {
  return gulp.src(['sass/**/*.scss'])
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'expanded'})
      .on('error', notify.onError(function (error) {
        return '\nAn error occurred while compiling sass.\n' + error.message;
        })
      )
    )
    .pipe(notify({
        title: 'SUCCESS!',
        message: 'Styles task complete' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('css'));
});

// Lint Scripts Fails internally
gulp.task('lint', function () {
  return gulp.src('js/script.js')
    .pipe(eslint())
    .pipe(eslint.format())
    .pipe(eslint.results(function(results) {
      var count = results.errorCount;
      if (count > 0) {
          throw new Error('Failed with Errors');
      }
    }))
    .on('error', notify.onError(function (error) {
      return 'An error occurred while compiling JS.';
    }))
    .pipe(eslint.failAfterError());
});

// Scripts lint first and then success only if it doesn't fail
gulp.task('scripts', ['lint'], function () {
  return gulp.src('js/script.js')
    .pipe(notify({
        title: 'SUCCESS!',
        message: 'JS task complete' }));
});


// Watch
gulp.task('watch', function() {

  // Watch .scss files
  gulp.watch('sass/**/*.scss', ['styles']);

  // Watch .js files
  gulp.watch('js/**/*.js', ['scripts']);

  // Create LiveReload server
  livereload.listen();

  // Watch any files in dist/, reload on change
  gulp.watch(['css/**.css', '!css/**.css.map']).on('change', livereload.changed);

});

gulp.task('default', function() {
  gulp.start('watch');
});
