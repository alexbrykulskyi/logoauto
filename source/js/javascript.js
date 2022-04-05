$(document).ready(function() {

  $('.button-toggle').on('click', function(){
    $('.popup-wrapper').toggleClass('popup-open'),
    $('.button-toggle').toggleClass('button--active'),
    $('.page__header').toggleClass('header--bg'),
    $('.logo-container__logo, .logo__decor').toggleClass('logo--light')
  });

  $('.slider-competitions').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 768,
        settings: "slick",
      },
      {
        breakpoint: 4000,
        settings: "unslick"
      }
    ]
  });

});





