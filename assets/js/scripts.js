
function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if(element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({scrollTop: scroll_to}, 1000);
	}
}


jQuery(document).ready(function() {
	
	/*
	    Navigation
	*/
	$('a.scroll-link').on('click', function(e) {
		e.preventDefault();
		scroll_to($(this), $('nav').outerHeight());
	});
	// toggle "navbar-no-bg" class
	$('.top-content h1').waypoint(function() {
		$('nav').toggleClass('navbar-no-bg');
	});
	
    /*
        Background slideshow
    */
	$('.top-content').backstretch("assets/img/backgrounds/1.jpg");
    $('.section-4-container').backstretch("assets/img/backgrounds/2.jpg");
    
    /*
	    Wow
	*/
	new WOW().init();
	
	/*
	    Stop video playing when the MODAL is being closed (has finished closing)
	*/
	$('#myModal').on('hidden.bs.modal', function(e) {
		$('#myModal iframe').each(function() {
			var videoURL = $(this).attr('src');
			$(this).attr('src', videoURL);
		});
	});
	
	/*
        Stop video playing when the CAROUSEL slides to another element
	*/
	$('#myCarousel').on('slid.bs.carousel', function(e) {
		var currentSlide = $('#myCarousel .carousel-item').eq(e.from);
		var currentSlideEmbed = currentSlide.children('.embed-responsive');
		if(currentSlideEmbed.length > 0) {
			var videoIFrame = currentSlideEmbed.children('iframe');
			var videoURL = videoIFrame.attr('src');
			videoIFrame.attr('src', videoURL);
		}
	});
	
	
});
