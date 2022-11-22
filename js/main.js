$(document).ready(function () {
  //Fullpage
  var portfolio = new fullpage("#fullpage", {
    verticalCentered: true,
    anchors: ["anchor1", "anchor2", "anchor3", "anchor4", "anchor5", "anchor6"],
    menu: ".nav_flex",
    slidesNavigation: true,
    normalScrollElements: ".modal",
  });

  //Modal open
  $(".open-modal").on("click", function () {
    var state = $(this).data("state");
    $("#modal" + state).fadeIn();
  });
  //background press close
  $(".madal-bg").on("click", function () {
    $(".modal").fadeOut();
  });
  //close press close
  $(".close").on("click", function () {
    $(".modal").fadeOut();
  });

  //mobile menu
  (function () {
    $(".side_toggle").on("click", function () {
      $(".menu_bar").toggleClass("animate");
      var mobileNav = $(".mobile_menu");
      mobileNav.toggleClass("hide show");
    });
  })();

  //slick-custom
  var $slider1 = $(".multiple_items1");
  var $progressBar1 = $(".progress1");
  var $progressBarLabel1 = $(".slider__label1");

  $slider1.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;

    $progressBar1
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    $progressBarLabel1.text(calc + "% completed");
  });

  $(".multiple_items1").slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 400,
    prevArrow: $(".slick-prev1"),
    nextArrow: $(".slick-next1"),
    responsive: [
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  var $slider2 = $(".multiple_items2");
  var $progressBar2 = $(".progress2");
  var $progressBarLabel2 = $(".slider__label2");

  $slider2.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;

    $progressBar2
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    $progressBarLabel2.text(calc + "% completed");
  });

  $(".multiple_items2").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    prevArrow: $(".slick-prev2"),
    nextArrow: $(".slick-next2"),
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });

  var $slider3 = $(".multiple_items3");
  var $progressBar3 = $(".progress3");
  var $progressBarLabel3 = $(".slider__label3");

  $slider3.on("beforeChange", function (event, slick, currentSlide, nextSlide) {
    var calc = (nextSlide / (slick.slideCount - 1)) * 100;

    $progressBar3
      .css("background-size", calc + "% 100%")
      .attr("aria-valuenow", calc);

    $progressBarLabel3.text(calc + "% completed");
  });

  $(".multiple_items3").slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 400,
    prevArrow: $(".slick-prev3"),
    nextArrow: $(".slick-next3"),
    responsive: [
      {
        breakpoint: 1030,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 830,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  });
});
