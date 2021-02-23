$(document).ready(function () {
  var nice = $("здесь класс или id блока для которого будет кастомизироваться скроллл. блок должен быть overflow: auto и его содержимое- больше чем он.").niceScroll(); // The document page (body)

  $(".scroll-block").html($(".scroll-block").html() + " ");

  $(".scroll-block").niceScroll({
    cursorborder: "",
    cursorcolor: "#29A7DC",
    boxzoom: true,
  }); // First scrollable DIV
});
