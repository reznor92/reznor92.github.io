$(document).ready(function(){
	$(".nav").on("click","a", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),

			top = $(id).offset().top;
		
		$('body,html').animate({scrollTop: top}, 1500);
	});
});

$(function() {

	$(".services_item_info a.title1").hover(function(){
		$(".serv_icon1").toggleClass("active");
	});
	$(".services_item_info a.title2").hover(function(){
		$(".serv_icon2").toggleClass("active");
	});
	$(".services_item_info a.title3").hover(function(){
		$(".serv_icon3").toggleClass("active");
	});
	$(".services_item_info a.title4").hover(function(){
		$(".serv_icon4").toggleClass("active");
	});
	$(".services_item_info a.title5").hover(function(){
		$(".serv_icon5").toggleClass("active");
	});
	$(".services_item_info a.title6").hover(function(){
		$(".serv_icon6").toggleClass("active");
	});

	$(".advan_title1").hover(function(){
		$(".advan_item_pic1").toggleClass("active");
	});
	$(".advan_title2").hover(function(){
		$(".advan_item_pic2").toggleClass("active");
	});
	$(".advan_title3").hover(function(){
		$(".advan_item_pic3").toggleClass("active");
	});
	$(".advan_title4").hover(function(){
		$(".advan_item_pic4").toggleClass("active");
	});
	$(".advan_title5").hover(function(){
		$(".advan_item_pic5").toggleClass("active");
	});
	$(".advan_title6").hover(function(){
		$(".advan_item_pic6").toggleClass("active");
	});
	$(".advan_title7").hover(function(){
		$(".advan_item_pic7").toggleClass("active");
	});
	$(".advan_title8").hover(function(){
		$(".advan_item_pic8").toggleClass("active");
	});

	$(".about_item_title1").hover(function(){
		$(".about_item_photo1").toggleClass("active");
	});
	$(".about_item_title2").hover(function(){
		$(".about_item_photo2").toggleClass("active");
	});
	$(".about_item_title3").hover(function(){
		$(".about_item_photo3").toggleClass("active");
	});
	$(".about_item_title4").hover(function(){
		$(".about_item_photo4").toggleClass("active");
	});
	$(".about_item_title5").hover(function(){
		$(".about_item_photo5").toggleClass("active");
	});

	$(".shop_slider").slick({
		dots: true
	});

	$(".reviews_slider").slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
			{
			  breakpoint: 1024,
			  settings: {
					slidesToShow: 2,
					slidesToScroll: 2
				}
			},
			{
			  breakpoint: 600,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			  }
			}]
	});

	$('.main-port').isotope({
		itemSelector: '.main-port_item',
		layoutMode: 'fitRows'
	});
	// Isotope click function
	$('.port-nav ul li').click(function(){
		$('.port-nav ul li').removeClass('active');
		$(this).addClass('active');
	
		var selector = $(this).attr('data-filter');
		$('.main-port').isotope({
			filter: selector
		});
		return false;
	});

	$(".open-nav").click(function(){
		$('.nav').css('left', '0px');
	});
	
	

});

$(window).resize(function() {
	if ($(window).width() < 767) {
		$(".header_content").click(function(){
			$('.nav').css('left', '-270px');
		});
	
		$(".header_call").click(function(){
			$('.nav').css('left', '-270px');
		});
	
		$(".header_logo").click(function(){
			$('.nav').css('left', '-270px');
		});
		
		$("section").click(function(){
			$('.nav').css('left', '-270px');
		});
		
		$(".footer").click(function(){
			$('.nav').css('left', '-270px');
		});
	}
   else {
	  return false;
   }
  });


  
