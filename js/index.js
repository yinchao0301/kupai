function q$(id){
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
		q$("show").style.display="block";
		q$("shadow").style.display="block";
   }
  	q$("shut").onclick=function(){
  		q$("show").style.display="none";
  		q$("shadow").style.display="none";
	  }
}