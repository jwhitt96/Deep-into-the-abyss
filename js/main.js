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
$( document ).ready(function() {
   $(".burger-button").click(function(){
     $(".burger-button").toggleClass("active");
     $(".burger-menu").slideToggle();
   });

  $(".burger-menu").click(function(){
    $(".burger-button").toggleClass("active");
    $(".burger-menu").slideToggle();
  });

  var typed = new Typed('#demo', {
  strings: ["Diving Experiences from around the World"],
  typeSpeed: 30,
  showCursor: false
});

});

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
