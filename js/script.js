$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(document).ready(function(){
  $('.music-slider').slick({
    dots: false,
    infinite: true,
    speed: 700,
    autoplay:true,
    autoplaySpeed: 2000,
    arrows:true,
    mobileFirst: true,
    slidesToShow: 3,
    slidesToScroll: 3
  });
});