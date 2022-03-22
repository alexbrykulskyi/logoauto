$(document).ready(function() {

  $('.button-toggle').on('click', function(evt){
   $('.button-toggle').toggleClass('button--active')
   $('.modal-header').toggleClass('display--none')
  });

  $('.slider-reviews').slick({
    arrows: false,
    dots: true,
  });
});


$(window).on('load resize', function() {
  if ($(window).width() < 768) {
    $('.slider-list').slick({

    });
  } else {
    $('.slider-list').slick("unslick");
  }
});


$(window).on('load resize', function() {
  if ($(window).width() < 768) {
    $('.slider-winners').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1400,
      arrows: false
    });
  } else {
    $('.slider-winners').slick("unslick");
  }
});
