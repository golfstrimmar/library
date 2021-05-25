import $ from "jquery";
// ------------------------------------------------


// --------------------------------------------------------------------------
 $(window).scroll(function () {
   var $article = $("article");

   $article.each(function (i, el) {

     var top = $(el).offset().top - 100;
     var bottom = top + $(el).height();
     var scroll = $(window).scrollTop();
     var id = $(el).attr("id");

     if (scroll > top && scroll < bottom) {
       $("a.art_inner-vidget-item--active").removeClass(
         "art_inner-vidget-item--active"
       );
       $('a[href="#' + id + '"').addClass("art_inner-vidget-item--active");
     }
   });

 });




$(".art_inner__vidget").on("click", "a", function (event) {
  // исключаем стандартную реакцию браузера
  event.preventDefault();

  // получем идентификатор блока из атрибута href
  var id = $(this).attr("href"),
    // находим высоту, на которой расположен блок
    top = $(id).offset().top;

  $("a").removeClass(
    "art_inner-vidget-item--active"
  );

  $(this).addClass("art_inner-vidget-item--active");
  // анимируем переход к блоку, время: 800 мс
  $("body,html").animate({ scrollTop: top }, 800);
});




 