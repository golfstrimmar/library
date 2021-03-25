
$(document).ready(function (e) {
  $(".accordion__item--profile").each(function () {
    let array = Array.from($(this).find(".history .video-catalog__item"));

    let btn = $(this).find(".history__button");

    $(this)
      .find(".akr-title-js")
      .on("click", function () {
        if (array.length <= 3) {
          btn.css("opacity", "0");
        }

        $.each(array, function (index) {
          if (2 < index) {
            $(this).addClass("_hide").slideUp();
          }
        });
      });

    btn.on("click", function () {
      let number = $(this).parent().siblings("._hide:first").index();

      $(this).parent().prev().addClass("_last");

      $.each(array, function (index) {
        let i = number + 3;
        if (i > index) {
          $(this).slideDown(200).removeClass("_hide");

          if ($(this).hasClass("_last") && !$(this).hasClass("_hide")) {
            $(this).next().find(".history__button").css("opacity", "0");
          }
        }
      });
    });
  });
});

