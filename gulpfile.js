var gulp = require('gulp');
var connect = require('gulp-connect');
var clean = require('gulp-clean');
var concat = require('gulp-concat');

var path = {
  src: ['./src/container.js', './src/generators/*.js'],
  dest: './build'
};

gulp.task('clean', function () {
  return gulp.src(path.dest + '**/*', {read: false})
             .pipe(clean());
});

gulp.task('build', function() {
  return gulp.src(path.src)
             .pipe(concat('generators.js'))
             .pipe(gulp.dest(path.dest));
});

gulp.task('watch', function() {
  return gulp.watch(path.src, ['build']);
});

gulp.task('serve', function() {
  return connect.server({
    root: [__dirname],
    port: 8888
  })
});