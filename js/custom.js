/*--------------------
Name: Services - Repair Responsive HTML 5 Template
Author: Team90Degree
Author Url: team90degree.com
Version: 1.0
---------------------*/


"use strict";
//===Header Sticky===
function stickyHeader() {
    if ($('.stricky').length) {
        var strickyScrollPos = 100;
        if ($(window).scrollTop() > strickyScrollPos) {
            $('.stricky').addClass('stricky-fixed');
            $('.scroll-to-top').fadeIn(1500);
        } else if ($(this).scrollTop() <= strickyScrollPos) {
            $('.stricky').removeClass('stricky-fixed');
            $('.scroll-to-top').fadeOut(1500);
        }
    };
}


//===scoll to Top===
function scrollToTop() {
    if ($('.scroll-to-target').length) {
        $(".scroll-to-target").on('click',function() {
            var target = $(this).attr('data-target');
            // animate
            $('html, body').animate({
                scrollTop: $(target).offset().top
            }, 1000);

        });
    }
}

//===Search box ===
function searchbox() {
	//Search Box Toggle
	if($('.seach-toggle').length){
		//Dropdown Button
		$('.seach-toggle').on('click',function() {
			$(this).toggleClass('active');
			$(this).next('.search-box').toggleClass('now-visible');
		});
	}

}

// ===Project===
function projectMasonaryLayout() {
    if ($('.masonary-layout').length) {
        $('.masonary-layout').isotope({
            layoutMode: 'masonry'
        });
    }
    if ($('.post-filter').length) {
        $('.post-filter li').children('span').on('click',function() {
            var Self = $(this);
            var selector = Self.parent().attr('data-filter');
            $('.post-filter li').children('span').parent().removeClass('active');
            Self.parent().addClass('active');


            $('.filter-layout').isotope({
                filter: selector,
                animationOptions: {
                    duration: 500,
                    easing: 'linear',
                    queue: false
                }
            });
            return false;
        });
    }
    if ($('.post-filter.has-dynamic-filter-counter').length) {
        // var allItem = $('.single-filter-item').length;
        var activeFilterItem = $('.post-filter.has-dynamic-filter-counter').find('li');

        activeFilterItem.each(function() {
            var filterElement = $(this).data('filter');
            console.log(filterElement);
            var count = $('.gallery-content').find(filterElement).length;

            $(this).children('span').append('<span class="count"><b>' + count + '</b></span>');
        });
    };
}

//===Prettyphoto Lightbox===
function prettyPhoto() {
    $("a[data-rel^='prettyPhoto']").prettyPhoto({
        animation_speed:'normal',
        slideshow:3000,
        autoplay_slideshow: false,
        fullscreen: true,
        social_tools: false
    });
}

//=== Fact counter ===
function CounterNumberChanger () {
	var timer = $('.timer');
	if(timer.length) {
		timer.appear(function () {
			timer.countTo();
		})
	}

}

//=== Tool tip ===
function tooltip () {
	if ($('.tool_tip').length) {
			$('.tool_tip').tooltip();
		};
	$
}

//=== Accordion Box ===
function accordion() {
    if($('.accordion-box').length){
        $(".accordion-box .accord-btn").on('click',function() {

            if($(this).hasClass('active')!==true){
            $('.accordion .accord-btn').removeClass('active');

            }

            if ($(this).next('.accord-content').is(':visible')){
                $(this).removeClass('active');
                $(this).next('.accord-content').slideUp(500);
            }else{
                $(this).addClass('active');
                $('.accordion .accord-content').slideUp(500);
                $(this).next('.accord-content').slideDown(500);	
            }
        });	
    }
}


//=== Prealoder===
function prealoader() {
    if($('.prealoader').length){
        $('.prealoader').delay(2000).fadeOut(500);
    }
}
 

//=== Thm scroll anim===
function thmScrollAnim() {
    if ($('.wow').length) {
        var wow = new WOW({
            mobile: false
        });
        wow.init();
    };
}


//=== Contact Form Validation ===
if($("#contact-form").length){
    $("#contact-form").validate({
        submitHandler: function(form) {
          var form_btn = $(form).find('button[type="submit"]');
          var form_result_div = '#form-result';
          $(form_result_div).remove();
          form_btn.before('<div id="form-result" class="alert alert-success" role="alert" style="display: none;"></div>');
          var form_btn_old_msg = form_btn.html();
          form_btn.html(form_btn.prop('disabled', true).data("loading-text"));
          $(form).ajaxSubmit({
            dataType:  'json',
            success: function(data) {
              if( data.status == 'true' ) {
                $(form).find('.form-control').val('');
              }
              form_btn.prop('disabled', false).html(form_btn_old_msg);
              $(form_result_div).html(data.message).fadeIn('slow');
              setTimeout(function(){ $(form_result_div).fadeOut('slow') }, 6000);
            }
          });
        }
    });
}

