window.onload=function(){
	var str1="";
	$.ajax({
		type:"get",
		url:"getGoodsList.php",
		async:true,
		success:function(data){
			//data  json类的数组
			console.log(data);
			var str=eval(data);
			//str是 解析data数组的 每一条json元素
			console.log(str);	
			for(var i=0;i<str.length;i++){
			var str1="<li style='list-style:none';><div class='content_twoa'><a href='javascript:'>"
			+"<img src='"+str[i].goodsImg+"'/><span class='spanone'>"+str[i].goodsName+"</span><span class='spantwo'>$"+str[i].goodsPrice+"</span>"
			+"</a></div><div class='box1'></div><div class='box2'></div><div class='box3'></div><div class='box4'></div></li>"
				//str1是每个商品列表的结构
				/*var str1="<dl id='list-row1'>"
					+"<dt><img src='"+str[i].goodsImg+"'/></dt>"
		 			+"<dd><a href='#'>"+str[i].goodsDesc+"</a></dd>"
					 +"<dd><span>￥"+str[i].goodsPrice+"</span></dd>"
		 			+"<dd><a href='#'></a></dd>"
		 			+"<dd></dd><dd><a href='#'></a></dd>"
		 			+"<dd><a href='#'></a></dd></dl>";*/
				   $(".content_twoA").append(str1);
			}
		}
	});
}
							
			
				
					
						
						
						
					
				
			
			
			
			
			
			
			
			
								
							
						