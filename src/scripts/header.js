$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() >= 300) {
      $("body").addClass("menuActive");
    } else {
      $("body").removeClass("menuActive");
    }
  });

  $(".closeButtonModal").click(function () {
    if ($(window).width() <= 1024) {
      $("body").removeClass("modalLupaActive");
      $(".searchModalButton").removeClass("disabled");
      $("body").removeClass("inputLupaActive");
    }
  });

  $(".backgroundModal").click(function () {
    if ($(window).width() > 1024) {
      $("body").removeClass("modalLupaActive");
      $("body").removeClass("inputLupaActive");
    }
  });

  $(".lupa").click(function () {
    $("body").addClass("modalLupaActive");
  });

  $(".inputLupa").click(function () {
    $("body").addClass("inputLupaActive");
  });

  // modal esquerda hamburguer

  $(".modal").click(function () {
    $("body").toggleClass("menuDrop");
    if ($("body").hasClass("menuDrop")) {
      $(".searchModalButton").addClass("disabled");
    } else {
      $(".searchModalButton").removeClass("disabled");
    }
  });
});
