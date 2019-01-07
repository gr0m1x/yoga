module.exports = function() {
	$.gulp.task('watch', function() {
		// $.gulp.watch('src/pug/**/*.pug', $.gulp.series('pug'))
		// $.gulp.watch('src/static/stylus/**/*.styl', $.gulp.series('stylus'))
		$.gulp.watch('src/**/*.html', $.gulp.series('html'))
		$.gulp.watch('src/static/sass/**/*.scss', $.gulp.series('sass'))
		$.gulp.watch('src/static/js/main.js', $.gulp.series('scripts'))
		$.gulp.watch('src/static/img/*', $.gulp.series('img:dev'))
		
	});
}