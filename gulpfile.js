// var gulp = require('gulp');
// var sass = require('gulp-sass');
//
// gulp.task('sass',function (done) {
//     gulp.src('./scss/**/*.scss')
//         .pipe(sass().on('error',sass.logError))
//         .pipe(gulp.dest('./css'));
//     done();
// })
//
// gulp.task('sass:watch',function () {
//     gulp.watch('./scss/**/*.scss', gulp.series('sass'));
// })

const autoprefixer = require('gulp-autoprefixer');

const cleanCSS     = require('gulp-clean-css');

const rename       = require("gulp-rename");

const terser       = require('gulp-terser');

const gulp = require('gulp');

const browserSync = require('browser-sync').create();

const sass = require('gulp-sass');

gulp.task('sass', function(done) {
    gulp.src('./scss/**/*.scss')
        .pipe(sass().on('error',sass.logError))
        .pipe(gulp.dest('./css'))

        .pipe(rename({suffix: ".min"}))

        .pipe(cleanCSS())

        .pipe(gulp.dest("./css"))
        .pipe(browserSync.stream());
    done();
});

gulp.task('serve', function(done) {
    browserSync.init({
        server: "./"
    });
    gulp.watch("./scss/*.scss", gulp.series('sass'));
    gulp.watch("./*.html").on('change', () => {
        browserSync.reload();
        done();
    });
    done();
});


gulp.task('minjs', function() {

    return gulp.src("./js/main.js")

        .pipe(rename({suffix: ".min"}))

        .pipe(terser())

        .pipe(gulp.dest("./js"));

});

gulp.task('mincss', function() {

    return gulp.src("./css/styles.css")

        .pipe(rename({suffix: ".min"}))

        .pipe(cleanCSS())

        .pipe(gulp.dest("./css"));


});

gulp.task('autopref', function() {

    return gulp.src('./css/*.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest("./css"));

});

gulp.task('prod', gulp.series('minjs', 'autopref','mincss'));

gulp.task('default', gulp.series('sass', 'serve'));
