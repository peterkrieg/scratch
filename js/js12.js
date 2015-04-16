$(function(){


	var controller = new ScrollMagic.Controller();

	
	var scene = new ScrollMagic.Scene({
		triggerElement: ".triggerLine",
		duration: 500
	})
	.setTween(".box", .5, {scale: 1.5})
	.addTo(controller);

	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".triggerLine",
		duration: 1000
	})
	.setTween('.filler', 1, {opacity: 0})
	.addTo(controller);





});