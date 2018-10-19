//获取gulp对象
var gulp = require('gulp');
//引入插件
var compass = require('gulp-compass');
var runSequence = require('run-sequence');
var browserSync = require('browser-sync').create();
var del = require('del');
//设置默认任务，同步执行
gulp.task('default', function() {
    return runSequence(['clean'],['build'],['serve','watch']);
});
//及时清理dist目录，dist目录存放编译好的文件
gulp.task('clean', function(callback) {
    return del('./dist/',callback);

});
//编译sass文件
gulp.task('compass', function() {
    return gulp.src('./src/**/*.scss')
        .pipe(compass({
            config_file:'./config.rb',
            css: 'src/css',
            sass: 'src/sass',
            img: 'src/img'
        }))
        .pipe(gulp.dest('./dist/css'));
});
//把src包含的文件复制到dist目录下
gulp.task('staticFiles',function(){
    return gulp.src(['./src/**/*.html','./src/img*/**/*.*'])
        .pipe(gulp.dest('./dist/'));
});
gulp.task('jsFiles',function(){
    return gulp.src(['./src/**/*.html','./src/js*/**/*.*'])
        .pipe(gulp.dest('./dist/'));
});
gulp.task('iconFiles',function(){
    return gulp.src(['./src/**/*.html','./src/font_icon*/**/*.*'])
        .pipe(gulp.dest('./dist/'));
});
//启动浏览器，设置端口
gulp.task('serve',function(){
    browserSync.init({
        server: './dist',
        port: 8888
    });
});

gulp.task('build', function(callback) {
    return runSequence(['compass','staticFiles','jsFiles','iconFiles'],callback);
});

gulp.task('reload',function(){
    return browserSync.reload();
});

gulp.task("watch", function(){
    return gulp.watch([
        './src/**/*.html',
        './src/**/*.scss'
        ],function() {
            return runSequence(['build'],['reload']);
        })
});