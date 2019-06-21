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