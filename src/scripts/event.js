const nextBtn = '<img src="../assets/seta-pink-dir.svg" alt:"seta direita">';
const prevBtn = '<img src="../assets/seta-pink-esq.svg" alt:"seta esquerda">';
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
      },
      800: {
        items: 2,
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
