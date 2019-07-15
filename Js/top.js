$(document).ready(function(){
  $( '.top-button').click(function(){
    $('body, html').animate({
      scrollTop: '0px'
    }, 300);
  });

  //Ocultar boton
  $(window).scroll(function(){ 
    if($(this).scrollTop() > 0) {
      $('.top-button').slideDown(300);
    } else {
      $('.top-button').slideUp(300);
    }
  });
});

