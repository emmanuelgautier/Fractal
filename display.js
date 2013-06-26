function displayFractal(key, zoom){
		
	var config = getConfig( key );
	
	var size_x = config.size_x;
	var size_y = config.size_y;
	
	var x, y;
	var i_x, i_y, x_0, y_0;
	
	var ratio = 100 / zoom;
	
	i_x = size_x * ratio;
	i_y = size_y * ratio;
	
	x_0 = Math.round((size_x - i_x) / 2);
	y_0 = Math.round((size_y - i_y) / 2);
	
	var size_pixel = zoom / 100;
	
	for(x = 0; x < i_x; x++){
		for(y = 0; y < i_y; y++){			
			ctx.fillStyle = fractal_data[x + x_0][y + y_0];
			ctx.fillRect(x * size_pixel, y * size_pixel, size_pixel, size_pixel);			
		}
	}
}

function displayTime(time){
	ctx.fillStyle = white;
    ctx.font = "18pt Helvetica";
	ctx.fillText(time + "ms", width / 5, 25);
}
