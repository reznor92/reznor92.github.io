$(".personal_area_title").click(function () {
    $(".personal_area_list").toggleClass('show');
});


$('select.select-city').selectize({
});

$('.clinic_top_info_slider').slick({});

$('select.clinic_about_doctors_filter_select').selectize({
});

$('.clinic_near_slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    infinite: true,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 1100,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1
            }
          },
        {
          breakpoint: 928,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
    ]
});

$(function () {
 
  $(".clinic_about_reviews_info_form_rating").rateYo({
    rating: 4,
    fullStar: true,
    ratedFill: '#ff256c',
    normalFill: "#b9bec9",
    starWidth: "25px",
    spacing: "2px"
  });
});

jQuery(function ($) {
  $("#clinic_about_reviews_info_form_tel").mask("+7 (999) 99-99-99");
});

