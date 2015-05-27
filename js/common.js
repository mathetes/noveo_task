$(window).ready(function() {
	
	$("h1").animated("bounceInLeft", "bounceInLeft");
	$("h2").animated("fadeInUp", "fadeInUp");
	$(".slides").animated("zoomIn", "zoomOut");
	$("article").animated("fadeInUp", "fadeInUp");
});

$(document).ready(function() {
	
	$(document).on('click', '#menu-button', function(e) {
	$('.menu').toggleClass('menu-open');
	});

	//Кнопка "Наверх"
	//Документация:
	//http://api.jquery.com/scrolltop/
	//http://api.jquery.com/animate/
	$("#top").click(function () {
		$("body, html").animate({
			scrollTop: 0
		}, 800);
		return false;
	});
});

