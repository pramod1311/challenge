$(document).ready(function() {
            $('.slider-navc').slick({
            dots: false,
            autoplay: true,
            infinite: true,
            speed: 750,
            arrows: false,
            autoplay: true,
            cssEase: 'linear',
            responsive: [
            {
            breakpoint: 2000,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false
            }
            }, {
            breakpoint: 1100,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            dots: false
            }
            }, {
            breakpoint: 900,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
            }, {
            breakpoint: 750,
            settings: {
            slidesToShow: 2,
            slidesToScroll: 2
            }
            }, {
            breakpoint: 600,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1
            }
            }
            ]
            });
            });



var $slider = $('.slideshow .slider'),
  maxItems = $('.item', $slider).length,
  dragging = false,
  tracking,
  rightTracking;

$sliderRight = $('.slideshow').clone().addClass('slideshow-right').appendTo($('.split-slideshow'));

rightItems = $('.item', $sliderRight).toArray();
reverseItems = rightItems.reverse();
$('.slider', $sliderRight).html('');
for (i = 0; i < maxItems; i++) {
  $(reverseItems[i]).appendTo($('.slider', $sliderRight));
}

$slider.addClass('slideshow-left');
$('.slideshow-left').slick({
  swipe: true,
  vertical: true,
  verticalSwiping: true,
  arrows: false,
  infinite: true,
  dots: true,
  speed: 1000,
  autoplay: true,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
}).on('beforeChange', function(event, slick, currentSlide, nextSlide) {

  if (currentSlide > nextSlide && nextSlide == 0 && currentSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', -1);
    $('.slideshow-text').slick('slickGoTo', maxItems);
  } else if (currentSlide < nextSlide && currentSlide == 0 && nextSlide == maxItems - 1) {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems);
    $('.slideshow-text').slick('slickGoTo', -1);
  } else {
    $('.slideshow-right .slider').slick('slickGoTo', maxItems - 1 - nextSlide);
    $('.slideshow-text').slick('slickGoTo', nextSlide);
  }
}).on("mousewheel", function(event) {
  event.preventDefault();
  if (event.deltaX > 0 || event.deltaY < 0) {
    $(this).slick('slickNext');
  } else if (event.deltaX < 0 || event.deltaY > 0) {
    $(this).slick('slickPrev');
  };
}).on('mousedown touchstart', function(){
  dragging = true;
  tracking = $('.slick-track', $slider).css('transform');
  tracking = parseInt(tracking.split(',')[5]);
  rightTracking = $('.slideshow-right .slick-track').css('transform');
  rightTracking = parseInt(rightTracking.split(',')[5]);
}).on('mousemove touchmove', function(){
  if (dragging) {
    newTracking = $('.slideshow-left .slick-track').css('transform');
    newTracking = parseInt(newTracking.split(',')[5]);
    diffTracking = newTracking - tracking;
    $('.slideshow-right .slick-track').css({'transform': 'matrix(1, 0, 0, 1, 0, ' + (rightTracking - diffTracking) + ')'});
  }
}).on('mouseleave touchend mouseup', function(){
  dragging = false;
});

$('.slideshow-right .slider').slick({
  swipe: true,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 950,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)',
  initialSlide: maxItems - 1
});
$('.slideshow-text').slick({
  swipe: true,
  vertical: true,
  arrows: false,
  infinite: true,
  speed: 900,
  cssEase: 'cubic-bezier(0.7, 0, 0.3, 1)'
});

$("[data-menu-underline-from-center] a").addClass("underline-from-center");



var $backToTop = $(".back-to-top");
$backToTop.hide();


$(window).on('scroll', function() {
  if ($(this).scrollTop() > 100) {
    $backToTop.fadeIn();
  } else {
    $backToTop.fadeOut();
  }
});

$backToTop.on('click', function(e) {
  $("html, body").animate({scrollTop: 0}, 500);
});
