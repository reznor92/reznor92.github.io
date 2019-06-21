$(document).ready(function () {
    $("a.anchor").click(function () {
        var elementClick = $(this).attr("href")
        var destination = $(elementClick).offset().top;
        jQuery("html:not(:animated),body:not(:animated)").animate({
            scrollTop: destination
        }, 2200);
        return false;
    });
});

$(".open_nav").click(function () {
    if ($(window).width() < 769) {
        $('.header_top_nav').addClass('opened');
    }
});

$(".header_top_nav li a").click(function () {
    if ($(window).width() < 769) {
        $('.header_top_nav').removeClass('opened');
    }
});

$(".close_nav").click(function () {
    if ($(window).width() < 769) {
        $('.header_top_nav').removeClass('opened');
    }
});


$('.reviews_slider').slick({
    autoplay: true
})

function blink(){  
    setTimeout(function(){
        flag=!flag;
    if (flag) document.getElementById("benefit_pics").src = "./img/benefit_img.jpg"; else document.getElementById("benefit_pics").src = "./img/benefit_img21.jpg";
    
    setTimeout(function(){
        flag=!flag;
        if (flag) document.getElementById("benefit_pics").src = "./img/benefit_img.jpg"; else document.getElementById("benefit_pics").src = "./img/benefit_img21.jpg";
        
        
    }, 200)

    }, 300)
    
}
  
var flag=true;timer=setInterval(blink, 3000);