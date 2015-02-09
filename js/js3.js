
function func1(){
	var liLast = document.getElementsByTagName('li')[4];
	liLast.className = 'cool';

	var anotherListItem = document.createElement('li');
	var anotherListItemText = document.createTextNode('what what this is the last list item');
	anotherListItem.appendChild(anotherListItemText);

	var ul = document.querySelector('ul');
	ul.appendChild(anotherListItem);
	anotherListItem.className = 'uhoh';
	console.log('what what test');
}

func1();


// __________________________________________



function change(){
	clicking.className = 'cool';
}

var clicking = document.getElementsByClassName('clicking')[0];
clicking.onclick = change;

function changeText(){
	blahblah.textContent='this text has been changed to somethingn else!!!!!!';
}

var blahblah = document.getElementsByClassName('blahblah')[0];
blahblah.onclick = changeText;

// This is event listener, newest method


function changeText2(){
	blahblah2.textContent = 'this text has been changed again.. oh wow!!';
	var body = document.getElementsByTagName('body')[0];
	body.className = body.className + " coolio";
}

var blahblah2 = document.getElementsByClassName('blahblah2')[0];
blahblah2.addEventListener('click', changeText2, false);




