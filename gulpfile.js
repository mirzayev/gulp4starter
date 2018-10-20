global.$ = {
	tasks: require('./gulp/tasks.js'),
	gulp: require('gulp'),
	del: require('del'),
	fs: require('fs'),
	browserSync: require('browser-sync').create(),
	gp: require('gulp-load-plugins')()
};

$.tasks.forEach(function (task) {
	require(task)();
});

$.gulp.task('dev', $.gulp.series(
	'clean',
	$.gulp.parallel('styles:dev', 'pug', 'libsJS:dev', 'js:copy', 'svg', 'img:dev', 'fonts', 'svg:copy')));

$.gulp.task('build', $.gulp.series(
	'clean',
	$.gulp.parallel('styles:build', 'pug', 'libsJS:build', 'js:copy', 'svg', 'img:build', 'fonts', 'svg:copy', 'favicon:copy')));

$.gulp.task('default', $.gulp.series(
	'dev',
	$.gulp.parallel(
		'watch',
		'serve'
	)
));