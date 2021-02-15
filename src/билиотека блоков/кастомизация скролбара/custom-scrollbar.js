$(document).ready(function () {
  var nice = $("html").niceScroll(); // The document page (body)

  $(".scroll-block").html($(".scroll-block").html() + " ");

  $(".scroll-block").niceScroll({
    cursorborder: "",
    cursorcolor: "#29A7DC",
    boxzoom: true,
  }); // First scrollable DIV
});
