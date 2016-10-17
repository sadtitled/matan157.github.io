$(function () {
  $('a[href*=\\#]:not([href=\\#])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

$(function () {
  $(".subheader").typed({
    strings: ["Web Developer.","Creative Thinker.", "Musician."],
    typeSpeed: 50,
    loop: true
  });
});

$(function() {
  var projects = [
    {
      name: "Cold Wrecks",
      url: "http://coldwrecks.com",
      buttonValue: "See the Site"
    },
    {
      name: "Andrew Liebowitz Portfolio",
      url: "http://andrewliebowitz.xyz",
      buttonValue: "See the Site"
    },
    {
      name: "GreatEdge",
      url: "http://great-edge.net",
      buttonValue: "See the Site"
    },
    {
      name: "France and Son",
      url: "http://franceandson.com",
      buttonValue: "See the Site"
    },
    {
      name: "Stilnovo USA",
      url: "http://stilnovousa.com",
      buttonValue: "See the Site"
    },
    {
      name: "Matan Uchen",
      url: "http://matanuchen.com",
      buttonValue: "See the Site"
    },
    {
      name: "OS Project",
      url: "https://github.com/matan157/CISC3320-Project",
      buttonValue: "See the Source"
    },
    {
      name: "Rational Numbers Class",
      url: "https://github.com/matan157/rat2",
      buttonValue: "See the Source"
    }
  ];

  $.each(projects, function(key,val){
    var $item = $('<div class="project-item">'
    + '<div class="project-wrapper">'
    + '<div class="proj-head">' + val.name + '</div>'
    + '<button class="viewsitebtn" onclick="window.open('+ "'" + val.url + "'" + ')">' + val.buttonValue + '</button>'
    + '</div>'
    + '</div>'
    );
    $(".projects").append($item);
  })
});
