function scroll_to_elem(elem) {
    var speed = 500;
    if (document.getElementById(elem)) {
        var destination = jQuery('#' + elem).offset().top - 70;
        jQuery("html,body").animate({ scrollTop: destination }, speed);
    }
}