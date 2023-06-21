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

    if ($(this).scrollTop() >= 5) {
      $("body").addClass("backgroundMenu");
    } else {
      $("body").removeClass("backgroundMenu");
    }
  });

  function disableFixedItems() {
    if ($(window).width() <= 1024) {
      $(".searchModalButton").removeClass("disabled");
    } else {
      $(".searchModalButton").addClass("disabled");
    }
  }

  $(".goSearch").click(function () {
    $("body").addClass("filterSearchMode");
    $("body").removeClass("searchEventsModalActive");
    if ($(window).width() <= 1024) {
      $(".advertisement").addClass("disabled");
    }
  });

  disableFixedItems();

  function disableItems() {
    if ($(window).width() <= 1024) {
      $(".footerWave3").removeClass("disabled");
      $(".footerWave2").addClass("disabled");
      $(".lastWave").addClass("disabled");
      $(".launchWave").addClass("disabled");
      $(".pictureDesk").addClass("disabled");
      $(".findEvent").addClass("disabled");
      $(".sendEventImg").addClass("disabled");
      $(".highlightEvents").addClass("disabled");
      $(".follow").addClass("disabled");
      $(".navigation").addClass("disabled");
      $(".footerSearch").addClass("disabled");
      $(".footerWave1").addClass("disabled");
      $(".footerWave2").addClass("disabled");
    } else {
      $(".footerWave2").removeClass("disabled");
      $(".footerWave1").removeClass("disabled");
      $(".footerSearch").removeClass("disabled");
      $(".highlightEvents").removeClass("disabled");
      $(".follow").removeClass("disabled");
      $(".navigation").removeClass("disabled");
      $(".sendEventImg").removeClass("disabled");
      $(".lastWave").removeClass("disabled");
      $(".pictureDesk").removeClass("disabled");
      $(".launchWave").removeClass("disabled");
      $(".findEvent").removeClass("disabled");
      $(".footerWave3").addClass("disabled");
      $(".pictureMobile").addClass("disabled");
    }
  }

  $(window).resize(function () {
    disableItems();
  });

  disableItems();

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

  $(".carouselRelease").owlCarousel({
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
        items: 1,
        nav: false,
        margin: 10,
      },
      450: {
        items: 1,
        nav: false,
        margin: 10,
      },
      940: {
        items: 2,
        nav: false,
        margin: 10,
      },
      1025: {
        items: 4,
      },
      1500: {
        items: 4,
      },
    },
  });
});
