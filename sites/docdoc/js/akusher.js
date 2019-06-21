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

// header end

// list page all

$('.list_page_all_specializations_showMore').click(function(){
    $('.list_page_all_specializations_content').toggleClass('active');
    $(this).css('display', 'none');
});

// list page all end

// list reviews
$(function () {
    $(".list_page_reviews_row").slice(0, 2).css('display', 'flex');
    $(".showMoreReviews").on('click', function (e) {
        e.preventDefault();
        $(".list_page_reviews_row:hidden").slice(0, 1).css('display', 'flex');
        if ($(".list_page_reviews_row:hidden").length == 0) {
            $(".showMoreReviews").fadeOut('slow');
        }
        
    });
});
// list reviews end


//list page doctors

$(".card_price_info").hover(function(){
    $(this).find('.card_price_info_detail').show();
},function(){
    $(this).find('.card_price_info_detail').hide();
});


(function($) {
    $(function() {
      $("ul.tabs_caption").on("click", "li:not(.active)", function() {
        $(this)
          .addClass("active")
          .siblings()
          .removeClass("active")
          .closest("div.card_tabs")
          .find("div.card_tab_content")
          .removeClass("active")
          .eq($(this).index())
          .addClass("active");
      });
    });
  })(jQuery);


$('.list_page_content_filter_days').each(function() {
    $_self = $(this);
    $_self.find('select')
        .selectize({ maxItems: 1 })
        .on('change', function() {
            console.log('Changed value to:', $(this).val() )
            $_self.find('span.value').text( $(this).val() )
            if ($(this).val()) {
                $_self.removeClass('open');
                $('.option.selected').removeClass('removeIcon');
                $('.list_page_content_filter_calendar').css('display', 'none');
            }
        });
    $_self.find('.selectize-control').on('click', function(e) { e.stopPropagation(); });
    new niceDatePicker({
        dom:document.getElementById('calendar-demo-wrapper'),
        onClickDate:function(date){
            $_self.find('span.value').text( date );
            $('.list_page_content_filter_calendar').css('display', 'none');
            $('.option.selected').addClass('removeIcon');
        },
        year:2019,
        mode:'en',
        month:5
    });
    $('.selectize-control').on('mouseenter', '.selectize-dropdown-content div.option', function() {
        $('.list_page_content_filter_calendar').css('display', 'none');
   });
    $('.selectize-control').on('mouseenter', '.selectize-dropdown-content div.option[data-value="Выбрать другой день"]', function() {
         $('.list_page_content_filter_calendar').css('display', 'block');
    });
});


//list page doctors end









  
