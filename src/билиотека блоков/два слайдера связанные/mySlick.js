import $ from "jquery";
// import "./slick.js";


$(Document).ready(function () {
  $(".slider-js-1").slick({
    dots: true,
    // arrows: false,
    slidesToShow: 5,
    speed: 800,
    easing: "ease",
    // cssEase: "linear",
    centerMode: false,
    asNavFor: ".slider-js-2",
    // autoplay: true,
    // autoplaySpeed: 2000,
    // centerMode: true,
    // infinite: true,
    // initialSlide: 10,
    // pauseOnFocus: true,
    // pauseOnHover: true,
    // customPaging: function (slider, i) {
    //   var current = i + 1;
    //   current = current < 10 ? "" + current : current;

    //   var total = slider.slideCount;
    //   total = total < 10 ? "" + total : total;

    //   return (
    //     '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
    // 		<span class="slick-dots-current">' +
    //     current +
    //     '</span>\
    // 		<span class="slick-dots-separator">из</span>\
    // 		<span class="slick-dots-total">' +
    //     total +
    //     "</span></button>"
    //   );
    // },
   

  });

   $("<i>", {
     class: $(".slider-js-1 ").attr("data-prev"),
   }).appendTo(".slider-js-1  .slick-prev");
   $("<i>", {
     class: $(".slider-js-1").attr("data-next"),
   }).appendTo(".slider-js-1 .slick-next");





  $(".slider-js-2").slick({
    dots: true,
    // arrows: false,
    slidesToShow: 1,
    speed: 800,
    easing: "ease",
    // cssEase: "linear",
    // centerMode: false,
    // autoplay: true,
    // autoplaySpeed: 2000,
    // centerMode: true,
    infinite: true,
    asNavFor: ".slider-js-1",
    // initialSlide: 1,
    // pauseOnFocus: true,
    // pauseOnHover: true,
    // customPaging: function (slider, i) {
    //   var current = i + 1;
    //   current = current < 10 ? "" + current : current;

    //   var total = slider.slideCount;
    //   total = total < 10 ? "" + total : total;

    //   return (
    //     '<button type="button" role="button" tabindex="0" class="slick-dots-button">\
    // 		<span class="slick-dots-current">' +
    //     current +
    //     '</span>\
    // 		<span class="slick-dots-separator">из</span>\
    // 		<span class="slick-dots-total">' +
    //     total +
    //     "</span></button>"
    //   );
    // },
  });

   $("<i>", {
     class: $(".slider-js-2").attr("data-prev"),
   }).appendTo(".slider-js-2  .slick-prev");
   $("<i>", {
     class: $(".slider-js-2").attr("data-next"),
   }).appendTo(".slider-js-2  .slick-next");




});