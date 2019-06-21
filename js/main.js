jQuery(document).ready(function($) {
$("#portfolio_main").fullpage({
    anchors:['main', 'portfolio'],
    scrollOverflow: true
});
});

$(document).on('click', '#moveTo', function(){
    fullpage_api.moveTo('portfolio', 1);
});