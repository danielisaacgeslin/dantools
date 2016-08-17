'use strict';
var gulp = require('gulp');
var sass = require('gulp-sass');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var cleanCSS = require('gulp-clean-css');
var uglify = require('gulp-uglify');
var htmlmin = require('gulp-htmlmin');
var imagemin = require('gulp-imagemin');
var connect = require('gulp-connect');
var runSequence = require('run-sequence');

gulp.task('default', ['connect','watch']);

gulp.task('connect', function() {
  connect.server({
  	root: 'public',
    port: 404,
    livereload: true
  });
});

gulp.task('dev', ['connect','watch-dev']);

gulp.task('images', function(){
	return gulp.src('./images/**/*')
		.pipe(imagemin())
		.pipe(gulp.dest('./public/images'));
});

gulp.task('browserify', function() {
	return browserify('./app/app.js')
	.bundle().pipe(source('app.js'))
	.pipe(gulp.dest('temp/js/'));
});

gulp.task('build-main', function() {
	return browserify('./main.js')
	.bundle().pipe(source('main.js'))
	.pipe(gulp.dest('temp/'));
});

gulp.task('minify-main', function() {
  return gulp.src('temp/main.js')
    .pipe(uglify({mangle:false}))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('sass', function() {
	return gulp.src('./sass/style.scss')
			.pipe(sass().on('error', sass.logError)).pipe(gulp.dest('temp/css'));
});

gulp.task('minify-css', function() {
  return gulp.src('temp/css/*.css')
    .pipe(cleanCSS({compatibility: 'ie8'}))
    .pipe(gulp.dest('./public/css/'));
});

gulp.task('minify-js', function() {
  return gulp.src('temp/js/app.js')
    .pipe(uglify({mangle:false}))
    .pipe(gulp.dest('public/js/'));
});

gulp.task('libs', function() {
  return gulp.src('libs/*.*')
    .pipe(gulp.dest('public/libs/'));
});

gulp.task('minify-html', function() {
  return gulp.src('./markup/**/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
    .pipe(gulp.dest('./public/'))
});

gulp.task('brows-dev', function(){
	return browserify('./app/app.js')
	.bundle().pipe(source('main.js'))
	.pipe(gulp.dest('./public/js/'));
});

gulp.task('build', function(){
  runSequence('build-main','minify-main', 'libs', 'browserify', 'minify-js', 'minify-html', 'images', function(){
    console.log('build done');
  });
});

gulp.task('watch', function() {
	gulp.watch('libs/**/*.*', ['libs']);
	gulp.watch('app/**/*.js', ['browserify']);
	gulp.watch('temp/js/*.js', ['minify-js']);
	gulp.watch('./sass/*.scss', [ 'sass' ]);
	gulp.watch('temp/**/*.css', [ 'minify-css' ]);
	gulp.watch('markup/**/*.html', ['minify-html']);
	gulp.watch('images/**/*', ['images']);
});

gulp.task('watch-dev', function(){
	gulp.watch('libs/**/*.*', ['libs']);
	gulp.watch('app/**/*.js', ['brows-dev']);
	gulp.watch('./sass/*.scss', [ 'sass' ]);
	gulp.watch('temp/**/*.css', [ 'minify-css' ]);
	gulp.watch('markup/**/*.html', ['minify-html']);
	gulp.watch('images/**/*', ['images']);
});
