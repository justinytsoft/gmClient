mui.ready(function(){
	
	mui.init();
	
	//头像点击事件
	h("#headImg").tap(function(){
		
	});
	
	//联系人点击事件
	h("#modifyPhone").tap(function(){
		mui.openWindow({
		    url:"phone.html",
		    id:"phone.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
});