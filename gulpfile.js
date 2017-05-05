var gulp = require('gulp');
var sass = require('gulp-sass');
var jshint = require('gulp-jshint');
var htmlmin = require('gulp-htmlmin');
var uglify = require('gulp-uglify');

gulp.task('styles', function() {
    gulp.src('scss/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./dist/css/'));
});

gulp.task('copyHtml', function() {
  // minify and copy any html files in  to dist/
  gulp.src('*.html')
  .pipe(htmlmin({collapseWhitespace: true}))
  .pipe(gulp.dest('dist'));
});

gulp.task('scripts', function () {
  gulp.src(['./js/*.js'])
  .pipe(jshint())
  .pipe(jshint.reporter('fail'))
  .pipe(uglify())
  .pipe(gulp.dest('./dist/js/'));
});

gulp.task('default', ['styles', 'scripts', 'copyHtml']);
