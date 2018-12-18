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
})
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







});




$(document).ready(function () {
  // Custom 
  var stickyToggle = function (sticky, stickyWrapper, scrollElement) {
    var stickyHeight = sticky.outerHeight();
    var stickyTop = $(".two-section").offset().top - 100;
    if (scrollElement.scrollTop() >= stickyTop) {
      stickyWrapper.height(stickyHeight);
      sticky.addClass("is-sticky");
    }
    else {
      sticky.removeClass("is-sticky");
      stickyWrapper.height('auto');
    }
  };

  // Find all data-toggle="sticky-onscroll" elements
  $('[data-toggle="sticky-onscroll"]').each(function () {
    var sticky = $(this);
    var stickyWrapper = $('<div>').addClass('sticky-wrapper'); // insert hidden element to maintain actual top offset on page
    sticky.before(stickyWrapper);
    sticky.addClass('sticky');

    // Scroll & resize events
    $(window).on('scroll.sticky-onscroll resize.sticky-onscroll', function () {
      stickyToggle(sticky, stickyWrapper, $(this));
    });

    // On page load
    stickyToggle(sticky, stickyWrapper, $(window));
  });
});

$('#navbar10 a').click(function (e) {
  e.preventDefault();		//evitar el eventos del enlace normal
  var strAncla = $(this).attr('href'); //id del ancla
  $('body,html').stop(true, true).animate({
    scrollTop: $(strAncla).offset().top - ($(".navbar").height()-10)
  }, 1000);

});