const gulp = require('gulp');
const jade = require('gulp-jade');
const browserify = require('gulp-browserify');
const notify = require('gulp-notify');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const gulpif = require('gulp-if');

const env = process.env.NODE_ENV || 'development';

console.log('env',env);
gulp.task('jade', () => {
  return gulp.src('src/templates/*.jade')
    .pipe(jade())
      .pipe(gulp.dest('build/html'));
});

gulp.task('js', () => {
  return gulp.src('src/js/main.js')
    .pipe(concat('main.min.js'))
    .pipe(gulpif(env === 'production', uglify()))
    .pipe(notify({message:'The js was minified'}))
    .pipe(browserify({debug: env === 'development'}))
    .pipe(gulp.dest('build/js'));
});

gulp.task('default', ['jade','js'])
