module.exports = function() {
	$.gulp.task('serve', function() {
		$.browserSync.init({
			server: {
				baseDir: './build'
			},
			notify: false
		});
	});
};
