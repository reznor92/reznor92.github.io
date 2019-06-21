$(document).ready(function() {
    $(".gallery").lightGallery(); 
});

$(".tab1").hover(function(){
    $(this).addClass('active');
    $(".tab1_content").addClass('show');
    $('.tab2').removeClass('active');
    $(".tab2_content").removeClass('show');
    $('.tab3').removeClass('active');
    $(".tab3_content").removeClass('show');
    $('.tab4').removeClass('active');
    $(".tab4_content").removeClass('show');
    $('.tab5').removeClass('active');
    $(".tab5_content").removeClass('show');
    $('.tab6').removeClass('active');
    $(".tab6_content").removeClass('show');
});
$(".tab2").hover(function(){
    $(this).addClass('active');
    $(".tab2_content").addClass('show');
    $('.tab1').removeClass('active');
    $(".tab1_content").removeClass('show');
    $('.tab3').removeClass('active');
    $(".tab3_content").removeClass('show');
    $('.tab4').removeClass('active');
    $(".tab4_content").removeClass('show');
    $('.tab5').removeClass('active');
    $(".tab5_content").removeClass('show');
    $('.tab6').removeClass('active');
    $(".tab6_content").removeClass('show');
});
$(".tab3").hover(function(){
    $(this).addClass('active');
    $(".tab3_content").addClass('show');
    $('.tab2').removeClass('active');
    $(".tab2_content").removeClass('show');
    $('.tab1').removeClass('active');
    $(".tab1_content").removeClass('show');
    $('.tab4').removeClass('active');
    $(".tab4_content").removeClass('show');
    $('.tab5').removeClass('active');
    $(".tab5_content").removeClass('show');
    $('.tab6').removeClass('active');
    $(".tab6_content").removeClass('show');
});
$(".tab4").hover(function(){
    $(this).addClass('active');
    $(".tab4_content").addClass('show');
    $('.tab2').removeClass('active');
    $(".tab2_content").removeClass('show');
    $('.tab3').removeClass('active');
    $(".tab3_content").removeClass('show');
    $('.tab1').removeClass('active');
    $(".tab1_content").removeClass('show');
    $('.tab5').removeClass('active');
    $(".tab5_content").removeClass('show');
    $('.tab6').removeClass('active');
    $(".tab6_content").removeClass('show');
});
$(".tab5").hover(function(){
    $(this).addClass('active');
    $(".tab5_content").addClass('show');
    $('.tab2').removeClass('active');
    $(".tab2_content").removeClass('show');
    $('.tab3').removeClass('active');
    $(".tab3_content").removeClass('show');
    $('.tab4').removeClass('active');
    $(".tab4_content").removeClass('show');
    $('.tab1').removeClass('active');
    $(".tab1_content").removeClass('show');
    $('.tab6').removeClass('active');
    $(".tab6_content").removeClass('show');
});
$(".tab6").hover(function(){
    $(this).addClass('active');
    $(".tab6_content").addClass('show');
    $('.tab2').removeClass('active');
    $(".tab2_content").removeClass('show');
    $('.tab3').removeClass('active');
    $(".tab3_content").removeClass('show');
    $('.tab4').removeClass('active');
    $(".tab4_content").removeClass('show');
    $('.tab5').removeClass('active');
    $(".tab5_content").removeClass('show');
    $('.tab1').removeClass('active');
    $(".tab1_content").removeClass('show');
});


$(".add_info").click(function(){
    $(this).find(".add_info_content").toggleClass('info_show');
    $('.modal_over').css('display', 'block');
   
});

$(".modal_over").click(function(){
    $(this).css('display', 'none');
    $(".add_info_content").removeClass('info_show');
   
});


