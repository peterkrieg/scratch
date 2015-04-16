$(document).ready(function(){
	$('.dropDown').hide();


	$('header li').on('mouseover', function(){
		var order = parseInt($(this).attr('class'));
		$('.dropDown').css('margin-left', (order-1)*16.6666.toString()+'%');
		$('.dropDown').slideDown(400);






		$(this).on('mouseout', function(){
			$('.dropDown').slideUp(0);
		});


	});
	





});