$(function(){


	var controller = new ScrollMagic.Controller();
	
	var scene = new ScrollMagic.Scene({
		triggerElement: ".triggerLine",
		duration: 400
	})
	.setTween(".round", .5, {
		scale: 1.5,
		rotation: 180,
		backgroundColor: '#1E824C',
		borderRadius: '70px',
		ease: Bounce.easeout
	})
	.addIndicators();


	var scene2 = new ScrollMagic.Scene({
		triggerElement: ".triggerLine",
		duration: 400
	})
	.setTween('.filler', 1, {opacity: .2})

	var lightBox = new ScrollMagic.Scene({
		triggerElement: 'p.bodyChange',
		duration: 400
	})
	.setTween('.darken', {
		backgroundColor: 'black'
	})
	.addIndicators();

	var textLighten = new ScrollMagic.Scene({
		triggerElement: 'p.bodyChange',
		duration: 400
	})
	.setTween('p.bodyChange', {
		backgroundColor: 'red',
		color: 'white'
	})

	var boxAnimation = new ScrollMagic.Scene({
		triggerElement: '.line2',
		duration: 400
	})


	.setTween('.slide', .4, {
		x: 100,
		backgroundColor: '#3A539B',
		repeat: -1,
		yoyo: true,
	}
	)
	.addIndicators();


	var darkenContainer = new ScrollMagic.Scene({
		triggerElement: '.fluid1',
		duration: $(window).height()/2
	})
	.setTween('.fluid1', {
		backgroundColor: 'black',
		color: 'red',
		fontSize: '50px'
	})
	.addIndicators();

	$('.hoverBox').mouseenter(function(){
		$(this).css('background', 'blue');
	});
	$('.hoverBox').mouseout(function(){
		$(this).css('background', 'tomato');
	});

controller.addScene([
		scene, 
		scene2, 
		lightBox, 
		textLighten,
		boxAnimation,
		darkenContainer
		]);



});