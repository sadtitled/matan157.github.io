$(function() {
    $('a.page-scroll').bind('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

 $(function(){
      		$(".typing").typed({
       			strings: ["developer.", "designer.", "musician.", "problem solver."],
        		typeSpeed: 0
      		});
  		});