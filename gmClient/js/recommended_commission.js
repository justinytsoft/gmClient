mui.ready(function(){
	
	mui.init();
	
	//推荐提成点击事件
	h("#recommended_frend").tap(function(){
		mui.openWindow({
		    url:"recommended_frend.html",
		    id:"recommended_frend.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
});