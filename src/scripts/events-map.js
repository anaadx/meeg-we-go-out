const nextBtn = '<img src="src/assets/seta-dir.svg" alt:"seta direita">';
const prevBtn = '<img src="src/assets/seta-esq.svg" alt:"seta esquerda">';
const nextBtnDark =
  '<img src="src/assets/seta-dir-dark.svg" alt:"seta direita">';
const prevBtnDark =
  '<img src="src/assets/seta-esq-dark.svg" alt:"seta esquerda">';

$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $("body").addClass("searchOff");
    } else {
      $("body").removeClass("searchOff");
    }

    if ($(this).scrollTop() >= 5) {
      $("body").addClass("backgroundMenu");
    } else {
      $("body").removeClass("backgroundMenu");
    }
  });

  function disableItems() {
    if ($(window).width() <= 1024) {
      $(".listItems").addClass("carouselEvents");
      $(".listItems").addClass("owl-carousel");
      $(".listItems").addClass("owl-theme");
    } else {
      $(".listItems").removeClass("carouselEvents");
      $(".listItems").removeClass("owl-carousel");
      $(".listItems").removeClass("owl-theme");
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
        margin: 10,
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
});
