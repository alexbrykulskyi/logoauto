$(document).ready(function() {

  $('.buttonToggle').on('click', function(){
    $('.navPopupWrapper, .buttonWrapper').toggleClass('popup-open'),
    $('.buttonToggle').toggleClass('buttonToggle--active'),
    $('.page__header').toggleClass('header--bg'),
    $('.header__logoContainer').toggleClass('header__logoContainer--tablet'),
    $('.logo, .logo__decor').toggleClass('logo--light'),
    $('.page').toggleClass('page--noScroll')

  });



   $('.slider-competitions, .slider-winners').slick({
      slidesToShow: 1,
      arrows: true,
    });

    $(function(){
      resizeSliderContent = false;
      function resize_slider_content(){
        if ($(window).width() < 767 && resizeSliderContent == true) {
          $('.slider-competitions, .slider-winners').slick({
            slidesToShow: 1,
            arrows: true,
          });
          resizeSliderContent = false;
        }
        else if ($(window).width() > 767 && resizeSliderContent == false){
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





