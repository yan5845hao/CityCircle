/**
 * Created by yanhao on 15/3/12.
 */
var gulp = require('gulp');
var connect = require('gulp-connect');

gulp.task('watch', function(){
   gulp.watch(['./www/*.html'], ['html']);
});

gulp.task('connect', function(){
   connect.server({
       port: 3000,
       root:'www',
       livereload: true
   });
});

gulp.task('html', function(){
   gulp.src('./www/*.html').pipe(connect.reload())
});

gulp.task('default', ['connect', 'watch']);