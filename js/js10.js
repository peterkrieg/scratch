$(document).ready(function(){
	


// GreenSock Animation Platform

TweenMax.staggerTo(".box", 3, {
	x: 435,
	rotation: 360,
	scale: 1.5,
	ease: Bounce.easeOut,
	delay: .5
},
.5
);

TweenMax.staggerFrom(".box", 3, {
	delay: .5,
	opacity: 0
})




});