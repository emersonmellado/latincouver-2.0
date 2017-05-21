var gulp = require('gulp'),
gp_concat = require('gulp-concat'),
gp_rename = require('gulp-rename'),
gp_uglify = require('gulp-uglify');

gulp.task('js', function(){
	return gulp.src(['src/app/**/*.js'])
	.pipe(gp_concat('concat.js'))
	.pipe(gulp.dest('dist'))
	.pipe(gp_rename('uglify.js'))
	.pipe(gp_uglify())
	.pipe(gulp.dest('dist'));
});

gulp.task('default', ['js'], function(){});