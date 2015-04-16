$(document).ready(function(){
	


// GreenSock Animation Platform

TweenMax.staggerTo(".box", 3, {
	x: 435,
	rotation: 360,
	scale: 1.5,
	ease: Bounce.easeOut,
	// background: 'rgb(255, 0, 0)',
	delay: .5
},
.5
);

TweenMax.staggerFrom(".box", 3, {
	// delay: .5,
	// opacity: 0
})






// Starting to work with ScrollMagic for first time

var controller = new ScrollMagic.Controller();

// creating a scene
var scene = new ScrollMagic.Scene({
	triggerElement: '.triggerLine',
	duration: 500
})
.setPin('.box2')

controller.addScene(scene);






});



