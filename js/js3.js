
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


// This is code to remove list items

function getTarget(e){
	if (!e){
		e = window.event;	
	}
	return e.target || e.srcElement;
}

function removeListItem(e){
	var target, elParent;
	target = getTarget(e);
	elParent=target.parentNode;  
	elParent.removeChild(target);
}


var removeul = document.getElementsByClassName('removeul')[0];
removeul.addEventListener('click', function(e){
	removeListItem(e);
}, false);


//  Code for transition of list items

function getTarget(e){
	if(!e){
		e=window.event;
	}
	return e.target || e.srcElement;
}

function transitionItem(e){
	var target, elParent;
	target = getTarget(e);
	elParent = target.parentNode;
	elParent.className = elParent.className + ' coolTransitionTime';
	e.preventDefault(); // This prevents link from going anywhere
}

var transitionul = document.getElementsByClassName('transitionul')[0];
transitionul.addEventListener('click', function(e){
	transitionItem(e);
}, false);






































