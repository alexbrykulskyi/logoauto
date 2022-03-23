$(document).ready(function() {
  $('.button-toggle').on('click', function(evt){
    $('.button-toggle').toggleClass('button--active')
    $('.modal-header').toggleClass('display--none')
  });

  $('.slider-reviews').slick({
    arrows: false,
    dots: true,
  });

  $('.slider-competitions').slick({
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });
});
