function $(id){
	return document.getElementById(id);
}
//轮播图
var mySwiper = new Swiper ('.swiper-container', {
	loop: true,//是否可以循环拖动
	autoplay:2000,//是否自动播放
	pagination: '.swiper-pagination',
  })   
  	var btns=document.getElementsByClassName("btn");
//	console.log(btns.length);
//视频播放
for(var i=0;i<btns.length;i++){
	btns[i].onclick=function(){
		$("show").style.display="block";
		$("shadow").style.display="block";
   }
  	$("shut").onclick=function(){
  		$("show").style.display="none";
  		$("shadow").style.display="none";
	  }
}