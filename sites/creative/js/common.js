$(function() {
    	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		return false;
	});

	$(".main-footer .toggle-mnu").click(function() {
		$("html, body").animate({ scrollTop: $(document).height() }, "slow");
		return false;
	});
 $(".feature").animated("fadeInDown");
 $(".news_info").animated("fadeInLeft");
 $(".blog_item").animated("slideInUp");
    $(".key_img").animated("rotateIn");
    $(".key_info").animated("fadeInLeft");
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
