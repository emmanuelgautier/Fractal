function basic(){
	var config = new Object();
	
	config.x1 = -2.1;
	config.x2 = 0.6;
	config.y1 = -1.2;
	config.y2 = 1.2;
	config.color_max = 50;
	 
	config.size_x = width;
	config.size_y = height;
	
	config.size_fractal = height / (1.5 * (config.y2 - config.y1));
	
	config.color = getColor(config.color_max);
	
	return config;	
}

function store_config(key, config){
	sessionStorage.setItem(key + "_config", JSON.stringify( config ));
}

function getConfig(key){
	return eval('(' + sessionStorage.getItem(key + "_config") + ')');
}

function random(){
	var config = new Object();
	
	return config;
}

function buddhabrot(){
	var config = new Object();
	
	return config;
}

function getColor(color_max){
	var color = new Array();
	var i;
	for(i = 0; i < color_max; i++) {		
		color[i] = "rgb(0,0," + (i + 10 * 255 / color_max) + ")";
	}
	
	return color;
}