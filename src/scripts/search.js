const nextBtn = '<img src="src/assets/seta-dir.svg" alt:"seta direita">';
const prevBtn = '<img src="src/assets/seta-esq.svg" alt:"seta esquerda">';
const nextBtnDark =
  '<img src="../assets/seta-dir-dark.svg" alt:"seta direita">';
const prevBtnDark =
  '<img src="../assets/seta-esq-dark.svg" alt:"seta esquerda">';

$(document).ready(function () {
  $(".carouselEvents").owlCarousel({
    loop: false,
    navSpeed: 500,
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
      1024: {
        items: 4,
      },
      1950: {
        items: 4,
      },
    },
  });

  $(".carouselLaunch").owlCarousel({
    navSpeed: 500,
    loop: false,
    center: false,
    margin: 20,
    responsiveClass: true,
    navText: [prevBtnDark, nextBtnDark],
    nav: true,
    dots: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 1,
        margin: 10,
        nav: false,
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
    navText: [prevBtnDark, nextBtnDark],
    nav: true,
    dots: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 1,
        nav: false,
        margin: 10,
      },
      700: {
        items: 2,
        nav: false,
        margin: 10,
      },
      1024: {
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
    margin: 20,
    responsiveClass: true,
    navText: [prevBtnDark, nextBtnDark],
    nav: true,
    dots: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 3,
        margin: 10,
        nav: false,
      },
      940: {
        items: 3,
        margin: 10,
        nav: false,
      },
      1024: {
        items: 8,
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
    margin: 20,
    responsiveClass: true,
    nav: true,
    navText: [prevBtnDark, nextBtnDark],
    dots: false,
    autoWidth: false,
    responsive: {
      0: {
        items: 3,
        margin: 10,
        nav: false,
      },
      350: {
        items: 3,
        margin: 10,
        nav: false,
      },
      1024: {
        items: 6,
      },
      1500: {
        items: 6,
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
