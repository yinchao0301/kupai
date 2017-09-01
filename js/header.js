var b =document.getElementById("b");
var w=document.getElementById("wrap");
var box1 =document.getElementById("box1");
var box2 =document.getElementById("box2");
var box3 =document.getElementById("box3");
var box4 =document.getElementById("box4");

 b.onmouseenter = function(){
	w.style.display="block";
	setTimeout(function(){
  	box1.style.right = "800px";
  },100);
 
  	setTimeout(function(){
  	box2.style.right = "650px";
  },200);
   	setTimeout(function(){
  		box3.style.right = "500px";
  },300);
    setTimeout(function(){
  	box4.style.right = "350px";
  },400);

 }
  b.onmouseleave = function(){
 	w.style.display="none";
	setTimeout(function(){
  	box4.style.right = "-120px";
  },100);
 
  setTimeout(function(){
  	box3.style.right = "-120px";
  },200);
   setTimeout(function(){
  	box2.style.right = "-120px";
  },300);
    setTimeout(function(){
  	box1.style.right = "-120px";
  },400);
 }
w.onmouseenter=function(){
	w.style.display="block";
}
w.onmouseleave=function(){
	w.style.display="none";
}
//cart		  
var shop=document.getElementById("shoping");
var cart=document.getElementById("cart");
shop.onmouseenter=function(){
	cart.style.display="block";
}
shop.onmouseleave=function(){
	cart.style.display="none";
}
cart.onmouseenter=function(){
	cart.style.display="block";
}
cart.onmouseleave=function(){
	cart.style.display="none";
}
//goOn
var login=document.getElementById("login");
var goOn=document.getElementById("goOn");
login.onmouseenter=function(){
	goOn.style.display="block";
}
login.onmouseleave=function(){
	goOn.style.display="none";
}
goOn.onmouseenter=function(){
	goOn.style.display="block";
}
goOn.onmouseleave=function(){
	goOn.style.display="none";
}
//serch
var serch=document.getElementById("serch");
var header_one=document.getElementById("header_one");
var serchA=document.getElementById("serchA");
var sechBtn=document.getElementById("sechBtn");
serch.onclick=function(){
	header_one.style.display="none";
	serchA.style.display="block";
}
sechBtn.onclick=function(){
	header_one.style.display="block";
	serchA.style.display="none";
}
