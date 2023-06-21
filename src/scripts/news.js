const nextBtn = '<img src="../assets/seta-dir.svg" alt:"seta direita">';
const prevBtn = '<img src="../assets/seta-esq.svg" alt:"seta esquerda">';
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
      $(".moreItems").addClass("disabled");
    } else {
      $(".moreItems").removeClass("disabled");
    }
  }

  $(".goSearch").click(function () {
    $("body").addClass("filterSearchMode");
    if ($(window).width() <= 1024) {
      $(".advertisement").addClass("disabled");
    }
  });

  disableFixedItems();

  function disableItems() {
    if ($(window).width() <= 1024) {
      $(".orderby").addClass("disabled");
      $(".lastWave").addClass("disabled");
      $(".launchWave").addClass("disabled");
      $(".pictureDesk").addClass("disabled");
      $(".findEvent").addClass("disabled");
      $(".footerSearch").addClass("disabled");
    } else {
      $(".footerSearch").removeClass("disabled");
      $(".sendEventImg").removeClass("disabled");
      $(".lastWave").removeClass("disabled");
      $(".pictureDesk").removeClass("disabled");
      $(".launchWave").removeClass("disabled");
      $(".findEvent").removeClass("disabled");
      $(".orderby").removeClass("disabled");
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
      } else {
      }
    }
  });

  $(".lupa").click(function () {
    $("body").toggleClass("menuDropLupa");
  });
});
