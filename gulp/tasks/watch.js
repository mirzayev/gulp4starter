module.exports = function () {
	$.gulp.task('watch', function () {
		$.gulp.watch('./dev/pug/**/*.pug', $.gulp.series('pug'));
		$.gulp.watch('./dev/assets/sass/**/*.sass', $.gulp.series('styles:dev'));
		$.gulp.watch('./dev/assets/img/svg/*.svg', $.gulp.series('svg'));
		$.gulp.watch('./dev/assets/js/**/*.js', $.gulp.series('libsJS:dev', 'js:copy'));
		$.gulp.watch(['./dev/assets/img/general/**/*.{png,jpg,gif}',
			'./dev/assets/img/content/**/*.{png,jpg,gif}'], $.gulp.series('img:dev'));
	});
};