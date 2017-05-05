var gulp = require('gulp');  
var fileinclude  = require('gulp-file-include');  

gulp.task('fileinclude', function() {  
// 
	gulp.src('./tpl/*.html')//需要处理的文件路径
        .pipe(fileinclude({  //执行的方法  prefix前缀 basepath是传入参数
          prefix: '@@',  
          basepath: '@file'  
        }))  
    .pipe(gulp.dest('./'));  //生成的目录 ./代表根目录
});  

gulp.task('default', ['fileinclude']); 