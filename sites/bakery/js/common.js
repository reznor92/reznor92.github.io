$(function() {
 $(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".header_nav").slideToggle();
		return false;
	});

	$(".main-footer .toggle-mnu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});
	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});
 $(function() {
      $('#example').barrating({
        theme: 'fontawesome-stars'
      });
   });

$(document).ready(function(){
  $('.pancakes_slider').slick({
     slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  });
});
