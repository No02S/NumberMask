'use strict';
const gulp = require('gulp');
const uglify =require('gulp-uglify');
const rename = require('gulp-rename');

gulp.task('js-min',()=>{
    return gulp.src('./MyMask.js')
        .pipe(uglify())
        .pipe(rename({suffix:".min"}))
        .pipe(gulp.dest('./'));
});

gulp.task("default",gulp.parallel('js-min'));