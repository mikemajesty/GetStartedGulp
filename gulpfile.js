const gulp = require('gulp');
const jade = require('gulp-jade');
const minify = require('gulp-minify');

gulp.task('jade', () => {
  return gulp.src('src/templates/**/*.jade')
    .pipe(jade()).
        pipe(gulp.dest('build/html'));
});

gulp.task('default', ['jade'])
