document.write('hello world');

var newintro = 'hat what what TESTTEST';
var intro = document.getElementById('intro');
intro.innerHTML= newintro;

document.write('\n screen width is ' + window.screen.width );

document.write('\n test');

document.write('\n ' + document.lastModified);

document.write(Math.PI);

console.log(window.screenY);
console.log(window.screenX);


var msg = '<p class="center"> hello world this is a test!!  </p>';
var el = document.getElementById('divtest');
el.innerHTML = msg;


var dow = new Date();

alert('the day of week is ' + dow.getDate());

// var month = dow.getMonth();
// switch(month){
// 	case 0:
// 		month='January';
// 		break;
// 	case 1:
// 		month='February';
// 		break;
// 	default:
// 		month='December';
//		break;
// }

// alert('the month name is ' + month);

var month = dow.getMonth();
var months = ['January', 'February', 'March', 'April', 'May', 
							'June', 'July', 'August', 'September', 'Oct', 'Nov', 'Dec'];

alert('the day of week isss ' + months[month]);

