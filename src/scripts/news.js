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
  });

  function disableFixedItems() {
    if ($(window).width() <= 1024) {
      $(".advertisement").addClass("disabled");
      $(".moreItems").addClass("disabled");
    } else {
      $(".moreItems").removeClass("disabled");
      $(".advertisement").removeClass("disabled");
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
      $(".footerWave3").removeClass("disabled");
      $(".footerWave2").addClass("disabled");
      $(".orderby").addClass("disabled");
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
      $(".orderby").removeClass("disabled");
      $(".footerWave3").addClass("disabled");
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
