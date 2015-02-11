var body, content, newDiv, counter;
counter = 0;


function getTarget(e){
	return e.target || e.srcElement
}

function printChar(e){
	content.textContent = content.textContent + e.keyCode + ' ';
	if(e.keyCode === 97){
		var newDiv = document.createElement('div');
		body.appendChild(newDiv);
		newDiv.textContent ='div created!!!!'
		counter++;
		if(counter >5){
			counter = 0;
			body.innerHTML = '';
		}
	}
}

var content = document.getElementById('content');
var body = document.getElementsByTagName('body')[0];
body.addEventListener('keypress', function(e){
	printChar(e);
}, false);


var testP = document.getElementById('testp');


color = '#000000';
color = color.split('');
color[1]= 'f';
color[2]= 'f';
color = color.join('');
console.log(color);

testp.style.color = color;