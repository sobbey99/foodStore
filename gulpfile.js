const gulp        = require('gulp');
const browserSync = require('browser-sync');
const sass = require('gulp-sass')(require('sass'));
const rename = require("gulp-rename");
const autoprefixer = require('gulp-autoprefixer');
const cleanCSS = require('gulp-clean-css');
const imagemin = require('gulp-imagemin');
const htmlmin = require('gulp-htmlmin');



// Static server
gulp.task('server', function() {

    browserSync.init({
        server: {
            baseDir: "dist"
        }
    });


    gulp.watch("src/*.html").on("change", browserSync.reload);
});


//Compilation from SCSS to CSS
gulp.task('styles', function() {
    return gulp.src("src/sass/*.scss")
        .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
        .pipe(rename({
            prefix: "",
            suffix: ".min",
          }))
        .pipe(autoprefixer({
			cascade: false
		}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});


//WATCHING FOR CHANGES INTO FILES AND REFRESHING
gulp.task('watch', function() {
    gulp.watch("src/sass/*.scss", gulp.parallel("styles"));
    gulp.watch("src/sass/*.scss").on("change", browserSync.reload);


    gulp.watch("src/*.html").on("change", gulp.parallel('html'));
    gulp.watch("src/*.html").on("change", browserSync.reload);

    gulp.watch("src/js/**/*.js").on("change", gulp.parallel('scripts'));
    gulp.watch("src/js/**/*.js").on("change", browserSync.reload);

    gulp.watch("src/fonts/**/*.ttf").on("change", gulp.parallel('fonts'));
    gulp.watch("src/fonts/**/*.ttf").on("change", browserSync.reload);


    gulp.watch("src/icons/**/*.+(png|svg)").on("change", gulp.parallel('icons'));
    gulp.watch("src/icons/**/*.+(png|svg)").on("change", browserSync.reload);
    
    gulp.watch("src/img/**/*.+(jpg|jpeg|png)").on("change", gulp.parallel('images'));
    gulp.watch("src/img/**/*.+(jpg|jpeg|png)").on("change", browserSync.reload);

});

gulp.task('html', function() {
    return gulp.src("src/*.html")
    .pipe(htmlmin({ collapseWhitespace: true }))
    .pipe(gulp.dest('dist/'));
    
});

gulp.task('scripts', function() {
    return gulp.src("src/js/**/*.js")
    .pipe(gulp.dest('dist/js'));
    
});

gulp.task('fonts', function() {
    return gulp.src("src/fonts/**/*.ttf")
    .pipe(gulp.dest('dist/fonts'));
    
});

gulp.task('icons', function() {
    return gulp.src("src/icons/**/*.+(png|svg)")
    .pipe(gulp.dest('dist/icons'));
    
});

gulp.task('images', function() {
    return gulp.src("src/img/**/*.+(jpg|jpeg)")
    .pipe(imagemin())
    .pipe(gulp.dest('dist/img'));
    
});




//DEFAULT TASK, put together ALL TASKS into ONE
gulp.task('default', gulp.parallel('watch', 'server', 'styles', 'html', 'scripts', 'fonts', 'icons', 'images'));