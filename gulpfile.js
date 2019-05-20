const gulp = require('gulp');
const sass = require('gulp-sass');
const minifycss = require('gulp-clean-css');
const server = require('webpack-dev-server');

gulp.task('compileStyles', function() {
	gulp.src('src/scss/style.scss')
		.pipe(sass({
			noCache: true,
			precision: 4,
			unixNewlines: true
		}))
		.pipe(minifycss())
		.pipe(gulp.dest('public'));
});

gulp.task('watch', function(){
	server.listen(3000, function(err){
		if(err) { return console.log(err); }
		gulp.watch('src/scss/*.{sass,scss}', ['compileStyles']);
	});
});