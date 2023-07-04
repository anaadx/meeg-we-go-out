const nextBtn = '<img src="../assets/seta-pink-dir.svg" alt:"seta direita">';
const prevBtn = '<img src="../assets/seta-pink-esq.svg" alt:"seta esquerda">';
const nextBtnDark =
  '<img src="../assets/seta-dir-dark.svg" alt:"seta direita">';
const prevBtnDark =
  '<img src="../assets/seta-esq-dark.svg" alt:"seta esquerda">';

$(document).ready(function () {
  if ($(window).width() <= 1024) {
    $(".listLaunchItems").addClass("owl-carousel");
    $(".listLaunchItems").addClass("owl-theme");
    $(".listLaunchItems").addClass("carouselLastLaunch");
  }

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
      },
      1080: {
        items: 6,
      },
      1500: {
        items: 8,
      },
    },
  });

  $(".carouselLastLaunch").owlCarousel({
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
      },
      700: {
        items: 2,
      },
      1500: {
        items: 3,
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
