import $ from "jquery";





$(document).ready(function () {
  let pop = $(".popup");
  let button = $(".btn-popup");
  let close = $(".popup__close");
  pop.fadeOut(1);

  button.on("click", function () {
    pop.fadeIn(200);
    $("body").css("overflow", "hidden");
  });

  close.on("click", function () {
    pop.fadeOut(200);
    $("body").css("overflow", "visible");
  });
});


  $(document).on("mouseup", function (e) {
    if ($(".popup__overlay").is(e.target)) {
      let pop = $(".popup");
      pop.fadeOut(200);
      $("body").css("overflow", "visible");
    }
  });