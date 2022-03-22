$('.button-toggle').on('click', function(evt){
     $('.button-toggle').toggleClass('button--active')
     $('.modal-header').toggleClass('display--none')
    });

$('.slider-reviews').slick({
  arrows: false,
  dots: true,
});

function mobileOnlySlider() {
    $(document).ready(function(){
      $('.slider-winners').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false
      });

      $('.slider-competitions').slick({

      });
    });
}
if(window.innerWidth < 768) {
    mobileOnlySlider();
}
$(window).resize(function(e){
    if(window.innerWidth < 768) {
        if(!$('.slider-competitions, .slider-winners').hasClass('slick-initialized')){
            mobileOnlySlider();
        }

    }else{
        if($('.slider-competitions, .slider-winners').hasClass('slick-initialized')){
            $('.slider-competitions, .slider-winners').slick('unslick');
        }
    }
});
