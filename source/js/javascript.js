$(document).ready(function() {

  $('.button-toggle').on('click', function(evt){
   $('.button-toggle').toggleClass('button--active')
   $('.modal-header').toggleClass('display--none')
  });
});
