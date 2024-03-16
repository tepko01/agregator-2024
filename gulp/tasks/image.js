const imagemin = require('gulp-imagemin'),
	cache = require('gulp-cache'),
	imgCompress  = require('imagemin-jpeg-recompress'),
	imgPATH = {
		"input": ["./src/static/images/**/*.{png,jpg,gif,svg}", '!./src/static/images/svg/*'],
		"output": "./build/images/"
	};

module.exports = function () {
	$.gulp.task('img:dev', () => {
		return $.gulp.src(imgPATH.input)
			.pipe($.gulp.dest(imgPATH.output));
	});

	$.gulp.task('img:build', () => {
		return $.gulp.src(imgPATH.input)
			.pipe(cache(imagemin([
				imagemin.gifsicle({interlaced: true}),
				imgCompress({
					loops: 4,
					progressive: true,
					min: 80,
					max: 90,
				}),
				imagemin.optipng(),
				imagemin.svgo()
			])))
			.pipe($.gulp.dest(imgPATH.output));
	});
};

