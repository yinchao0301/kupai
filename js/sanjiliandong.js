var pro = document.getElementsByTagName("select")[0];
var city = document.getElementsByTagName("select")[1];
var _area = document.getElementsByTagName("select")[2];
var xhr = new XMLHttpRequest();
var url = "city1.json";
xhr.open("GET", url);
xhr.send();
xhr.onreadystatechange = function() {
	if(xhr.readyState == 4 && xhr.status == 200) {
		//console.log(readyState);
		var data = JSON.parse(xhr.responseText);
		console.log(data);
		//省份的加载
		for(var i = 0; i < data.length; i++) {
			var oOption = document.createElement("option");
			oOption.value = i;
			oOption.innerHTML = data[i].name+"省";
			pro.appendChild(oOption);
		}
		//城市的加载
		pro.onchange = function() {
			city.innerHTML = "<option>请选择城市</option>";
			_area.innerHTML = "<option>请选择区县</option>";
			var x = pro.value;
			for(var i = 0; i < data[x].city.length; i++) {
				var oOption = document.createElement("option");
				oOption.value = i;
				oOption.innerHTML = data[x].city[i].name+"市";
				city.appendChild(oOption);
			}
			//区县的加载
			city.onchange = function() {
				_area.innerHTML = "<option>请选择区县</option>";
				var x = pro.value,
					y = city.value;
				for(var i = 0; i < data[x].city[y].area.length; i++) {
					var oOption = document.createElement("option");
					oOption.value = i;
					oOption.innerHTML = data[x].city[y].area[i];
					_area.appendChild(oOption);
				}
			}
		}
	}
}