mui.plusReady(function(){
	var cView = h.currentView();
	//h("#name").html(cView.name);
});

mui.ready(function(){
	mui.init();
	
	h("#shop").tap(function(){
		mui.openWindow({
		    url:"mer_detail.html",
		    id:"mer_detail.html",
		    styles:{
		      top:0,//新页面顶部位置
		      bottom:0//新页面底部位置
		    }
		});
	});
});