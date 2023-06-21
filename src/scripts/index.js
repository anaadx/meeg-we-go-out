const nextBtn = '<img src="src/assets/seta-dir.svg" alt:"seta direita">';
const prevBtn = '<img src="src/assets/seta-esq.svg" alt:"seta esquerda">';
const nextBtnDark =
  '<img src="src/assets/seta-dir-dark.svg" alt:"seta direita">';
const prevBtnDark =
  '<img src="src/assets/seta-esq-dark.svg" alt:"seta esquerda">';

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $("body").addClass("menuActive");
      if ($(window).width() > 1024) {
        $(".containerLupaStatic").addClass("disabled");
        $(".lupaStatic").removeClass("disabled");
      }
    } else {
      $("body").removeClass("menuActive");
      if ($(window).width() > 1024) {
        $(".containerLupaFloated").addClass("disabled");
        $(".lupaFloated").removeClass("disabled");
      }
    }
  });

  $(document).click(function () {
    $("body").removeClass("placeTipActive");
  });

  $(".closeButtonModal").click(function () {
    if ($(window).width() <= 1024) {
      $("body").removeClass("modalLupaActive");
      $("body").removeClass("inputLupaActive");
      $(".lupaFloated").removeClass("disabled");
      $(".lupaStatic").removeClass("disabled");
      $(".containerLupaFloated").addClass("disabled");
    }
  });

  $(".backgroundModal").click(function () {
    if ($(window).width() > 1024) {
      $("body").removeClass("modalLupaActive");
      $("body").removeClass("inputLupaActive");
      $(".lupaFloated").removeClass("disabled");
      $(".lupaStatic").removeClass("disabled");
      $(".containerLupaStatic").addClass("disabled");
    }
  });

  $(".placeTipImg").mouseover(function () {
    $("body").addClass("placeTipActive");
  });

  $(".placeTipX").click(function () {
    $("body").removeClass("placeTipActive");
  });

  $(".lupaStatic").click(function () {
    $("body").addClass("modalLupaActive");
    $(".lupaStatic").addClass("disabled");
    $(".containerLupaStatic").removeClass("disabled");
  });

  $(".lupaFloated").click(function () {
    $("body").addClass("modalLupaActive");
    $(".lupaFloated").addClass("disabled");
    $(".containerLupaStatic").addClass("disabled");
    $(".containerLupaFloated").removeClass("disabled");
  });

  $(".inputLupa").click(function () {
    $("body").addClass("inputLupaActive");
  });

  $(".modal").click(function () {
    $("body").toggleClass("menuDrop");
  });

  $(".searchModalButton").click(function () {
    $("body").addClass("searchEventsModalActive");
    $("body").removeClass("placeTipActive");
  });

  $(".searchModalClose").click(function () {
    $("body").removeClass("searchEventsModalActive");
  });

  $(".lupa").click(function () {
    $("body").toggleClass("menuDropLupa");
  });

  $(".carouselEvents").owlCarousel({
    loop: false,
    navSpeed: 500,
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
      800: {
        items: 2,
        nav: false,
      },
      1024: {
        items: 1,
      },
      1950: {
        items: 1,
      },
    },
  });

  $(".carouselCountdown").owlCarousel({
    loop: false,
    navSpeed: 500,
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
      1024: {
        items: 1,
      },
      1950: {
        items: 1,
      },
    },
  });

  $(".carouselBestEvents").owlCarousel({
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
      1024: {
        items: 4,
      },
      1950: {
        items: 4,
      },
    },
  });

  $('input[name="daterange"]').daterangepicker({
    autoApply: true,
  });

  $(".carouselCommunity").owlCarousel({
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
        items: 3,
        margin: 10,
      },
      550: {
        items: 3,
        margin: 10,
      },
      1024: {
        items: 4,
      },
      1670: {
        items: 4,
      },
    },
  });

  $(".carouselGuide").owlCarousel({
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
      },
      700: {
        items: 2,
        nav: false,
      },
      950: {
        items: 3,
      },
      1350: {
        items: 4,
      },
      1500: {
        items: 4,
      },
    },
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
        margin: 10,
      },
      450: {
        items: 3,
        nav: false,
        margin: 10,
      },
      940: {
        items: 5,
        margin: 10,
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
    navText: [prevBtnDark, nextBtnDark],
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
        items: 3,
      },
      1600: {
        items: 3,
      },
    },
  });
});
