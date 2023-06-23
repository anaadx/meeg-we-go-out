const nextBtn = '<img src="../assets/seta-dir.svg" alt:"seta direita">';
const prevBtn = '<img src="../assets/seta-esq.svg" alt:"seta esquerda">';
const nextBtnDark =
  '<img src="../assets/seta-dir-dark.svg" alt:"seta direita">';
const prevBtnDark =
  '<img src="../assets/seta-esq-dark.svg" alt:"seta esquerda">';

$(document).ready(function () {
  $(".goSearch").click(function () {
    $("body").addClass("filterSearchMode");
    $("body").removeClass("searchEventsModalActive");
    if ($(window).width() <= 1024) {
      $(".advertisement").addClass("disabled");
    }
  });

  $('input[name="daterange"]').daterangepicker({
    autoApply: true,
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

  $(".carouselArtists").owlCarousel({
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
      940: {
        items: 5,
      },
      1080: {
        items: 6,
      },
      1500: {
        items: 8,
      },
    },
  });

  $(".carouselHighlightLaunch").owlCarousel({
    navSpeed: 500,
    loop: false,
    center: false,
    margin: 20,
    responsiveClass: true,
    nav: true,
    navText: [prevBtn, nextBtn],
    dots: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 1,
        nav: false,
      },
      1024: {
        items: 3,
      },
      1350: {
        items: 4,
      },
      1600: {
        items: 4,
      },
    },
  });
});
