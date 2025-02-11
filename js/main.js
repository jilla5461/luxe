(function ($) {
    "use strict";

    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 1500, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });


    // Modal Video
    $(document).ready(function () {
        var $videoSrc;
        $('.btn-play').click(function () {
            $videoSrc = $(this).data("src");
        });
        console.log($videoSrc);

        $('#videoModal').on('shown.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc + "?autoplay=1&amp;modestbranding=1&amp;showinfo=0");
        })

        $('#videoModal').on('hide.bs.modal', function (e) {
            $("#video").attr('src', $videoSrc);
        })
    });


    // Scroll to Bottom
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scroll-to-bottom').fadeOut('slow');
        } else {
            $('.scroll-to-bottom').fadeIn('slow');
        }
    });


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 200) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Gallery carousel
    $(".gallery-carousel").owlCarousel({
        autoplay: false,
        smartSpeed: 1500,
        dots: false,
        loop: true,
        nav : true,
        navText : [
            '<i class="fa fa-angle-left" aria-hidden="true"></i>',
            '<i class="fa fa-angle-right" aria-hidden="true"></i>'
        ],
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            },
            1200:{
                items:5
            }
        }
    });
    
})(jQuery);

$(document).ready(function () {
    $(".zoom-image").hover(
      function () {
        $(this).css("transform", "scale(1.2)"); // Zoom in
      },
      function () {
        $(this).css("transform", "scale(1)"); // Reset zoom
      }
    );
  });

  

    
    $(document).ready(function () {
        function fadeInOnScroll() {
            $(".portfolio-item").each(function () {
                var elementTop = $(this).offset().top;
                var windowBottom = $(window).scrollTop() + $(window).height();

                if (elementTop < windowBottom - 50) {
                    $(this).css({
                        opacity: 1,
                        transform: "translateY(0)"
                    });
                } else {
                    $(this).css({
                        opacity: 0,
                        transform: "translateY(50px)"
                    });
                }
            });
        }

        // Run on page load and scroll
        fadeInOnScroll();
        $(window).on("scroll", fadeInOnScroll);
    });

    $(document).ready(function () {
        function animateInsideOut() {
            $(".inside-content").each(function () {
                var elementTop = $(this).offset().top;
                var windowBottom = $(window).scrollTop() + $(window).height();

                if (elementTop < windowBottom - 50) {
                    $(this).animate(
                        {
                            opacity: 1,
                            left: "0px" // Moves content outward
                        }, 
                        1000 // Animation speed in milliseconds
                    );
                }
            });
        }

        // Run function on page load and scroll
        animateInsideOut();
        $(window).on("scroll", animateInsideOut);
    });

    $(document).ready(function () {
        $('#videoModal').on('shown.bs.modal', function () {
            $('#videoPlayer')[0].play(); // Play video when modal opens
        });

        $('#videoModal').on('hidden.bs.modal', function () {
            var video = $('#videoPlayer')[0];
            video.pause(); // Pause video when modal closes
            video.currentTime = 0; // Reset video to start
        });
    });

    
    