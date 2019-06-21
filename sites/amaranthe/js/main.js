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

$(window).scroll(function () {
    if ($(this).scrollTop() > 550 && $("#fixed-btn").hasClass("fixed_btn")) {
        $("#fixed-btn").removeClass("fixed_btn").addClass("open-btn-fixed");
    } else if ($(this).scrollTop() <= 550 && $("#fixed-btn").hasClass("open-btn-fixed")) {
        $("#fixed-btn").removeClass("open-btn-fixed").addClass("fixed_btn");
    }
});

$(document).on('click', '.btn_call',function(evt){
    evt.preventDefault();
    $(".modal").css("display", "block");
   
});



$(".modal-overlay").click(function(){
    $(".modal").css("display", "none");
});