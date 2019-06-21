$(".menu").click(function () {
    $(".nav").addClass('open');
});

$(".close_nav").click(function () {
    $(".nav").removeClass('open');
});

$(".profile_link").click(function () {
    $(".content").removeClass('show');
    $(".profile_content").addClass('show');
    $(".nav").removeClass('open');
});

$(".internet_link").click(function () {
    $(".content").removeClass('show');
    $(".internet_content").addClass('show');
    $(".nav").removeClass('open');
});

$(".tv_link").click(function () {
    $(".content").removeClass('show');
    $(".tv_content").addClass('show');
    $(".nav").removeClass('open');
});

$(".package_link").click(function () {
    $(".content").removeClass('show');
    $(".package_content").addClass('show');
    $(".nav").removeClass('open');
});

$(".serv_link").click(function () {
    $(".content").removeClass('show');
    $(".serv_content").addClass('show');
    $(".nav").removeClass('open');
});

$(".pay_link").click(function () {
    $(".content").removeClass('show');
    $(".pay_content").addClass('show');
    $(".nav").removeClass('open');
});


$(".opt_link").click(function () {
    $(".content").removeClass('show');
    $(".opt_content").addClass('show');
    $(".nav").removeClass('open');
});

$(".bonus_link").click(function () {
    $(".content").removeClass('show');
    $(".bonus_content").addClass('show');
    $(".nav").removeClass('open');
});

$(".internet_content_tariff_info_link1").click(function () {
    $(".internet_content_tariff_info_descr1").css('display', 'block');
    $(".internet_content_tariff_info_link1").css('display', 'none');
});

$(".internet_content_tariff_info_link2").click(function () {
    $(".internet_content_tariff_info_descr2").css('display', 'block');
    $(".internet_content_tariff_info_link2").css('display', 'none');
});

$(".internet_content_tariff_info_descr_link1").click(function () {
    $(".internet_content_tariff_info_descr1").css('display', 'none');
    $(".internet_content_tariff_info_link1").css('display', 'block');
});

$(".internet_content_tariff_info_descr_link2").click(function () {
    $(".internet_content_tariff_info_descr2").css('display', 'none');
    $(".internet_content_tariff_info_link2").css('display', 'block');
});

$(".exit_btn").click(function () {
    $(".modal_auth").css('display', 'block');
});

$(".modal-close").click(function () {
    $(".modal_auth").css('display', 'none');
    $(".modal_reg").css('display', 'none');
});

$(".reg_btn").click(function () {
    $(".modal_reg").css('display', 'block');
});

$(".back_link").click(function () {
    $(".modal_reg").css('display', 'none');
});


$(".tv_content_prime_info_link1").click(function () {
    $(".tv_content_prime_info_descr1").css('display', 'block');
    $(".tv_content_prime_info_link1").css('display', 'none');
    $(".tv_content_prime_channels").addClass("channel_open");
});

$(".tv_content_prime_info_descr_link1").click(function () {
    $(".tv_content_prime_info_descr1").css('display', 'none');
    $(".tv_content_prime_info_link1").css('display', 'block');
    $(".tv_content_prime_channels").removeClass("channel_open");
});

$(".tv_content_prime_info_link2").click(function () {
    $(".tv_content_prime_info_descr2").css('display', 'block');
    $(".tv_content_prime_info_link2").css('display', 'none');
    $(".tv_content_prime_channels").addClass("channel_open");
});

$(".tv_content_prime_info_descr_link2").click(function () {
    $(".tv_content_prime_info_descr2").css('display', 'none');
    $(".tv_content_prime_info_link2").css('display', 'block');
    $(".tv_content_prime_channels").removeClass("channel_open");
});

$(".efir_channels").click(function () {
    $('.channel_filter').removeClass('active');
    $(this).addClass('active');
    $('.tv_content_channels').css('display', 'none');
    $('.tv_content_prime_info_filter_efir_content').css('display', 'block');
   
});

$(".news_channels").click(function () {
    $('.channel_filter').removeClass('active');
    $(this).addClass('active');
    $('.tv_content_channels').css('display', 'none');
    $('.tv_content_prime_info_filter_news_content').css('display', 'block');
});

