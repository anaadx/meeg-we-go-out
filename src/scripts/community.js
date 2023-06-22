const nextBtn = '<img src="../assets/seta-dir.svg" alt:"seta direita">';
const prevBtn = '<img src="../assets/seta-esq.svg" alt:"seta esquerda">';
const nextBtnDark =
  '<img src="../assets/seta-dir-dark.svg" alt:"seta direita">';
const prevBtnDark =
  '<img src="../assets/seta-esq-dark.svg" alt:"seta esquerda">';

$(document).ready(function () {
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
});
