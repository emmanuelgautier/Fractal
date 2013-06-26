function fractal(key){
	var config = getConfig( key );

	var x1 = config.x1;
	var y1 = config.y1;
	var zoom = 100;
	var color = config.color;
	var color_max = config.color_max;
	var size_x = config.size_x;
	var size_y = config.size_y;
	var size_fractal = config.size_fractal;
	
	var c_r, c_i, z_r, z_i, i, tmp;
	
	var x, y;
	for(x = 0; x < size_x; x++){
		fractal_data[x] = Array();
		
	    for(y = 0; y < size_y; y++){
	        c_r = x / (zoom + size_fractal) + x1;
	        c_i = y / (zoom + size_fractal) + y1;
	        z_r = 0;
	        z_i = 0;
	        i   = 0;

	        do{
	            tmp = z_r;
	            z_r = z_r * z_r - z_i * z_i + c_r;
	            z_i = 2 * tmp * z_i +  c_i;
	            i++;
	        } while(i < color_max && z_r * z_r + z_i * z_i < 4);
	        
	        if(i == color_max)
	        	fractal_data[x][y] = black;
	        else
	        	fractal_data[x][y] = color[i];
	    }
	}
}