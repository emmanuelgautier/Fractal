function activate_zoom(){
	var MouseWheelHandler = function(e){
		var e = window.event || e; // vieux ie
		var delta = Math.max(-1, Math.min(1, (e.wheelDelta || -e.detail)));
		
		zoom += 50 * delta;

		if(zoom >= 100) displayFractal( key, zoom);		
	};
	
	if(document.addEventListener)
		document.addEventListener('mousewheel', MouseWheelHandler, false);
	
	//firefox
	document.addEventListener("DOMMouseScroll", MouseWheelHandler, false);
}