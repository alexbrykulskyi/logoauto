$(document).ready(function() {

  $('.buttonToggle').on('click', function(){
    $('.navPopupWrapper, .buttonWrapper').toggleClass('popup-open'),
    $('.buttonToggle').toggleClass('buttonToggle--active'),
    $('.page__header, .header__logoContainer').toggleClass('header--bg'),
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
        if ($(window).width() <= 768 && resizeSliderContent == true) {
          $('.slider-competitions, .slider-winners').slick({
            slidesToShow: 1,
            arrows: true,
          });
          resizeSliderContent = false;
        }
        else if ($(window).width() > 768 && resizeSliderContent == false){
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





