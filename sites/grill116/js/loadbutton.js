$(".manufacturer_content_item_list").each(function () {
  var item = this;
  $(this).find(".choise_item").slice(0, 4).css('display', 'block');
  $(this).find(".manufacturer_content_item_more").on('click', function (e) {
      e.preventDefault();
      $(item).find(".choise_item:hidden").slice(0, 4).css('display', 'block');
      if ($(item).find(".choise_item:hidden").length == 0) {
        $(item).find(".manufacturer_content_item_more").fadeOut('slow');
      }
  });
});

$(function () {
  $(".articles_main_item").slice(0, 9).css('display', 'inline-block');
  $(".articles_main_btn_more").on('click', function (e) {
      e.preventDefault();
      $(".articles_main_item:hidden").slice(0, 3).css('display', 'inline-block');
      if ($(".articles_main_item:hidden").length == 0) {
          $(".articles_main_btn_more").fadeOut('slow');
      }
      
  });
});
      
