console.log('Yes!');

// Global variable
var showScrollUp = false;

function scrollDown(){
  $('html, body').animate({
      scrollTop: $("#contact").offset().top
  }, 3000);

}


$('#button').on('click', scrollDown);

function scrollUp(){
  $('html, body').animate({
      scrollTop: $("#main").offset().top
  }, 3000);

}


$('#scrollup').on('click', scrollUp);


$(window).scroll(function() {

    var scroll = $(window).scrollTop();

    if (scroll >= 200 && showScrollUp === false) {
      showScrollUp = true;
      $('.footer-div').addClass('show');
    } else if (scroll < 200 && showScrollUp === true) {
      showScrollUp = false;
      $('.footer-div').removeClass('show');
    }
});
