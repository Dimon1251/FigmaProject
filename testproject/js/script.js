$(document).ready(function(){
	$('.slider').slick({
		arrows:true,
		dots:true,
		infinite: true,
  		variableWidth:true,
  		appendDots:$('.rating__button-left'),
  		appendArrows:$('.rating__button-right'),

	});
});