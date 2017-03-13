$(document).ready(function() {


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

$('.item').on('click','.popup',function(){
    $.magnificPopup.open({
        items: {
            src: '#popup_form_cal',
            type: 'inline'
        }
    });
});





	$(".image-popup-zoom").magnificPopup({
		type : "image",
		gallery : {
			enabled : true
		},
		zoom: {
     enabled: true,
     duration: 300 // продолжительность анимации. Не меняйте данный параметр также и в CSS
 		},
		removalDelay: 300,
		mainClass: 'mfp-fade'
	});




	$(".tab_item").not(":first").hide();
	$(".wrapper .tab").click(function() {
		$(".wrapper .tab").removeClass("active").eq($(this).index()).addClass("active");
		$(".tab_item").hide().eq($(this).index()).fadeIn()
	}).eq(0).addClass("active");



	$('.custom-select').niceSelect();
				$(document).on('click', 'ul.tabs__caption li:not(.active)', function() {
					$(this)
					.addClass('active').siblings().removeClass('active')
					.closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
				});







	$("nav li").click(function(){
		$("nav li").removeClass("active");
		$(this).addClass("active");
	});

		$(".board-item").click(function(){
		$(".board-item").removeClass("active");
		$(this).addClass("active");
	});

	
	$(".toggle_mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-mnu").slideToggle();
		$(".sandwich").toggleClass("active");
	});
	
});

$(window).load(function() { 
	$(".loader_inner").fadeOut(); 
	$(".loader").delay(400).fadeOut("slow"); 
});