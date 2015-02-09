// This is supposed to put content into any form element, when it is put into focus, doesn't really work though
// function getTarget(e){
// 	return e.target || e.srcElement;
// }


// function addContent(e){
// 	var target, elParent;
// 	target = getTarget(e);
// 	elParent = target.parentNode;
// 	target.innerHTML = '<p>this is some text!!! </p>';
// }




// var form = document.querySelector('form');
// form.addEventListener('click', function(e){
// 	addContent(e);
// }, false);



// This program will find the mouse positons of screen

var sx = document.querySelectorAll('span')[0];
var sy = document.querySelectorAll('span')[1];
var px = document.querySelectorAll('span')[2];
var py = document.querySelectorAll('span')[3];
var cx = document.querySelectorAll('span')[4];
var cy = document.querySelectorAll('span')[5];

function getTarget(e){
	return e.target || e.srcElement
}

function showPosition(e){
	sx.textContent = e.screenX;
	sy.textContent = e.screenY;
	px.textContent = event.pageX;
	py.textContent = event.pageY;
	cx.textContent = event.clientX;
	cy.textContent = event.clientY;
}



var el = document.querySelector('body');
el.addEventListener('mousemove', function(e){
	showPosition(e);
}, false);