$(window).on("load", function () {
    $(".loader").fadeOut();
    $(".load-inner").delay(600).fadeOut("slow");
    new WOW().init();
});




$(".open_nav").click(function () {
    if ($(window).width() < 1000) {
        $('.header_nav').css('left', '0px');
        $('.main').css('margin-left', '200px');
        $('.open_nav').css('right', '1000px');
        $('.header_top').css('left', '200px');
    }
});

$(".header_slider").click(function () {
    if ($(window).width() < 1000) {
        $('.header_nav').css('left', '-500px');
        $('.main').css('margin-left', '0');
        $('.open_nav').css('right', '35px');
        $('.header_top').css('left', '0');
    }
});

$(".header_logo").click(function () {
    if ($(window).width() < 1000) {
        $('.header_nav').css('left', '-500px');
        $('.main').css('margin-left', '0');
        $('.open_nav').css('right', '35px');
        $('.header_top').css('left', '0');
    }
});

$("section").click(function () {
    if ($(window).width() < 1000) {
        $('.header_nav').css('left', '-500px');
        $('.main').css('margin-left', '0');
        $('.open_nav').css('right', '35px');
        $('.header_top').css('left', '0');
    }
});

$(".content").click(function () {
    if ($(window).width() < 1000) {
        $('.header_nav').css('left', '-500px');
        $('.main').css('margin-left', '0');
        $('.open_nav').css('right', '35px');
        $('.header_top').css('left', '0');
    }
});

$("footer").click(function () {
    if ($(window).width() < 1000) {
        $('.header_nav').css('left', '-500px');
        $('.main').css('margin-left', '0');
        $('.open_nav').css('right', '35px');
        $('.header_top').css('left', '0');
    }
});



$(window).scroll(function () {
    if ($(this).scrollTop() > 150 && $("#fixed-btn").hasClass("fixed_btn")) {
        $("#fixed-btn").removeClass("fixed_btn").addClass("open-btn-fixed");
    } else if ($(this).scrollTop() <= 150 && $("#fixed-btn").hasClass("open-btn-fixed")) {
        $("#fixed-btn").removeClass("open-btn-fixed").addClass("fixed_btn");
    }
});

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
    });
});

$(".input_phone").mask("+7 (999) 999-99-99");


$(document).on('click', '#btn_call', function (evt) {
    evt.preventDefault();
    $("#modal1").css("display", "block");

});


$(document).on('click', '#btn_call2', function (evt) {
    evt.preventDefault();
    $("#modal2").css("display", "block");

});

$(".close").click(function () {
    $(".modal").css("display", "none");
});

$(".modal-overlay").click(function () {
    $(".modal").css("display", "none");
});




$('h1').addClass('animated zoomIn');
$('h2').addClass('animated wow zoomIn');
$('h3').addClass('animated wow zoomIn');
$('h5').addClass('animated wow zoomIn');
$('list').addClass('animated wow zoomIn');
$('p').addClass('animated wow fadeIn');
$('.news_item').addClass('animated wow FadeIn');


$('.header_slider').slick({
    dots: true,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    infinite: true
});

$('.projects_slider').slick({
    dots: true,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    infinite: true
});



$(".projects_slide_img").hover(function () {
    $(this).find(".projects_slide_img_title").toggleClass('show_title');
});



$("#menu ul li").hover(function () {
    if ($(window).width() > 768) {
        $(this).find("ul").stop().slideToggle(400);
        // $(this).find("a").toggleClass('active');
    }

});

$("#menu ul li .arrow1").click(function () {
    $(".drop1").slideToggle(400);
    $(".arrow1").toggleClass('rotate');
});

// $(".dropdown_items ul li").click(function () {
//     $(this).find("a").toggleClass('active');
// });















