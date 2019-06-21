$(".headder_top_nav_burger a").click(function () {
	if ($(window).width() < 769) {
		$('.headder_top_nav').addClass('opened');
	}
});

$(".headder_top_nav li a").click(function () {
	if ($(window).width() < 769) {
		$('.headder_top_nav').removeClass('opened');
	}
});

$(".close_nav").click(function () {
	if ($(window).width() < 769) {
		$('.headder_top_nav').removeClass('opened');
	}
});

$(".header_top_search_btn").click(function () {
	if ($(window).width() < 1025) {
		$('.header_info_content_form_top').css('display', 'block');
	}
});

$(".header_info_content_form_top button").click(function () {
	if ($(window).width() < 1025) {
		$('.header_info_content_form_top').css('display', 'none');
	}
});

var catalogue = false;
var subcatalogue = false;

$(".header_navigation_catalogue").click(function () {
	if ($(window).width() < 1025) {
		$('.header_navigation ul').toggleClass('active');
		$('.header_navigation_catalogue_forward').toggleClass('closed');
		$('.header_navigation_catalogue_back').toggleClass('active');

		if (subcatalogue == true && catalogue == false) {
			$('.header_drop_menu').toggleClass('active');
			$('.header_navigation ul').toggleClass('active');
			$('.header_navigation_catalogue_forward').toggleClass('closed');
			$('.header_navigation_catalogue_back').toggleClass('active');
			subcatalogue = false;
			catalogue = true;
		}
	}
});



$(".footer_top .footer_top_grills span").click(function () {
	if ($(window).width() < 769) {
		$('.footer_top .footer_top_grills ul').toggleClass('active');
		$(this).toggleClass('clicked');
	}
});

$(".footer_top .footer_top_accessories span").click(function () {
	if ($(window).width() < 769) {
		$('.footer_top_accessories_content').toggleClass('active');
		$(this).toggleClass('clicked');
	}
});

$(".header_navigation ul a").click(function () {
	$('.header_drop_menu').toggleClass('active');
	subcatalogue = true;
	catalogue = false;
});




$('.big_slider').slick({
	dots: true,
	infinite: true,
	speed: 500,
	fade: true,
	cssEase: 'linear'
});

$('.choise_content').slick({
	infinite: true,
	slidesToShow: 4,
	slidesToScroll: 1,
	responsive: [
		{
			breakpoint: 1600,
			settings: {
				slidesToShow: 3,
				slidesToScroll: 1
			}
		},
		{
			breakpoint: 1025,
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

function initMap() {
	// Styles a map in night mode.
	var pobeda = { lat: 55.80733492, lng: 49.20453966 };

	var map = new google.maps.Map(document.getElementById('map'), {
		center: pobeda,
		zoom: 18
	});
	var marker = new google.maps.Marker({
		position: pobeda,
		map: map,
		icon: {
			url: "img/mainPage/map_mark.png",
			scaledSize: new google.maps.Size(296, 183)
		}
	});
};


$(".product_card_title_share_button").click(function () {
	$('.product_card_title_icons').toggleClass('active');
});

var click = 1;

$(".product_card_info_block_left_button_top").click(function () {
	click++;
	$(".product_card_info_block_left_quantity").html(click);
});

$(".product_card_info_block_left_bottom").click(function () {
	if (click > 1) {
		click--;
		$(".product_card_info_block_left_quantity").html(click);
	}
});


// modals

$(".product_about_header_discount").click(function () {
	$('.modal_discount').addClass('active');
});

$(".product_about_content_reviews_add a").click(function () {
	$('.modal_form').addClass('active');
});

$(".modal_close").click(function () {
	$('.modal_form').removeClass('active');
	$('.modal_discount').removeClass('active');
});

$('.modal_overlay').click(function () {
	$('.modal_form').removeClass('active');
	$('.modal_discount').removeClass('active');
});

$('.product_card_photo_slider').slick({});



// product category page

$(".product_category_content_block_sorting_open").click(function () {
	$('.product_category_content_block_sorting_drop').toggleClass('active');
});

$(".product_category_content_block_sorting_drop li").click(function () {
	$('.product_category_content_block_sorting_drop').removeClass('active');
	var sorting_text = $(this).html();
	$(".product_category_content_block_sorting_open").html(sorting_text);
});

$(".product_category_content_filter_item_open_drop").click(function () {
	$('.product_category_content_filter_item_drop').toggleClass('active');
});



