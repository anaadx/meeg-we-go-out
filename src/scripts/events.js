const nextBtn = '<img src="../assets/seta-dir.svg" alt:"seta direita">';
const prevBtn = '<img src="../assets/seta-esq.svg" alt:"seta esquerda">';
const nextBtnDark =
  '<img src="src/assets/seta-dir-dark.svg" alt:"seta direita">';
const prevBtnDark =
  '<img src="src/assets/seta-esq-dark.svg" alt:"seta esquerda">';

$(document).ready(function () {
  $(".placeTipImg").mouseover(function () {
    $("body").addClass("placeTipActive");
  });

  $(".placeTipX").click(function () {
    $("body").removeClass("placeTipActive");
  });

  $(".searchModalButton").click(function () {
    $("body").addClass("searchEventsModalActive");
    $("body").removeClass("placeTipActive");
  });

  $(".searchModalClose").click(function () {
    $("body").removeClass("searchEventsModalActive");
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
        items: 2,
      },
      1950: {
        items: 2,
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

  $(".nameButton").on("click", function (event) {
    event.preventDefault();
    $(".selectName")[0].sumo.unSelectAll();
  });
  $(".placeButton").on("click", function (event) {
    event.preventDefault();
    $(".selectPlace")[0].sumo.unSelectAll();
  });
  $(".showButton").on("click", function (event) {
    event.preventDefault();
    $(".selectShow")[0].sumo.unSelectAll();
  });
  $(".typeButton").on("click", function (event) {
    event.preventDefault();
    $(".selectType")[0].sumo.unSelectAll();
  });
  $(".genderButton").on("click", function (event) {
    event.preventDefault();
    $(".selectGender")[0].sumo.unSelectAll();
  });
});
