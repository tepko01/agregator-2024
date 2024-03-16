const plumber = require('gulp-plumber'), // модуль для отслеживания ошибок
			scss = require('gulp-sass')(require('sass')),
			autoprefixer = require('gulp-autoprefixer'),
			csso = require('gulp-csso'), // модуль для минимизации CSS
			csscomb = require('gulp-csscomb'), // format css
			sourcemaps = require('gulp-sourcemaps'),
			rename = require('gulp-rename'),
			cssImport = require("gulp-cssimport"),
			stylesPATH = {
				"input": "./src/static/styles/",
				"output": "./build/css/"
			};

module.exports = function () {
	$.gulp.task('styles:dev', () => {
		return $.gulp.src(stylesPATH.input + 'styles.scss')
			.pipe(plumber())
			.pipe(sourcemaps.init())
			.pipe(scss())
			.pipe(autoprefixer({
				overrideBrowserslist:  ['last 3 versions']
			}))
			.pipe(sourcemaps.write())
			.pipe(cssImport())
			.pipe(rename('styles.min.css'))
			.pipe($.gulp.dest(stylesPATH.output))
			.on('end', $.browserSync.reload);
	});
	$.gulp.task('styles:build', () => {
		return $.gulp.src(stylesPATH.input + 'styles.scss')
			.pipe(scss())
			.pipe(cssImport())
			.pipe(autoprefixer())
			.pipe(csscomb())
			.pipe(rename('styles.min.css'))
			.pipe($.gulp.dest(stylesPATH.output));
	});
	$.gulp.task('styles:build-min', () => {
		return $.gulp.src(stylesPATH.input + 'styles.scss')
			.pipe(scss())
			.pipe(cssImport())
			.pipe(autoprefixer())
			.pipe(csso())
			.pipe(rename('styles.min.css'))
			.pipe($.gulp.dest(stylesPATH.output));
	});
};
