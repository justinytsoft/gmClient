mui.ready(function(){
	
	mui.init();
	
	//推荐提成点击事件
	h("#recommended_commission").tap(function(){
		mui.openWindow({
		    url:"recommended_commission.html",
		    id:"recommended_commission.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
	
	h("#account").tap(function(){
		mui.openWindow({
		    url:"account.html",
		    id:"account.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
	
	h("#setting").tap(function(){
		mui.openWindow({
		    url:"system_setting.html",
		    id:"system_setting.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
});