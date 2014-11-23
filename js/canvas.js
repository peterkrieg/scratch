var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');

canvas.height = screen.height-400;
canvas.width = screen.width-500;

window.onload = init();

var x = 200;
var y = 200;
var radius = 20;
var color = getRandomColor();




function init(){
	onEachStep();


	with(context){
		fillStyle = color;
    beginPath();
    arc(10, 10, radius, 0, 2*Math.PI, true);
    closePath();
    fill();
    console.log('text');
	}
}


function onEachStep(){
	window.requestAnimationFrame(onEachStep, canvas);
	x+=1;
	y+=.002*(x^2);
	drawFrame();
}


function drawFrame(){
	with(context){
		// clearRect(0, 0, canvas.width, canvas.height); 
    fillStyle = color;
    beginPath();
    arc(x, y, radius, 0, 2*Math.PI, true);
    closePath();
    fill();
	}
}


function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '#';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

