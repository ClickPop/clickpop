const gulp = require('gulp');
const handlebars = require('gulp-compile-handlebars');
const rename = require('gulp-rename');
const sass = require('gulp-sass');
const gulpCopy = require('gulp-copy');

sass.compile = require('node-sass');

// Compile Handlebars pages - need to restart watching if changes are made to partials.
gulp.task('html', () => {
  return gulp.src('./src/pages/*.hbs', './src/partials/**/*.hbs')
    .pipe(handlebars({}, {
      ignorePartials: true,
      batch: ['./src/partials']
    }))
    .pipe(rename({
      extname: '.html'
    }))
    .pipe(gulp.dest('./dist'));
});

// Compile sass to css.
gulp.task('sass', () => {
  return gulp.src('./src/sass/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./dist/css'));
});

// Copy Images
gulp.task('copyImg', (cb) => {
  return gulp.src('./src/img/**/*')
  .pipe(gulpCopy('./dist/img', { prefix: 2 }));
  cb();
});

// Copy JS
gulp.task('copyJs', (cb) => {
  return gulp.src('./src/js/**/*')
  .pipe(gulpCopy('./dist/js', { prefix: 2 }));
  cb();
});

// Watch css and handlebars changes.
gulp.task('watch', () => {
  gulp.watch('./src/sass/**/*.scss', gulp.series('sass'));
  gulp.watch(['./src/pages/*.hbs', './src/partials/**/*.hbs'], gulp.series('html'));
  gulp.watch('./src/img/**/*', gulp.series('copyImg'));
  gulp.watch('./src/js/**/*', gulp.series('copyJs'));
});

// Build site initially
gulp.task('build',  gulp.series(
  'sass',
  'html',
  'copyImg',
  'copyJs'
));

gulp.task('default',  gulp.series(
  'build',
  'watch'
));
