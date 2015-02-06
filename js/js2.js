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