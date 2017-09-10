$(function() {
    
    
    $('.carousel-reviews').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        dots: false,
        navText: [''],
        autoHeight: true,
        responsiveClass:true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 1
            },
            1100: {
                items: 1
            }
        }
    });
    
    
    
    
	$('.carousel-certificate').owlCarousel({
        loop: true,
        nav: true,
        smartSpeed: 700,
        dots: false,
        navText: [''],
        responsiveClass: true,
        responsive: {
            0: {
                items: 1
            },
            800: {
                items: 2
            },
            1100: {
                items: 2
            }
        }
    });
    
    $('.masterpiece-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        smartSpeed: 700,
        dots: false,
        navText: [''],
        autoHeight: true,
        responsiveClass: true
    });
    
     $('.masters-carousel').owlCarousel({
        loop: true,
        items: 1,
        nav: true,
        smartSpeed: 700,
        dots: false,
        navText: [''],
        autoHeight: true,
        responsiveClass: true
    });
    
    $(".pencil").animated("fadeInRight");
    $(".papper").animated("fadeInLeft");
    
    $('#salt').parallax();
    
     $('#my-menu').mmenu({
        extensions: ['theme-black', 'effect-menu-slide', 'pagedim-black'],
        offCanvas: {
            position: 'left',
        },
         navbar: {
            title: '<img src="img/header/header-logo2.png">'
        },
         
    });
   
    
   var api = $('#my-menu').data('mmenu');
    api.bind('open:finish', function() {
        $('.hamburger').addClass('is-active');
    }).bind('close:finish', function(){
        $('.hamburger').removeClass('is-active');
    });
    
 $('#my-menu a').click(function() {
    $('html, body').animate( { scrollTop: $($(this).attr("href")).offset().top }, 2000 );
});

});





    


$(document).ready(()=>{
    sliderInit();
});

function sliderInit(){
    
    let calcVals = {};
    
    let calc = (vals)=>{
        let result = 0;
        
        result = (calcVals['square'] * calcVals['loading']) - calcVals['loan'] + " руб";

        return result;
    }
    
    let refresh = function(e,ui){
            let val = $(this).slider('value') || 0;
            calcVals[e.target.id] = val;
            $('#result').val(calc(calcVals) || 0);
        };
    
    
    $('#square').slider({
        range: "min",
        orientation: "horizontal",
        min: 0,
        max: 700,
        value: 0,
        change: refresh,
        create: refresh,
        slide: function( event, ui ) {
        $( "#end" ).val(ui.value );
      }
    });
    $( "#end" ).val($( "#square" ).slider( "value" ) );
    

    
    $('#loading').slider({
        range: "min",
        orientation: "horizontal",
        min: 0,
        max: 2000,
        value: 0,
        change: refresh,
        create: refresh,
        slide: function( event, ui ) {
        $( "#end2" ).val(ui.value );
      }
    });
    $( "#end2" ).val($( "#loading" ).slider( "value" ) );
    
    $('#loan').slider({
        range: "min",
        orientation: "horizontal",
        min: 0,
        max: 100000,
        value: 0,
        change: refresh,
        create: refresh,
        slide: function( event, ui ) {
        $( "#end3" ).val(ui.value );
      }
    });
    $( "#end3" ).val($( "#loan" ).slider( "value" ) );
    
}


	$(document).ready(function() {
		$(".fancybox1").fancybox();
	});

 
$(function() {

    var num = $(".number");

    num.each(function(indx, el) {

        var max = $(el).data("max");

        var duration = 2000;

        var visibility = checkViewport(el);

        $(el).on("animeNum", function() {

            $({n: 0}).animate({n: max}, {

                easing: "linear",

                duration: duration,

                step: function(now, fx) {

                    $(el).html(now | 0)

                }

            })

        }).data("visibility", visibility);

        visibility && $(el).trigger("animeNum")

    });

 

    function checkViewport(el) {

    var H = document.documentElement.clientHeight,

        h = el.scrollHeight,

        pos = el.getBoundingClientRect();

        return pos.top + h > 0 && pos.bottom - h < H

    }

    $(window).scroll(function() {

        num.each(function(indx, el) {

            var visibility = checkViewport(el);

            el = $(el);

            var old = el.data("visibility");

            old != visibility && el.data("visibility", visibility) && !old && el.trigger("animeNum")

        })

    })

});

function loadscript(e,t){var n=document.createElement("script");n.src="//lptracker.net.ru/"+e;n.onreadystatechange=t;n.onload=t;document.head.appendChild(n);return 1}var init_lstats=function(){lstats.site_id=39389;lstats.referer()};var jquery_lstats=function(){jQstat.noConflict();loadscript("stats_auto.js",init_lstats)};loadscript("jquery-1.10.2.min.js",jquery_lstats);


$(document).ready(function(){
var $slidebox = $('a.masters-g');
$('.masters-btn1').click(function(){
$.fancybox.open($slidebox);
    });
});

$(document).ready(function(){
var $slidebox = $('a.masters-g2');
$('.masters-btn2').click(function(){
$.fancybox.open($slidebox);
    });
});

$(document).ready(function(){
var $slidebox = $('a.masters-g3');
$('.masters-btn3').click(function(){
$.fancybox.open($slidebox);
    });
});
$(document).ready(function(){
var $slidebox = $('a.masters-g4');
$('.masters-btn4').click(function(){
$.fancybox.open($slidebox);
    });
});
$(document).ready(function(){
    PopUpHide();
});
function PopUpShow(){
    $("#popup1").show();
}
function PopUpHide(){
    $("#popup1").hide();
}

$(function() {
  $("#phone").mask("+7(000)000-00-00", {
    placeholder: "Телефон",
    clearIfNotMatch: true
  });
});

$(function() {
  $("#phone2").mask("+7(000)000-00-00", {
    placeholder: "Телефон",
    clearIfNotMatch: true
  });
});

$(function() {
  $("#phone3").mask("+7(000)000-00-00", {
    placeholder: "Телефон",
    clearIfNotMatch: true
  });
});

$(function() {
  $("#phone4").mask("+7(000)000-00-00", {
    placeholder: "Телефон",
    clearIfNotMatch: true
  });
});

$(function() {
  $("#phone5").mask("+7(000)000-00-00", {
    placeholder: "Телефон",
    clearIfNotMatch: true
  });
});

$(document).ready(function() {
	$("form.special-offer_form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});

$(document).ready(function() {
	$("form.offer_form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});

$(document).ready(function() {
	$("form.questions_form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});

$(document).ready(function() {
	$("form.questions2_form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});


$(document).ready(function() {
  $("a.scrollto").click(function() {
    var elementClick = $(this).attr("href")
    var destination = $(elementClick).offset().top;
    jQuery("html:not(:animated),body:not(:animated)").animate({
      scrollTop: destination
    }, 800);
    return false;
  });
});

$(document).ready(function(){
    PopUpHide2();
});
function PopUpShow2(){
    $("#popup2").show();
}
function PopUpHide2(){
    $("#popup2").hide();
}

$(document).ready(function() {
	$("form.doubt_form").submit(function() {
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php",
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css('display', 'flex').hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 3000);
		});
		return false;
	});

});













