$(function() {


      $('#example, #example1').barrating({
        theme: 'fontawesome-stars'
      });

    $( "#slide_tabs, #slide_tabs1" ).tabs();
});

$(document).ready(function(){
  $('.header_slider').slick({
  slidesToScroll: 1,
  });
});

$(document).ready(function(){
  $('.our_team_slider').slick({
    slidesToScroll: 1,
    slidesToShow: 1,
  });
    
    $(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".header_nav").slideToggle();
		return false;
	});
    
    
});


