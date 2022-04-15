$(document).ready(function() {

  $('.button-toggle').on('click', function(){
    $('.popup-wrapper, .button-wrapper').toggleClass('popup-open'),
    $('.button-toggle').toggleClass('button--active'),
    $('.page__header, .logo-container').toggleClass('header--bg'),
    $('.header__logo, .logo__decor').toggleClass('logo--light'),
    $('.page').toggleClass('page--noScroll')

  });



   $('.slider-competitions, .slider-winners').slick({
      slidesToShow: 1,
      arrows: true,
    });

    $(function(){
      resizeSliderContent = false;
      function resize_slider_content(){
        if ($(window).width() < 768 && resizeSliderContent == true) {
          $('.slider-competitions, .slider-winners').slick({
            slidesToShow: 1,
            arrows: true,
          });
          resizeSliderContent = false;
        }
        else if ($(window).width() < 900 && resizeSliderContent == true) {
          $('.slider-competitions, .slider-winners').slick({
            slidesToShow: 2,
            arrows: true,
          });
          resizeSliderContent = false;
        }
        else if ($(window).width() < 1100 && resizeSliderContent == true) {
          $('.slider-competitions, .slider-winners').slick({
            slidesToShow: 3,
            arrows: true,
          });
          resizeSliderContent = false;
        }
        else if ($(window).width() > 1100 && resizeSliderContent == false){
          $('.slider-competitions, .slider-winners').slick('unslick');
          resizeSliderContent = true;
        };
      }
      resize_slider_content();
      $(window).on('resize', function(){
          resize_slider_content();
      });
    });



    $(document).ready(function(){
    $('.slider-reviews').slick({
      slidesToShow: 1,
      dots: true,
      arrows: false,
  });
  });

});





