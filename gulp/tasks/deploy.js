const ghPages = require('gh-pages');

module.exports = function () {
	$.gulp.task('deploy', () => {
		return ghPages.publish('./build', function(err) {});
	});
}