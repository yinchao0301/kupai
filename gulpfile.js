var gulp = require("gulp");
/*
var sass = require("gulp-sass");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var rename = require("gulp-rename");
var minifycss = require("gulp-minify-css");
*/

gulp.task("copyfile",function(){
	gulp.src("index.html").pipe(gulp.dest("dist"));
});

gulp.task("copywww",function(){
	gulp.src("index.html").pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\kupai"));
});

//copy所有的文件到服务器目录下
gulp.task("copyAll",function(){
	gulp.src("./**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\kupai"));
});
//copy jpg格式的图片
gulp.task("copyImg",function(){
	gulp.src("img/*.jpg").pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\kupai\\img"));
});

//copy img文件夹下的所有文件
gulp.task("copyImgAll",function(){
	gulp.src("img/**/*").pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\kupai\\img"));
});

//把不同文件夹下的文件拷贝到同一个目录下

gulp.task("copyFromTwo",function(){
	gulp.src(["css/**/*","img/**/*"]).pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\kupai\\img"));
});

//copy时过滤文件
gulp.task("copyNotFile",function(){
	gulp.src(["css/**/*","img/**/*","!img/12.jpg"]).pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\kupai\\img"));
});

//一次性批量执行很多任务（命令）

gulp.task("buildAll",["copywww","copyFromTwo"],function(){
	console.log("所有的命令执行完毕！");
});

//sass编译
gulp.task("sass",function(){
	gulp.src("*.scss").pipe(sass()).pipe(gulp.dest("css"));
	
});

//把两个js文件合并成一个js文件
gulp.task("concatJS",function(){
	gulp.src(["js/index.js","js/goodsList.js"])
	.pipe(concat("all.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\kupai\\js"));
});

//先压缩一个js文件
gulp.task("uglify",function(){
	gulp.src("js/index.js")
	.pipe(uglify())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\kupai\\js"));
})

//合并并压缩
gulp.task("concatAndUglify",function(){
	gulp.src(["js/index.js","js/goodsList.js"])
	.pipe(concat("all.min.js"))
	.pipe(uglify())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\kupai\\js"));
});

//合并，压缩，重命名
gulp.task("concatAndUglifyAndRename",function(){
	gulp.src(["js/index.js","js/goodsList.js"])
	.pipe(concat("all.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\kupai\\js"))
	.pipe(uglify())
	.pipe(rename("all.min.js"))
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\kupai\\js"));
});

//压缩css
gulp.task("minifyCss",function(){
	gulp.src("css/*.css")
	.pipe(minifycss())
	.pipe(gulp.dest("D:\\phpStudy\\WWW\\web1704\\kupai\\css"));	
});

//自动监视
gulp.task("watchAll",function(){
	//gulp.watch("/**/*",["copyAll"]);
	
	gulp.watch(["css/**/*","img/**/*","!img/12.jpg"],["copyNotFile"]);
	gulp.watch(["img/*.jpg"],["copyImg"]);
	gulp.watch(["*.scss"],["sass"]);
	
});
	