$(".child_channels").click(function () {
    $('.channel_filter').removeClass('active');
    $(this).addClass('active');
    $('.tv_content_channels').css('display', 'none');
    $('.tv_content_prime_info_filter_child_content').css('display', 'block');
});

$(".fun_channels").click(function () {
    $('.channel_filter').removeClass('active');
    $(this).addClass('active');
    $('.tv_content_channels').css('display', 'none');
    $('.tv_content_prime_info_filter_fun_content').css('display', 'block');
});

$(".entertaining_channels").click(function () {
    $('.channel_filter').removeClass('active');
    $(this).addClass('active');
    $('.tv_content_channels').css('display', 'none');
    $('.tv_content_prime_info_filter_entertaining_content').css('display', 'block');
});

$(".music_channels").click(function () {
    $('.channel_filter').removeClass('active');
    $(this).addClass('active');
    $('.tv_content_channels').css('display', 'none');
    $('.tv_content_prime_info_filter_music_content').css('display', 'block');
});

$(".cognitive_channels").click(function () {
    $('.channel_filter').removeClass('active');
    $(this).addClass('active');
    $('.tv_content_channels').css('display', 'none');
    $('.tv_content_prime_info_filter_cognitive_content').css('display', 'block');
});

$(".international_channels").click(function () {
    $('.channel_filter').removeClass('active');
    $(this).addClass('active');
    $('.tv_content_channels').css('display', 'none');
    $('.tv_content_prime_info_filter_international_content').css('display', 'block');
});

$(".sport_channels").click(function () {
    $('.channel_filter').removeClass('active');
    $(this).addClass('active');
    $('.tv_content_channels').css('display', 'none');
    $('.tv_content_prime_info_filter_sport_content').css('display', 'block');
});

$(".film_channels").click(function () {
    $('.channel_filter').removeClass('active');
    $(this).addClass('active');
    $('.tv_content_channels').css('display', 'none');
    $('.tv_content_prime_info_filter_film_content').css('display', 'block');
});

$(".services_channels").click(function () {
    $('.channel_filter').removeClass('active');
    $(this).addClass('active');
    $('.tv_content_channels').css('display', 'none');
    $('.tv_content_prime_info_filter_services_content').css('display', 'block');
});


$(".stat_link").click(function(){
    $(".stat_link_dropdown").slideToggle(400);
    $(".stat_link").toggleClass('active_nav');
});

$(".stat_link").click(function () {
    $(".content").removeClass('show');
    $(".list_content").addClass('show');
});

$(".list_link").click(function () {
    $(".content").removeClass('show');
    $(".list_content").addClass('show');
    $(".nav").removeClass('open');
});

$(".traffic_link").click(function () {
    $(".content").removeClass('show');
    $(".traffic_content").addClass('show');
    $(".nav").removeClass('open');
});

$(".journal_link").click(function () {
    $(".content").removeClass('show');
    $(".journal_content").addClass('show');
    $(".nav").removeClass('open');
});

$(".serv_content_tariff_info_link1").click(function () {
    $(".serv_content_tariff_info_descr1").css('display', 'block');
    $(".serv_content_tariff_info_link1").css('display', 'none');
});

$(".serv_content_tariff_info_descr_link1").click(function () {
    $(".serv_content_tariff_info_descr1").css('display', 'none');
    $(".serv_content_tariff_info_link1").css('display', 'block');
});

$(".serv_content_tariff_info_link2").click(function () {
    $(".serv_content_tariff_info_descr2").css('display', 'block');
    $(".serv_content_tariff_info_link2").css('display', 'none');
});

$(".serv_content_tariff_info_descr_link2").click(function () {
    $(".serv_content_tariff_info_descr2").css('display', 'none');
    $(".serv_content_tariff_info_link2").css('display', 'block');
});

$(".qiwi_block_items li").click(function(){
    $(this).find(".qiwi_content").stop().slideToggle(400);
});

var btn = document.querySelector('.open_site');

btn.addEventListener('click', function() {
  var viewport = document.querySelector("meta[name=viewport]");
  viewport.setAttribute('content', 'width=1200');
});