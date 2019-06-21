$(window).on("load", function () {
    $(".loader").fadeOut();
    $(".load-inner").delay(600).fadeOut("slow");
    new WOW().init();
});






$(window).resize(function () {
    if ($(window).width() < 1000) {

        $(".open_nav").click(function () {
            $('.header_nav').css('left', '0px');
            $('.main').css('margin-left', '200px');
            $('.header_top').css('margin-left', '200px');
            $('.open_nav').css('left', '215px');
        });

        $(".main").click(function () {
            $('.header_nav').css('left', '-200px');
            $('.main').css('margin-left', '0');
            $('.open_nav').css('left', '15px');
            $('.header_top').css('margin-left', '0');
        });
    }
    else {
        return false;
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

$("#btn_call").click(function () {
    $(".modal").css("display", "block");
});

$("#btn_call2").click(function () {
    $(".modal").css("display", "block");
});

$("#btn_call3").click(function () {
    $(".modal").css("display", "block");
});

$("#btn_call4").click(function () {
    $(".modal").css("display", "block");
});

$("#btn_call5").click(function () {
    $(".modal").css("display", "block");
});

$("#btn_call6").click(function () {
    $(".modal").css("display", "block");
});


$(".close").click(function () {
    $(".modal").css("display", "none");
});

$(".modal-overlay").click(function () {
    $(".modal").css("display", "none");
});




$('h1').addClass('animated wow zoomIn');
$('h2').addClass('animated wow zoomIn');
$('p').addClass('animated wow fadeIn');
$('.services_item img').addClass('animated wow fadeInUp');

$(document).ready(function () {
    $('.header_slider').slick({
        prevArrow: false,
        nextArrow: false,
        dots: true,
        autoplay: true,
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1
    });
});

$(document).ready(function () {
    $(".photos_gallery").lightGallery();
});

$(document).ready(function () {


    function slickCustomNav(slickSlideShow, slideCustomNav) {
        slickSlideShow = $(slickSlideShow);
        slideCustomNav = $(slideCustomNav);

        slideCustomNav.click(function (e) {
            e.preventDefault();
            slideIndex = $(this).parent().index();
            slickSlideShow.slick('slickGoTo', slideIndex);
        });

        slickSlideShow.on('setPosition', function () {
            var currentSlide = slickSlideShow.slick('slickCurrentSlide');
            slideCustomNav.removeClass("active");
            slideCustomNav.filter(function (index) {
                return index === currentSlide;
            }).addClass("active");
        });
    }

    slickCustomNav(".header_slider", ".header_dots a");

});

$(document).ready(function () {
    $(".photos_gallery").slick({
        slidesToShow: 4,
        slidesToScroll: 1,

        responsive: [
            {
                breakpoint: 1000,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});

$(document).ready(function () {
    $('.reviews_content').slick({
        autoplay: true,
        slidesToShow: 3,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }

        ]
    });
});