// team-slider
if ($(".team-carousel").length) {
    $(".team-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        autoplayHoverPause: true,
        dotsEach: true,
        margin:30,
        dotsSpeed: 1000,
        smartSpeed: 1000,
        pagination: true,
        nav: false,
        items: 4,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 2
            },
            992: {
                items: 3
            },
            1366: {
                items: 4
            }
        }
    });
};

// partners-slider
    if ($(".brand-carousel").length) {
        $(".brand-carousel").owlCarousel({
            autoplay: true,
            loop: true,
            autoplayHoverPause: true,
            pagination: false,
            dotsSpeed: 1000,
            smartSpeed: 1500,
            margin:30,
            nav: true,
            items: 6,
            navElement: "span",
            navText: ["<span class='fa fa-angle-left'></span>", "<span class='fa fa-angle-right'></span>"],
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 2
                },
                767: {
                    items: 3
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 5
                }
            }
        });
    };
    // partners-slider
    if ($(".testimonial-carousel").length) {
        $(".testimonial-carousel").owlCarousel({
            autoplay: true,
            loop: true,
            autoplayHoverPause: true,
            pagination: false,
            dotsSpeed: 1000,
            smartSpeed: 1500,
            margin:30,
            items: 3,
            nav: false,
            responsive: {
                0: {
                    items: 1
                },
                450: {
                    items: 1
                },
                767: {
                    items: 1
                },
                992: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            }
        });
    };

	function teamCarosule () {
		if ($('#our-team-construct .owl-carousel').length) {
			$('#our-team-construct .owl-carousel').owlCarousel({
				loop: true,
				margin: 30,
				nav: true,
				dots: false,
				navText: [
					'<i class="fa fa-angle-left"></i>',
					'<i class="fa fa-angle-right"></i>'
				],
				autoplay: true,
				autoplayTimeout: 3000,
				autoplayHoverPause: true,
				responsive: {
					0:{
						items:1
					},
					480:{
						items:1
					},
					600:{
						items:2
					},
					1000:{
						items:4
					}
				}
			});
		}
	}

	function projectcarousel () {
		if ($('.latest-project-carousel').length) {
			$('.latest-project-carousel').owlCarousel({
				loop: true,
				margin: 30,
				nav: true,
				dots: false,
				navText: [
					'<i class="fa fa-angle-left"></i>',
					'<i class="fa fa-angle-right"></i>'
				],
				autoplay: true,
				autoplayTimeout: 3000,
				smartSpeed: 1200,
				autoplayHoverPause: true,
				responsive: {
					0:{
						items:1
					},
					480:{
						items:1
					},
					767:{
						items:3
					},
					1000:{
						items:4
					}
				}
			});
		}
	}

	// Image popup
	function imgpopup() {
		if ($('.img-popup').length) {
			var groups = {};
			$('.img-popup').each(function() {
				var id = parseInt($(this).attr('data-group'), 10);

				if (!groups[id]) {
					groups[id] = [];
				}

				groups[id].push(this);
			});


			$.each(groups, function() {

				$(this).magnificPopup({
					type: 'image',
					closeOnContentClick: true,
					closeBtnInside: false,
					gallery: { enabled: true }
				});

			});

		};
	}

   // 31. Tabs Box
    if($('.tabs-box').length){
        
        //Tabs
        $('.tabs-box .tab-buttons .tab-btn').on('click',function(e) {
            
            e.preventDefault();
            var target = $($(this).attr('data-tab'));
            
            target.parents('.tabs-box').find('.tab-buttons').find('.tab-btn').removeClass('active-btn');
            $(this).addClass('active-btn');
            target.parents('.tabs-box').find('.tabs-content').find('.tab').fadeOut(0);
            target.parents('.tabs-box').find('.tabs-content').find('.tab').removeClass('active-tab');
            $(target).fadeIn(300);
            $(target).addClass('active-tab');
        });
        
    }

// Dom Ready Function
jQuery(document).on('ready',function () {
	(function ($) {
        // add your functions
        scrollToTop ();
        prettyPhoto ();
        CounterNumberChanger ();
        accordion ();
        searchbox ();
        tooltip ();
        thmScrollAnim();
        teamCarosule();
        projectcarousel();
        imgpopup();
 
	})(jQuery);
});
// Scroll Function
jQuery(window).on('scroll',function(){
	(function ($) {
	stickyHeader()
    
	})(jQuery);
});
//=== Prealoder===
var win = $(window);
win.on('load',function() {
	$('.page-loader').delay(350).fadeOut('slow');
});
//===Nivoslider Activer===
$('#hero-slider').nivoSlider({
    prevText: '<span>P</span><i class="zmdi zmdi-long-arrow-left"></i>',
    nextText: '<span>N</span><i class="zmdi zmdi-long-arrow-right"></i>',
    controlNav: false,
    effect: 'boxRainGrow',
    pauseTime: 5000,
});
/* meanmenu */
 $('#mobile-nav').meanmenu({
	 meanMenuContainer: '.services-mobile-menu',
	 meanScreenWidth: "767"
 });

// Instance Of Fuction while Window Load event
jQuery(window).on('load',function() {
    (function($) {
        projectMasonaryLayout ();
    })(jQuery);
});



