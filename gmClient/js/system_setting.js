mui.ready(function() {

	mui.init();

	/**
	 * 关于我们点击事件
	 */
	h("#aboutUs").tap(function(){
		mui.openWindow({
		    url:"about_us.html",
		    id:"about_us.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
	
	/**
	 * 退出登录点击事件
	 */
	h("#logout").tap(function(){
		mui.openWindow({
		    url:"../login.html",
		    id:"login.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
});