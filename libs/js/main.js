$(function () {
  var bLazy = new Blazy({
    breakpoints: [
      {
        width: 1000, // max-width
        src: "data-src-small"
      }
    ]
  });
});


$(document).scroll(function () {
  var positionContact = $("#contact").position();

  if ($(window).scrollTop() > positionContact.top) {
    $("#site-footer").show();

  } else {
    $("#site-footer").hide();

  }
});

$(document).ready(function () {
  // scrollmagic
  $("#site-footer").hide();
  var controller = new ScrollMagic.Controller();
  $(".image-wrapper").each(function () {
    var typeIndvScene = new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.76,

    })
      .setClassToggle(this, "zap")
      .addTo(controller);

  });
  // INITIATE THE FOOTER
  siteFooter();
  // COULD BE SIMPLIFIED FOR THIS PEN BUT I WANT TO MAKE IT AS EASY TO PUT INTO YOUR SITE AS POSSIBLE
  $(window).resize(function () {
    siteFooter();
  });

  function siteFooter() {
    var siteContent = $('.wrapper');
    var siteContentHeight = siteContent.height();
    var siteContentWidth = siteContent.width();

    var siteFooter = $('#site-footer');
    var siteFooterHeight = siteFooter.height();
    var siteFooterWidth = siteFooter.width();


    siteContent.css({
      "margin-bottom": siteFooterHeight + 50
    });
  };




  createSticky(jQuery("#sticky-wrap"));

  function createSticky(sticky) {
    if (typeof sticky != "undefined") {

      var pos = $("#about").offset().top-100,
        win = jQuery(window),
        home= $("#home").offset().top;

      win.on("scroll", function () {

        if (win.scrollTop() > pos) {
          sticky.addClass("stickyhead");
        } else {
          sticky.removeClass("stickyhead");
        }

        if(win.scrollTop()> home && win.scrollTop()< pos ){
          sticky.addClass("stickyPosition");

        }else{
          sticky.removeClass("stickyPosition");

        }
      });
    }
  }


});





$('#navbar10 a').click(function (e) {
  e.preventDefault();		//evitar el eventos del enlace normal
  var strAncla = $(this).attr('href'); //id del ancla
  $('body,html').stop(true, true).animate({
    scrollTop: $(strAncla).offset().top - ($(".navbar").height() + 10)
  }, 1000);

});