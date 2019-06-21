// header

$(".personal_area_title").click(function () {
    $(".personal_area_list").toggleClass('show');
});


$('select.select-city').selectize({
});

$('select.header_content_form_select').selectize({
    placeholder: 'Врач, клиника, услуга'
});

$('select.header_content_form_select2').selectize({
    placeholder: 'Метро, город МО'
});


// slider

$('.doctor_near_slider').slick({
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

// map
function initMap() {
	// Styles a map in night mode.
	var prospectMira = {lat: 55.778583, lng: 37.632875};
	
	var map = new google.maps.Map(document.getElementById('map'), {
		center: prospectMira,
	  zoom: 12
	});
  }