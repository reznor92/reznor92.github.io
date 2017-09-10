$(function() {

	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".header__nav").slideToggle();
		return false;
        
	});
    $( "#faq__tabs" ).tabs();
    
   $('.header__nav a').click(function() {
    $('html, body').animate( { scrollTop: $($(this).attr("href")).offset().top }, 2000 );
});

    

});

window.initSelfLocationMap = function(){
        
        var prospectMira = {lat: 55.778583, lng: 37.632875};
        
        var map = new google.maps.Map(document.getElementById('map-selfLocation-js'), {
          zoom: 14,
          center: prospectMira,
          scrollwheel: false    
        });
        
        var marker = new google.maps.Marker({
          position: prospectMira,
          map: map
        });
    };


