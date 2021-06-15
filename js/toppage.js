var gulp = require('gulp');
var postcss = require('gulp-postcss');
 
gulp.task('sass', function(){
    gulp.src('./src/scss/**/*.scss')
    .pipe(postcss(
        require('autoprefixer')({
            grid: false
        })
    ))
})

