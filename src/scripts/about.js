const nextBtn = '<img src="../assets/seta-pink-dir.svg" alt:"seta direita">';
const prevBtn = '<img src="../assets/seta-pink-esq.svg" alt:"seta esquerda">';
const nextBtnDark =
  '<img src="../assets/seta-dir-dark.svg" alt:"seta direita">';
const prevBtnDark =
  '<img src="../assets/seta-esq-dark.svg" alt:"seta esquerda">';

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $("body").addClass("menuActive");
    } else {
      $("body").removeClass("menuActive");
    }

    if ($(this).scrollTop() >= 0) {
      $("body").removeClass(".modalLupaActive");
    } else {
      $("body").removeClass(".inputLupaActive");
    }
  });

  $(".modal").click(function () {
    $("body").toggleClass("menuDrop");
    if ($(window).width() <= 1024) {
      if ($("body").hasClass("menuDrop")) {
        $(".searchModalButton").addClass("disabled");
      } else {
        $(".searchModalButton").removeClass("disabled");
      }
    }
  });

  $(".searchModalButton").click(function () {
    $("body").addClass("searchEventsModalActive");
    $(".searchModalButton").addClass("disabled");
    $("body").removeClass("placeTipActive");
  });

  $(".searchModalClose").click(function () {
    $("body").removeClass("searchEventsModalActive");
    $(".searchModalButton").removeClass("disabled");
  });

  $(".lupa").click(function () {
    $("body").toggleClass("menuDropLupa");
  });

  $('input[name="daterange"]').daterangepicker({
    autoApply: true,
  });

  $(".carouselFestivals").owlCarousel({
    navSpeed: 500,
    loop: false,
    center: false,
    margin: 20,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      1025: {
        items: 2,
      },
    },
  });

  $(".carouselPartners").owlCarousel({
    navSpeed: 500,
    loop: false,
    center: false,
    margin: 20,
    responsiveClass: true,
    nav: true,
    navText: [prevBtnDark, nextBtnDark],
    dots: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 3,
        nav: false,
      },
      450: {
        items: 3,
        nav: false,
      },
      1025: {
        items: 6,
      },
    },
  });
});
