//根据id查找页面元素
function $id(id){
	return document.getElementById(id);
}

//获取任意区间值
function rand(min,max){
	return Math.round( Math.random()*(max-min) + min );
}

//随机颜色值获取
function getColor(){
	var str = "0123456789abcdef";
	var color = "#";
	for( var i =1 ; i <= 6 ; i++ ){
		color += str.charAt( rand(0,15) );
	}
	return color;
}
//日期时间格式封装
function dateToString(sign){
	//如果用户不传递任何参数  默认日期间隔符号是  - 
	sign = sign || "-";//如果sign是未定义，就按默认值 "-"
	var d = new Date();
	var y = d.getFullYear();
	var m =toTwo( d.getMonth() + 1 ) ;
	var _date =toTwo( d.getDate() );
	var h =toTwo( d.getHours() );
	var min =toTwo( d.getMinutes() );
	var s =toTwo( d.getSeconds() );
	return y + sign + m + sign + _date + " " + h + ":" + min + ":" + s;
}
//如果得到的是小于10的数 就 拼接0
function toTwo(val){
	return val < 10 ? "0" + val : val;
}

//定义一个时间差函数  
function timeDiff(start,end){
	return Math.abs( start.getTime()-end.getTime() ) / 1000;
}

//创建新的节点
function createEle(tagName){
	return document.createElement(tagName);
}
//函数功能判断num是不是一个素数   
//如果是素数 就返回true 否则返回false
function isPrimerNumber(num){
	for( var i = 2 ; i < num ; i++ ){
		if( num % i == 0 ){ //说明不是素数
			return false;
		}
	}
	return true;//是素数
}
//设置cookie
function setCookie(key,value,day){
	if( day ){
		var d = new Date();
		d.setDate( d.getDate() + day );
		document.cookie = key + "=" + value + ";expires=" + d;
	}else{
		document.cookie = key + "=" + value;
	}
}
//获取cookie
function getCookie(key){
	//判断是否有cookie
	if( document.cookie ){
		var str = document.cookie;
		var arr = str.split("; ");
		for( var i = 0 ; i < arr.length ; i++ ){
			var item = arr[i].split("=");
			if( item[0] == key ){
				return item[1];//返回key对应的value值 是一个字符串
			}
		}
		//循环结束后   没有对应的key   就返回一个""
		return ""; //说明有cookie  但是没有key
	}
	
	//如果没有cookie  返回一个""
	return "";// 说明没有cookie
}

//删除cookie   -1  或  ""
function removeCookie(key){
	//document.cookie = key + "= '';expires=-1" 
	setCookie(key , "" , -1);
}
//碰撞
function pz(obj1,obj2){
		var L1 = obj1.offsetLeft;
		var R1 = obj1.offsetWidth + obj1.offsetLeft;
		var T1 = obj1.offsetTop;
		var B1 = obj1.offsetHeight + obj1.offsetTop;
		
		var L2 = obj2.offsetLeft;
		var R2 = obj2.offsetWidth + obj2.offsetLeft;
		var T2 = obj2.offsetTop;
		var B2 = obj2.offsetHeight + obj2.offsetTop;
		
		//如果碰不上   返回false  碰上了就返回true
		if( R1 < L2 || L1 > R2 || B1 < T2 || T1 > B2){
			return false;
		}else{
			return true; //碰上了
		}
	}