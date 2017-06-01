var gulp=require('gulp');
var uglify=require('gulp-uglify');
var clean=require('gulp-clean-css');
var minify=require('gulp-minify-css');
gulp.task('myjss',function(){
	gulp.src('Bootstrap/js/*.js').pipe(uglify()).pipe(gulp.dest('xiangmu/myjs'));
})

gulp.task('mycs',function(){
	gulp.src('Bootstrap/css/*.css').pipe(minify()).pipe(gulp.dest('xiangmu/mycss'));
})

gulp.task('default',['myjss','mycs'],function(){
	console.log('执行完毕');
})
