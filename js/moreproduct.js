window.onscroll=function(){
	var content_two=document.getElementById("content_two");
	var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
	console.log(scrollTop);
	if(scrollTop>=850){
		content_two.style.position="fixed";
		content_two.style.top="0px";
	}else{
		content_two.style.position="absolute";
		content_two.style.top="850px";
		}
	
}
