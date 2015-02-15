$(document).ready(function(){
	$('body').hide().fadeIn(2000);
	$('header p').addClass('jQueryTest').fadeIn(1500);
	$('section p').slideDown(200);

	var $listText = $('section ul').text();
	console.log($listText);
	var $listItem = $('section li').html();
	console.log($listItem);
	$('section ul').replaceWith('what what what');
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

	$('.section2 div').on('click mouseover', function(){
		$(this).addClass('greenTransition')
	});

// This code will alert if the user presses the capital A key (ASCII code of 65)
	$('body').on('keypress', function(e){
		if(e.which === 65){
			alert('yep!');
			$(this).toggle(2000);
		}
	});














});






