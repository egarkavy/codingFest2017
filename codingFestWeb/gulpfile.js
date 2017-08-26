var gulp = require("gulp");

var sass = require("gulp-sass");

gulp.task('sass', function () {
    return gulp.src('./content/styles/sass/main.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./content/styles/css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./content/styles/sass/**/*.scss', ['sass']);
});