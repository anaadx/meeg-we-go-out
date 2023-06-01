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

  function disableItems() {
    if ($(window).width() <= 1024) {
      $(".searchModalButton").removeClass("disabled");
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
      $(".searchModalButton").addClass("disabled");
      $(".pictureMobile").addClass("disabled");
    }
  }

  $(window).resize(function () {
    disableItems();
  });

  disableItems();

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

  $(".closeLupaStatic").click(function () {
    $("body").removeClass("modalLupaActive");
    $(".lupaStatic").removeClass("disabled");
    $(".containerLupaStatic").addClass("disabled");
    $("body").removeClass("inputLupaActive");
  });

  $(".lupaFloated").click(function () {
    $("body").addClass("modalLupaActive");
    $(".lupaFloated").addClass("disabled");
    $(".containerLupaStatic").addClass("disabled");
    $(".containerLupaFloated").removeClass("disabled");
  });

  $(".closeLupaFloated").click(function () {
    $("body").removeClass("modalLupaActive");
    $(".lupaFloated").removeClass("disabled");
    $(".containerLupaFloated").addClass("disabled");
    $("body").removeClass("inputLupaActive");
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
    margin: 10,
    responsiveClass: true,
    nav: false,
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

  $(".carouselLaunch").owlCarousel({
    navSpeed: 500,
    loop: false,
    center: false,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 1,
      },
      1024: {
        items: 2,
      },
      1300: {
        items: 3,
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
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 0,
      },
      700: {
        items: 2,
        nav: false,
        margin: 0,
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

  $(".carouselCommunity").owlCarousel({
    navSpeed: 500,
    loop: false,
    center: false,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 2,
        nav: false,
        margin: 0,
      },
      450: {
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

  $(".carouselArtists").owlCarousel({
    navSpeed: 500,
    loop: false,
    center: false,
    margin: 10,
    responsiveClass: true,
    nav: false,
    dots: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 2,
        nav: false,
        margin: 0,
      },
      450: {
        items: 3,
        nav: false,
      },
      940: {
        items: 3,
      },
      1080: {
        items: 4,
      },
      1500: {
        items: 6,
      },
    },
  });
});