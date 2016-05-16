const gulp = require('gulp');
const jade = require('gulp-jade');
const browserify = require('gulp-browserify');

gulp.task('jade', () => {
  return gulp.src('src/templates/*.jade')
    .pipe(jade())
      .pipe(gulp.dest('build/html'));
});

gulp.task('js', () => {
  return gulp.src('src/js/main.js')
    .pipe(browserify({debug: true}))
      .pipe(gulp.dest('build/js'));
});

gulp.task('default', ['jade','js'])
