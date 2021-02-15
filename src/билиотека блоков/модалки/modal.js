import $ from "jquery";



// одиночная модалка
$(document).ready(function () {
  let pop = $(".popup");
  let button = $(".popup-init-js");
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



// 4 модалки

$(document).ready(function () {
  let Popups = $(".popups");
  Popups.fadeOut(200);
  $(".popups-init-js").on("click", function () {
    let rel = $(this).attr("rel");
    let pop = $("div." + rel);
    pop.fadeIn(200);
    $("body").css("overflow", "hidden");
  });

  $(".close-js").on("click", function () {
    Popups.fadeOut(200);
    $("body").css("overflow", "visible");
  });

  $(document).on("mouseup", function (e) {
    if ($(".popups__overlay").is(e.target)) {
      Popups.fadeOut(200);
      $("body").removeClass("lock");
      $("body").css("overflow", "visible");
    }
  });
});






// модалки с плеерами.

import Plyr from "plyr";
$(document).ready(function () {
  let Popup = $(".popup-player");
  Popup.fadeOut(200);
  const player1 = new Plyr(".player-1");
  const player2 = new Plyr(".player-2");
  const player3 = new Plyr(".player-3");
  const player4 = new Plyr(".player-4");

  $(".popup-player-init-js").on("click", function () {
    let rel = $(this).attr("rel");
    let pop = $("div." + rel);
    pop.fadeIn(200);
    $("body").css("overflow", "hidden");
  });

  $(".close-js").on("click", function () {
    Popup.fadeOut(200);
    $("body").css("overflow", "visible");
    player1.stop();
    player2.stop();
    player3.stop();
    player4.stop();
  });

  $(document).on("mouseup", function (e) {
    if ($(".popup-player__overlay").is(e.target)) {
      Popup.fadeOut(200);
      $("body").removeClass("lock");
      $("body").css("overflow", "visible");
      player1.stop();
      player2.stop();
      player3.stop();
      player4.stop();
    }
  });
});
