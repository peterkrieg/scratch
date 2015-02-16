$(document).ready(function(){

	var $window = $(window);
	var $longP = $('.section1 p');
	var $header = $('header');

	console.log($longP.offset().top);
	console.log($longP.offset().left);
	console.log($window.scrollTop());



	function showHeader(){
		console.log($window.scrollTop());
		if($window.scrollTop() > 500){
			$header.addClass('show');
		}
		if($window.scrollTop()<500){
			$header.removeClass('show');
		}
	}



$window.on('scroll', showHeader);











	


	





});