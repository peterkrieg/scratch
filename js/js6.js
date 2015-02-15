$(document).ready(function(){
	$('body').hide().fadeIn(1000);
	$('header p').addClass('jQueryTest');
	$('section p').slideDown(200);

	var $listText = $('section ul').text();
	console.log($listText);
	var $listItem = $('section li').html();
	console.log($listItem);
	// $('section ul').replaceWith('what what what');
	$('footer').remove();


	$('div.end').css({
		'background-color': 'blue',
		'font-size': '1.5em',
		'color': 'white',
		'margin-left': '200px'
	});

	var listThing = $('.ul2 li:nth-child(2n)');

	listThing.each(function(){
		$(this).prepend('this is ');
	});

	listThing.addClass('red');


// This code doesn't really work at all-- trying to click on div, turn on/off transition, like toggling
	if(!$('.section2 div').hasClass('greenTransition')){
		$('.section2 div').on('click', function(){
		$(this).addClass('greenTransition');
	});
	}
	else if($('section2 div').hasClass('greenTransition')){
		$('.section2 div').on('click', function(){
			$(this).removeClass('greenTransition');
		});
	}
	

// This code will alert if the user presses the capital A key (ASCII code of 65)
	$('body').on('keypress', function(e){
		if(e.which === 65){
			alert('yep!');
			$(this).fadeToggle(2000);
		}
	});


	// section 3

	$('.section3 ul li:nth-of-type(3)').next().addClass('hahah');
	$('.section3 ul li:lt(4)').addClass('hahah2');



// section 4

var widthOfDiv1 = $('.section4 div').eq(0).width();
console.log(widthOfDiv1);

function printWidth(){
	$('section4 div').html('<p>' + widthOfDiv1+ '</p>');
}

printWidth();

$('.section4 div').html('<p>' + widthOfDiv1 + ' </p>');











});

































