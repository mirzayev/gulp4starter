module.exports = function () {
	$.gulp.task('img:dev', () => {
		return $.gulp.src('./dev/assets/img/**/*.{png,jpg,gif,ico}')
			.pipe($.gulp.dest('./build/assets/img/'));
	});

	$.gulp.task('img:build', () => {
		return $.gulp.src('./dev/assets/img/**/*.{png,jpg,gif}')
			.pipe($.gp.tinypng('YOUR-API-KEY'))
			.pipe($.gulp.dest('./build/assets/img/'));
	});


	$.gulp.task('svg:copy', () => {
		return $.gulp.src('./dev/assets/img/svg/*.svg')
			.pipe($.gulp.dest('./build/assets/img/svg/'));
	});


	$.gulp.task('favicon:copy', () => {
		return $.gulp.src('./dev/assets/img/favicon/*.ico')
			.pipe($.gulp.dest('./build/assets/img/favicon/'));
	});
};
