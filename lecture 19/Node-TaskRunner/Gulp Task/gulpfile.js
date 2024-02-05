import gulp from "gulp";
import imagemin from "gulp-imagemin";

gulp.task("default", () => {
  // Define your task
  return gulp.src("src/img/*").pipe(imagemin()).pipe(gulp.dest("dest/img"));
});
