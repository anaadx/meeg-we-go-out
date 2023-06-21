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

    if ($(this).scrollTop() >= 5) {
      $("body").addClass("backgroundMenu");
    } else {
      $("body").removeClass("backgroundMenu");
    }
  });

  $(".closeButtonModal").click(function () {
    if ($(window).width() <= 1024) {
      $("body").removeClass("modalLupaActive");
      $(".searchModalButton").removeClass("disabled");
      $("body").removeClass("inputLupaActive");
      $(".lupaFloated").removeClass("disabled");
      $(".lupaStatic").removeClass("disabled");
      $(".containerLupaFloated").addClass("disabled");
    }
  });

  $(".backgroundModal").click(function () {
    if ($(window).width() > 1024) {
      $("body").removeClass("modalLupaActive");
      $("body").removeClass("inputLupaActive");
      $(".lupaFloated").removeClass("disabled");
      $(".lupaStatic").removeClass("disabled");
      $(".containerLupaStatic").addClass("disabled");
      $(".containerLupaFloated").addClass("disabled");
    }
  });

  $(".lupaStatic").click(function () {
    $("body").addClass("modalLupaActive");
    $(".searchModalButton").addClass("disabled");
    $(".lupaStatic").addClass("disabled");
    $(".containerLupaStatic").removeClass("disabled");
  });

  $(".lupaFloated").click(function () {
    $("body").addClass("modalLupaActive");
    $(".lupaFloated").addClass("disabled");
    $(".searchModalButton").addClass("disabled");
    $(".containerLupaStatic").addClass("disabled");
    $(".containerLupaFloated").removeClass("disabled");
  });

  $(".inputLupa").click(function () {
    $("body").addClass("inputLupaActive");
  });

  $(".modal").click(function () {
    $("body").toggleClass("menuDrop");
    if ($("body").hasClass("menuDrop")) {
      $(".searchModalButton").addClass("disabled");
    } else {
      $(".searchModalButton").removeClass("disabled");
    }
  });

  $(".lupa").click(function () {
    $("body").toggleClass("menuDropLupa");
  });
});
