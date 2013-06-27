function activate_zoom(){
	var MouseWheelHandler = function(e){
		var e = window.event || e; // vieux ie
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		
		zoom += 50 * delta;

		if(zoom >= 100) displayFractal( key, zoom);		
	};
	
	var TimeMouseWheelHandler = function(e){
		var temp_zoom = zoom;
		window.setTimeout(function(){
			if(temp_zoom === zoom)
				MouseWheelHandler(e);
		}, 500);
	};
	
	if(document.addEventListener)
		document.addEventListener('mousewheel', TimeMouseWheelHandler, false);
	else
		document.addEventListener("DOMMouseScroll", TimeMouseWheelHandler, false);
}