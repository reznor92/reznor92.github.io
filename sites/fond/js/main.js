$(window).on("load",function() {
    $(".loader").fadeOut();
    $(".load-inner").delay(200).fadeOut("slow");
    new WOW().init();
});
    

// функция инициализации карты
function initMap() {
	var centerLatLng = new google.maps.LatLng(56.2928515, 43.7866641);
	var mapOptions = {
		center: centerLatLng,
		zoom: 8        
	};
	var map = new google.maps.Map(document.getElementById("map"), mapOptions);
}
google.maps.event.addDomListener(window, "load", initMap);


$(".open-slide").click(function(){
    $('.nav').css('left', '0px');
});

$(".header_content").click(function(){
    $('.nav').css('left', '-270px');
});

$("section").click(function(){
    $('.nav').css('left', '-270px');
});

$(".footer").click(function(){
    $('.nav').css('left', '-270px');
});

$("#menu ul li").hover(function(){
    if ($(window).width() > 768) {
        $(this).find("ul").stop().slideToggle(400);
        $(this).find("a").toggleClass('active');
    }
	
});

$("#menu ul li .arrow1").click(function(){
    $(".drop1").slideToggle(400);
    $(".arrow1").toggleClass('rotate');
});

$("#menu ul li .arrow2").click(function(){
    $(".drop2").slideToggle(400);
    $(".arrow2").toggleClass('rotate');
});

$(".dropdown_items ul li").click(function(){
	$(this).find("a").toggleClass('active');
});

$(window).scroll(function(){
    if ( $(this).scrollTop() > 150 && $("#fixed-btn").hasClass("fixed_btn") ){
        $("#fixed-btn").removeClass("fixed_btn").addClass("open-btn-fixed");
    } else if($(this).scrollTop() <= 150 && $("#fixed-btn").hasClass("open-btn-fixed")) {
        $("#fixed-btn").removeClass("open-btn-fixed").addClass("fixed_btn");
    }
});

$(document).ready(function() {
    $("a.anchor").click(function() {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 2200);
        return false;
    });
});

$(document).ready(function () {
    // clear input
    $('input, textarea').each(function () {
        var placeholder = $(this).attr('placeholder');
        $(this).focus(function () {
            $(this).attr('placeholder', '');
            return false;
        });
        $(this).focusout(function () {
            $(this).attr('placeholder', placeholder);
            return false;
        });
}); });

$(".input_phone").mask("+7 (999) 999-99-99");

$(".call").click(function(){
    $(".modal").css("display", "block");
});

$(".close").click(function(){
    $(".modal").css("display", "none");
});

$(".modal-overlay").click(function(){
    $(".modal").css("display", "none");
});

$(document).ready(function() {
    $(".btn-version-eye").click(function(e) {
        if ( $(".block-version-eye").hasClass('openVisual') ) {
            $(".block-version-eye").removeClass('openVisual');
        } else {
            $(".block-version-eye").removeClass('openVisual');
            $(".block-version-eye").addClass('openVisual');
        }
    });
});

$(document).ready(function() {
    $(".visual-toggle").click(function(e) {
        if ( $(".visual-toggle").hasClass('active') ) {
            $(".visual-toggle").removeClass('active');
        } else {
            $(".visual-toggle").removeClass('active');
            $(".visual-toggle").addClass('active');
        }
    });
});



$('h1').addClass('animated wow zoomIn');
$('p').addClass('animated wow fadeIn');
$('.news_item').addClass('animated wow fadeIn');
$('.banner_info').addClass('animated wow zoomIn');
$('.links_row').addClass('animated wow zoomIn');
$('.wrap').addClass('animated wow fadeIn');
$('.feedback_form').addClass('animated wow fadeIn');

// $(document).ready(function(){
//     $('.header_content').slick({
//         prevArrow: false,
//         nextArrow: false
//     });
// });









