module.exports = function () {
	$.gulp.task('styles:build', () => {
		return $.gulp.src('./dev/assets/sass/main.sass')
			.pipe($.gp.sass())
			.pipe($.gp.rename({ suffix: '.min', prefix: '' }))
			.pipe($.gp.autoprefixer({
				browsers: ['last 3 version']
			}))
			.pipe($.gp.csscomb())
			.pipe($.gp.csso())
			.pipe($.gulp.dest('./build/assets/css/'))
	});

	$.gulp.task('styles:dev', () => {
		return $.gulp.src('./dev/assets/sass/main.sass')
			.pipe($.gp.sourcemaps.init())
			.pipe($.gp.sass())
			.pipe($.gp.rename({ suffix: '.min', prefix: '' }))
			.on('error', $.gp.notify.onError(function (error) {
				return {
					title: 'sass',
					message: error.message
				};
			}))
			.pipe($.gp.sourcemaps.write())
			.pipe($.gp.autoprefixer({
				browsers: ['last 3 version']
			}))
			.pipe($.gulp.dest('./build/assets/css/'))
			.pipe($.browserSync.reload({
				stream: true
			}));
	});
};
