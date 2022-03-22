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
    $('.slider-competitions').slick({

    });
    $('.slider-winners').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 1400,
      arrows: false
    });
  } else {
    $('.slider-competitions').slick("unslick");
    $('.slider-winners').slick("unslick");
  }
});
