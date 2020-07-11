// Sass configuration
var gulp = require('gulp');
var sass = require('gulp-sass');
var bourbon = require('bourbon').includePaths;

gulp.task('sass', function(cb) {
  gulp
    .src('*.scss')
    // .pipe(sass())
    .pipe(sass({
      includePaths: [bourbon]
    }))
    .pipe(
      gulp.dest(function(f) {
        return f.base;
      })
    );
  cb();
});

gulp.task(
  'default',
  gulp.series('sass', function(cb) {
    gulp.watch('*.scss', gulp.series('sass'));
    cb();
  })
);
