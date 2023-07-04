const nextBtn = '<img src="../assets/seta-dir.svg" alt:"seta direita">';
const prevBtn = '<img src="../assets/seta-esq.svg" alt:"seta esquerda">';
const nextBtnDark =
  '<img src="../assets/seta-dir-dark.svg" alt:"seta direita">';
const prevBtnDark =
  '<img src="../assets/seta-esq-dark.svg" alt:"seta esquerda">';

$(document).ready(function () {
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
    navText: [prevBtn, nextBtn],
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
      960: {
        items: 3,
        nav: false,
      },
      1200: {
        items: 4,
      },
      1490: {
        items: 5,
      },
    },
  });

  $(".owl-carousel").each(function () {
    var owl = $(this);
    owl.on("click", ".owl-item", function (event) {
      var currentItem = $(this);
      var activeItem = owl.find(".owl-item.active");

      if (!currentItem.hasClass("active")) {
        event.preventDefault();

        if (currentItem.index() < activeItem.index()) {
          owl.trigger("prev.owl.carousel", [300]);
        } else {
          owl.trigger("next.owl.carousel", [300]);
        }
      }
    });
  });
});
