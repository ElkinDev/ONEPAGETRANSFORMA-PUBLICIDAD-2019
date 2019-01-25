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


var lastId,
    topMenu = $("#top-menu"),
    topMenuHeight = topMenu.outerHeight()+15,
    // All list items
    menuItems = topMenu.find("nav-link"),
    // Anchors corresponding to menu items
    scrollItems = menuItems.map(function(){
      var item = $($(this).attr("href"));
      if (item.length) { return item; }
    });


$(document).scroll(function () {
  var positionContact = $("#contact").position();

  if ($(window).scrollTop() > positionContact.top) {
    $("#site-footer").show();

  } else {
    $("#site-footer").hide();

  }



  // Get container scroll position
  var fromTop = $(this).scrollTop() + topMenuHeight;

  // Get id of current scroll item
  var cur = scrollItems.map(function () {
    if ($(this).offset().top < fromTop)
      return this;
  });
  // Get the id of the current element
  cur = cur[cur.length - 1];
  var id = cur && cur.length ? cur[0].id : "";

  if (lastId !== id) {
    lastId = id;
    // Set/remove active class
    menuItems
      .parent().removeClass("active")
      .end().filter("[href='#" + id + "']").parent().addClass("active");
  }



});

$(document).ready(function () {
  // scrollmagic
  $('#container-info-detail').css('display', 'none')
  $("#site-footer").hide();
  var controller = new ScrollMagic.Controller();
  $(".image-wrapper,.image-wrapper-1").each(function () {
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

      var pos = $("#about").offset().top - 100,
        win = jQuery(window),
        home = $("#home").offset().top;

      win.on("scroll", function () {

        if (win.scrollTop() > pos) {
          sticky.addClass("stickyhead");
        } else {
          sticky.removeClass("stickyhead");
        }

        if (win.scrollTop() > home && win.scrollTop() < pos) {
          sticky.addClass("stickyPosition");

        } else {
          sticky.removeClass("stickyPosition");

        }
      });
    }
  }


});

$('#navbar10 a, .button-scroll-about').click(function (e) {
  e.preventDefault();		//evitar el eventos del enlace normal
  var strAncla = $(this).attr('href'); //id del ancla
  $('body,html').stop(true, true).animate({
    scrollTop: $(strAncla).offset().top - ($(".navbar").height() - 20)
  }, 1000);

});

$(function () {
  var selectedClass = "";
  $(".fil-cat").click(function () {
    selectedClass = $(this).attr("data-rel");
    $("#portfolio").fadeTo(100, 0.1);
    $("#portfolio>div").not("." + selectedClass).fadeOut().removeClass('scale-anm');
    setTimeout(function () {
      $("." + selectedClass).fadeIn().addClass('scale-anm');
      $("#portfolio").fadeTo(300, 1);
    }, 300);

  });
});


function openProjectDetail(idProject) {
  var data = {
    images: ['assets/others-images/porto-5.jpg', 'assets/others-images/porto-6.jpg', 'assets/others-images/porto-7.jpg'],
    title: 'Sitio Web Colegio Refous',
    category: 'Desarrollo Web / Marketing Digital / SEO',
    content: "Liquor ipsum dolor sit amet bearded lady, grog murphy s bourbon lancer. Kamikaze vodka gimlet; old rip van winkle, lemon drop martell salty dog tom collins smoky martini ben nevis man o war.Strathmill grand marnier sea breeze b & b mickey slim. Cactus jack aberlour seven and seven, beefeater early times beefeater kalimotxo royal arrival jack rose. Cutty sark scots whisky b & b harper's finlandia agent orange pink lady three wise men gin fizz murphy's. Chartreuse french 75 brandy daisy widow's cork 7 crown ketel one captain morgan fleischmann's, hayride, edradour godfather. Long island iced tea choking hazard black bison, greyhound harvey wallbanger, gibbon kir royale salty dog tonic and tequila."
  }
  data.images.forEach(function (entry) {
    $("#images-projects").append('<img src="' + entry + '" class="img-fluid img-detail-project">')
  });
  $('#title-detail-project').text(data.title)
  $('#subtitle-detail-project').text(data.category)
  $('#content-detail-project').text(data.content)
  console.log(data.content);

  setTimeout(() => {
    $('#loading-panel').css('display', 'none')

    $('#container-info-detail').css('display', 'block')

  }, 1000);


}

$('#fsModal').on('hidden.bs.modal', function () {
  $("#images-projects").html(null)
  $('#title-detail-project').text(null)
  $('#subtitle-detail-project').text(null)
  $('#content-detail-project').text(null)
  $('#container-info-detail').css('display', 'none')
  $('#loading-panel').css('display', 'table')


})