var canvas = document.getElementById('canvas');
var ctx;

var black = "#000";
var white = "#FFF";

var width = screen.availWidth;
var height = screen.availHeight;

var key = "basic", config, fractal_data = Array(), zoom = 100;

canvas.width = width;
canvas.height = height;

if (canvas.getContext){
	  ctx = canvas.getContext('2d');
	  initialize();
	  config = basic();
	  store_config( key, config );
	  
	  var d = new Date();
	  
	  var time = d.getMilliseconds();
	  fractal(key);
	  displayFractal(key,zoom);
	  
	  d = new Date();
	  time = d.getMilliseconds() - time;

	  displayTime(time);
	  
	  activate_zoom();
} else {
	  // canvas-unsupported code here
}

function initialize(){
	ctx.fillStyle = black;
	ctx.fillRect(0, 0, width, height);
	ctx.save();
}