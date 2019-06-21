$(function() {

	
    
    $('.header__slider').slick({});
    
    $(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".header__nav").slideToggle();
		return false;
        
	});
    
    $('.main-iso').isotope({
	itemSelector: '.item',
	layoutMode: 'fitRows'
        });
    // Isotope click function
    $('.portfolio__nav ul li').click(function(){
	$('.portfolio__nav ul li').removeClass('active');
	$(this).addClass('active');

	var selector = $(this).attr('data-filter');
	$('.main-iso').isotope({
		filter: selector
	});
	return false;
});
    $('.study__slider').slick({
        dots: true,
        autoplay: true,
        autoplaySpeed: 2000,
        accessibility: false
        
    });
    
   $('.count').counterUp({
        delay: 10,
        time: 3000,
    });

   
    
    $('.header__nav a').click(function() {
    $('html, body').animate( { scrollTop: $($(this).attr("href")).offset().top }, 2000 );
});

    
    
    $(".stats__item").animated("fadeInDown");
    $(".who__item").animated("zoomIn");
    $(".services__slide_info").animated("fadeInLeft");
    $(".pricing__item").animated("pulse");
    $(".contact__info").animated("fadeInLeft");
    $(".contact__form").animated("fadeInRight");
        


});