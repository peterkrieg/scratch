// function test(){
// 	alert('hello world');
// }



// var housefcn = function(name, age){
// 	alert(name);
// }

// housefcn('what', 22);


var house = {
	name: 'peters house',
	floors: 3,
	pretty: true,
	callout: function(){
		console.log(this.name + ' is a really cool house!!!   it is ' + this.pretty);
	}
}

// house.callout();
console.log(house.pretty);
house.callout();

function Airplane (capacity, drinksServed, exits, name){
	this.name = name;
	this.exits = exits;
	this.capacity = capacity;
	this.drinksServed = drinksServed;
	this.message = function(){
		console.log('hello passengers welcome to the airplane ' + name);
	}
}

var airplane1 = new Airplane(2, 4, 6, 'alaska airlines');
airplane1.message();




var parag = document.getElementById('domtest');
console.log(parag.textContent);
parag.textContent = 'what what what ';
console.log('new parag text content is ' + parag.textContent);
console.log('the length of parag is ' + parag.textContent)

parag.className='hot';

var paragraphs = document.getElementsByClassName('aclass');
paragraphs[0].textContent = 'blah blah blah baby';
for(var i = 0; i<paragraphs.length; i++){
	paragraphs[i].textContent= 'This is the paragraph number #' + (i +1) +' and here is some text content!!';
}

var paragraphs2 = document.getElementsByClassName('info1');
console.log(paragraphs2.length);
for(var j = 0; j<paragraphs2.length; j++){
	var el = paragraphs2[j];
	el.className = 'hot2';
	el.textContent= 'hello world this is peter krieg';
}

var blahparag = document.querySelectorAll('.sec3 div.blah1');
console.log(blahparag.length);
blahparag[1].className = 'blah2';
blahparag[1].textContent = 'what what what here we';


var body = document.querySelector('body');




var thirdblah1 = document.querySelector('.blah1').nextSibling.nextSibling;
thirdblah1.textContent = 'what what here we go!!!';

var testing = document.getElementById('testing');
var testingContent = testing.innerHTML;
console.log(testingContent);
console.log(testing.innerHTML);

var newDiv = document.createElement('div');
var divText = document.createTextNode('this is some text for a new div');
newDiv.appendChild(divText);
var position = document.getElementsByClassName('blah1')[1];
position.appendChild(newDiv);
console.log(newDiv.length);



var elRemove = document.getElementById('removingitem');
var elRemoveParent = document.getElementsByClassName('removing')[0];
elRemoveParent.removeChild(elRemove);


var footer = document.getElementById('checking');
var footerClass = footer.getAttribute('class');
console.log(footerClass)
console.log(footerClass[0]);
if(footer.hasAttribute('hot')){
	window.alert('has it!!');
}
console.log(typeof(footerClass));

var listitem4 = document.querySelectorAll('#alist li')[3];
listitem4.className= 'coolio';
// listitem4.removeAttribute('class');

// this code would replace the entire body with a short sentence, just by overriding everything
// var body = document.getElementsByTagName('body')[0];
// body.innerHTML = 'hello world!!';







































