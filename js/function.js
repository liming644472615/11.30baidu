// 13.鼠标的滚轮事件
function mouseWheel(obj,up,down){
	if(obj.attachEvent){
		obj.attachEvent("onmousewheel",scrollFn);
		// IE   、opera
	}else if(obj.addEventListener){
		obj.addEventListener("mousewheel",scrollFn,false);
		// chrome,safari    -webkit-
		obj.addEventListener("DOMMouseScroll",scrollFn,false);
		// firefox   -moz-
	}
	function scrollFn(e){
		e=e||window.event;
		var fangxiang = e.wheelDelta||e.detail;
		if(fangxiang==-3 || fangxiang==120){
			if(up){
				up();
			}
		}
		if(fangxiang==3 || fangxiang==-120){
			if(down){
				down();
			}
		}
	}
}
