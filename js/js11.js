$(function(){
	


// Simple GSAP for the boxes 

TweenMax.staggerTo('.box', 1, {
	x: 200,
	scale: .6,
	rotation: 90,
}
.3
)



// Trying to work Scrollmagic on box2

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({
	triggerElement: ".triggerLine"
})
	.setTween(".box2", 0.5, {backgroundColor: "green", scale: 2.5}) // trigger a TweenMax.to tween
	.addTo(controller);
});