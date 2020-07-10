const gulp = require("gulp");
const ts = require("gulp-typescript");
const tsProject = ts.createProject("tsconfig.json");
// const uglify = require('gulp-uglify');
// const sourcemaps = require('gulp-sourcemaps');
// const buffer = require('vinyl-buffer');

gulp.task("default", function () {
    return tsProject.src()
        .pipe(ts(tsProject))
        .js.pipe(gulp.dest("dist"));
    // .pipe(source('bundle.js'))
    // .pipe(buffer())
    // .pipe(sourcemaps.init({ loadMaps: true }))
    // .pipe(uglify())
    // .pipe(sourcemaps.write('./'))
    // .pipe(gulp.dest("dist"));
});