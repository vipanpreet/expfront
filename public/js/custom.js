// $(window).scroll(function () {
//   if ($(this).scrollTop() < 100) {
//     $(".nav").css({
//       display: "flex",
//     });
//   } else {
//     $(".nav").css({
//       display: "none",
//     });
//   }
// });
// Nav hamburger
$(document).ready(function () {
  // $(".hamburger").click(function () {
  //   $(this).toggleClass("is-active");
  //   $(".nav__bar").toggleClass("is-active");
  // });

  // $(".cart--trigger").click(function () {
  //   $(".nav__cart").addClass("is-active");
  //   $(".nav__icons--x").addClass("bring-x");
  // });
  $(".nav__icons--x").click(function () {
    $(".nav__cart").removeClass("is-active");
    $(this).removeClass("bring-x");
  });

  $("#nav-uppers").hover(function () {
    $(".nav__bar__container--image").children().attr("src", "/assets/sections/nav-upper.jpg");
  });
  $("#nav-home").hover(function () {
    $(".nav__bar__container--image").children().attr("src", "/assets/sections/navigation-woman.jpg");
  });
  $("#nav-accessories").hover(function () {
    $(".nav__bar__container--image").children().attr("src", "/assets/sections/nav-accessories.jpg");
  });
  $("#nav-footwear").hover(function () {
    $(".nav__bar__container--image").children().attr("src", "/assets/sections/nav-foot.jpg");
  });
  $("#nav-health").hover(function () {
    $(".nav__bar__container--image").children().attr("src", "/assets/sections/nav-health.jpg");
  });
});

let menuitem = $(".pothers__menu--item");
let menubody = $(".pothers__body--item");

let menuDesc = $(".pothers__menu--desc");
let menuAdd = $(".pothers__menu--add");
let menuRev = $(".pothers__menu--rev");

let bodyDesc = $(".pothers__body--desc");
let bodyAdd = $(".pothers__body--add");
let bodyRev = $(".pothers__body--rev");

$(menuitem).on("click", (e) => {
  if (!$(e.currentTarget).hasClass("active")) {
    $(e.currentTarget).addClass("active");
    $(e.currentTarget).siblings().removeClass("active");
  }
});

$(menuDesc).click((e) => {
  $(bodyDesc).addClass("display-block");
  $(bodyDesc).siblings().removeClass("display-block");
});
$(menuAdd).click((e) => {
  $(bodyAdd).addClass("display-block");
  $(bodyAdd).siblings().removeClass("display-block");
});
$(menuRev).click((e) => {
  $(bodyRev).addClass("display-block");
  $(bodyRev).siblings().removeClass("display-block");
});

// Image system
let imgtemp = $(".imgtmp");
let imgmain = $(".pdetails__img--main");

$(imgtemp).click((e) => {
  let getImg = $(e.currentTarget).children().attr("src");
  $(imgmain).children().attr("src", getImg);
});
