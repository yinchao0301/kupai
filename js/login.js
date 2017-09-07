var pass=document.getElementById("pass");
var phone=document.getElementById("phone");
var pass_one=document.getElementById("pass_one");
var phone_one=document.getElementById("phone_one");
var content_two=document.getElementById("content_two");
var shadow=document.getElementById("shadow");
pass_one.style.display="none";
pass.onclick=function(){
	shadow.style.display="block";
	pass_one.style.display="block";
	content_two.style.display="none";
	phone_one.style.display="none";
	pass.style.color="#55A0FF";
	phone.style.color="#ccccd6";
	
	
}
phone.onclick=function(){
	shadow.style.display="none";
	content_two.style.display="block";
	phone_one.style.display="block";
	pass_one.style.display="none";
	pass.style.color= "#ccccd6";  
	phone.style.color= "#55A0FF";
}
function q$(id){
	return document.getElementById(id);
}
//验证邮箱号、手机号
//q$("mail").onblur = function(){
//	//console.log(q$("mail").value)
//	let str = q$("mail").value;
//	let reg = /^\w+@\w(\.\w+)+q$/;
//	let reg1 = /^1\d{10}q$/;
//	//验证邮箱号、手机号的正则
//	if((reg.test(str)) || (reg1.test(str))){
//		//验证用户名是否存在
//		jQuery.ajax({
//			url:"checkUser.php",
//			async:true,
//			data:"username="+q$("mail").value,
//			type:"post",
//			success:function(data){
//				//console.log(data+q$("mail").value)
//				if(data=="1"){
//					jQuery("#mail1").html("该用户已经被注册了");
//					    
//				}else{
//					jQuery("#mail1").html("该用户没有人使用");
//					//location.href="denglu.html";
//				}
//			}		
//		});	}else{
//			q$("mail1").innerHTML = "您好，请检查您的邮箱号或手机号格式是否正确";
//			return;
//	}
//};
////验证密码
//q$("passId").onblur = function(){
//	let str = q$("passId").value;
//	let reg = /^[0-9a-zA-Z_]\w{5,11}q$/;
//	if(reg.test(str)){
//		
//	}else{
//		q$("pass1").innerHTML = "您好，请检查您的密码设置是否符合要求";
//		return;
//	}
//};
q$("imgNum").onclick = function(){//字母、数字组合验证码
	code(q$("imgNum"));
};

function code(obj){
	
	let num;
	let str1="";
	while(true){
		num = parseInt(Math.random()*123);
		if(num>=65 && num<=90){
			str1 += String.fromCharCode(num);
		}
		if(num>=97 && num<=122){
			str1 += String.fromCharCode(num);
		}
		if(num>=0 && num<=9){
			str1 += num.toString();
		}
		if(str1.length>=4){
			break;
		}
	}
	//随机颜色
	var num1=parseInt(Math.random()*255);
	var num2=parseInt(Math.random()*255);
	var num3=parseInt(Math.random()*255);
	//console.log(num1+":"+num2+":"+num3)
	obj.innerHTML=str1;
	obj.style.color="rgb("+num1+","+num2+","+num3+")";
	
}
q$("yan").onblur = function(){
	var str2 = q$("imgNum").innerHTML;
	str2 = str2.toLowerCase();
	var str3 = q$("yan").value;
	str3 = str3.toLowerCase();
	if(str3!=str2){
		q$("yan1").innerHTML = "请输入正确的验证码";
		return;
	}
};
window.onload = function(){
	code(q$("imgNum"));
	code(q$("yzml"));
	

}

////验证邮箱号、手机号
//q$("userPhone").onblur = function(){
//	//console.log(q$("mail").value)
//	let str = q$("userPhone").value;
//	let reg = /^\w+@\w(\.\w+)+q$/;
//	let reg1 = /^1\d{10}q$/;
//	//验证邮箱号、手机号的正则
//	if((reg.test(str)) || (reg1.test(str))){
//		//验证用户名是否存在
//		jQuery.ajax({
//			url:"checkUser.php",
//			async:true,
//			data:"username="+q$("userPhone").value,
//			type:"post",
//			success:function(data){
//				//console.log(data+q$("mail").value)
//				if(data=="1"){
//					jQuery("#mail1").html("该用户已经被注册了");
//					    
//				}else{
//					jQuery("#mail1").html("该用户没有人使用");
//					//location.href="denglu.html";
//				}
//			}		
//		});	}else{
//			q$("userPhone1").innerHTML = "您好，请检查您的邮箱号或手机号格式是否正确";
//			return;
//	}
//};

q$("yzml").onclick = function(){//字母、数字组合验证码
	code(q$("yzml"));
};
q$("yzm").onblur = function(){
	var str2 = q$("yzml").innerHTML;
	str2 = str2.toLowerCase();
	var str3 = q$("yzm").value;
	str3 = str3.toLowerCase();
	if(str3!=str2){
		q$("yzm2").innerHTML = "请输入正确的验证码";
		return;
  }
};
