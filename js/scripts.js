jQuery(document).ready(function($){

     /**Hero Carousel**/

// $('.owl-main-slide').owlCarousel({
//     loop: true,
//     autoplay:true,
//     autoplayTimeout:4000,
//     margin: 0,
//     lazyLoad: true,
//     nav: true,
//     dots: false,
//     autoHeight: true,
//     navText: [
//         "<i class='fa fa-angle-left'></i>",
//         "<i class='fa fa-angle-right'></i>"],
//     responsive: {
//         0: {
//             items: 1 
//         },
//         600: {
//             items: 1
//         },
//         1000: {
//             items: 1
//         }
//     }
// });

//   /**Carousel Clients**/
//   $('.carousel-client').owlCarousel({
//     loop: true,
//     margin: 15,
//     nav: false,
//     responsive: {
//         0: {
//             items: 2
//         },
//         600: {
//             items: 3
//         },
//         1000: {
//             items: 5
//         }
//     }
// });

    // /**Carousel Card*/
    // $('.carousel-card').owlCarousel({
    //     loop: true,
    //     autoplay:true,
    //     autoplayTimeout:4000,
    //     margin: 15,
    //     nav: true,
    //     dots: false,
    //     navText: [
    //         "<i class='fa fa-angle-left'></i>",
    //         "<i class='fa fa-angle-right'></i>"],
    //     responsive: {
    //         0: {
    //             items: 1
    //         },
    //         600: {
    //             items: 2
    //         },
    //         1000: {
    //             items: 3
    //         }
    //     }
    // });

});
//
// If there it not enought content set footer to the bottom
//
var fixFooter = (function() {
    // Variables
	$f = $('#footer').outerHeight(true);
	// Methods
    $('#main-content').css('min-height', "calc(100vh - " + $f + "px)");
})();

//
// Smooth Scroll
//
// var smoothScroll = (function() {
//     // event
//     $(document).on('click', 'a[href^="#"]', function (e) {
//         e.preventDefault();
//         if (!$(this).hasClass(".nav-tabs .nav-link")) {
//         $('html, body').animate({
//             scrollTop: $($.attr(this, 'href')).offset().top
//         }, 500);
//     }
//     });
// })();

$("[data-scroll-to]").click(function(e) {
    e.preventDefault();
    var $this = $(this),
        $toElement      = $this.attr('data-scroll-to'),
        $focusElement   = $this.attr('data-scroll-focus'),
        $offset         = $this.attr('data-scroll-offset') * 1 || 0,
        $speed          = $this.attr('data-scroll-speed') * 1 || 500;
  
    $('html, body').animate({
      scrollTop: $($toElement).offset().top + $offset
    }, $speed);
    
    if ($focusElement) $($focusElement).focus();
  });

//
// Shrink header
//

var shrinkHeader = (function() {
    if (window.innerWidth > 992) {   
        // event
        $(document).on("scroll", function () {
            if
                ($(document).scrollTop() > 380) {
                $(".navbar-fixed").addClass("fixed-top");
            } else
            {
                $(".navbar-fixed").removeClass("fixed-top");
            }
        });
    }
})();

//
// TopBar Arrow Slide
//

var topbarArrowSlide = (function() {
    $(".toogle-top-bar").click(function(){
        $(".top-bar").toggleClass("top-bar-shrink");
      });
})(); 


//
// TopBar Fixed Bottom
//

var topbarFixedBottom = (function() {
    if (window.innerWidth < 770) {
         // event
        $(document).on("scroll", function () {
            if ($(document).scrollTop() > 380) {
                $(".top-bar").addClass("fixed-bottom");
                 // Display arrow icon
                 $(".top-bar-arrow").css("display","block");
            } else
            {
                $(".top-bar").removeClass("fixed-bottom");
            }
        });
    }
})();

//
// Back to top Button
//
var backToTop = (function() {

if ($('#back-to-top').length) {
    var scrollTrigger = 100, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('#back-to-top').addClass('show');
                } else {
                    $('#back-to-top').removeClass('show');
                }
            };
    backToTop();
    $(window).on('scroll', function () {
        backToTop();
    });
    $('#back-to-top').on('click', function (e) {
        e.preventDefault();
        $('html,body').animate({
            scrollTop: 0
        }, 700);
    });
}
})(); 

