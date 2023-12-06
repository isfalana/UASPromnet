// const div1Element = document.querySelector(div.div1);

// const div1Observer = new IntersectionObserver(
//   (entries) => {
//     const [entry] = entries;

//     if (!entry.isIntersecting) {
//       document.querySelector("nav").classList.add("scrolled");
//       console.log("p");
//     }
//   },
//   { threshold: 0.9 }
// );

// div1Observer.observe(div1Element);

// paralax
$(window).scroll(function () {
  var wScroll = $(this).scrollTop();

  //   $(".div1").css({
  //     transform: "translate(0px, " + wScroll / 10 + "%)",
  //   });
  //   console.log(wScroll);

  // portofolio
  if (wScroll > $(".div-offer").offset().top - 500) {
    // console.log("ok");
    $(".div-offer .h1-buy").addClass("ada");
  }
  if (wScroll > $(".div-offer").offset().top - 450) {
    $(".div-offer .text-buy").addClass("ada");
  }
  if (wScroll > $(".btn-offer").offset().top - 500) {
    $(".btn-offer").addClass("ada");
  }
  if (wScroll > $(".About").offset().top - 400) {
    $(".h1-about").addClass("ada");
  }
  if (wScroll > $(".h1-menu").offset().top - 400) {
    $(".h1-menu").addClass("ada");
  }
  if (wScroll > $(".container").offset().top - 280) {
    $(".img-about").addClass("ada");
  }
  if (wScroll > $(".container").offset().top - 280) {
    $(".about-paragraph").addClass("ada");
  }
  if (wScroll > $(".container").offset().top - 200) {
    $(".p-about").addClass("ada");
  }
  if (wScroll > $(".contactus").offset().top - 400) {
    $(".h1-contact").addClass("ada");
  }
  if (wScroll > $(".contactus").offset().top - 250) {
    $(".judul").addClass("ada");
  }
  if (wScroll > $(".contactus").offset().top - 250) {
    $(".judul").addClass("ada");
  }
  if (wScroll > $(".contactus").offset().top - 250) {
    $(".judul").addClass("ada");
  }
  if (wScroll > $(".contactus").offset().top - 200) {
    $(".instagram").addClass("ada");
  }
  if (wScroll > $(".contactus").offset().top - 150) {
    $(".wa1").addClass("ada");
  }
  if (wScroll > $(".contactus").offset().top - 100) {
    $(".wa2").addClass("ada");
  }
  if (wScroll > $(".contactus").offset().top - 50) {
    $(".email").addClass("ada");
  }

  if (wScroll > $(".card").offset().top - 300) {
    $(".card").each(function (i) {
      setTimeout(function () {
        $(".card").eq(i).addClass("ada");
      }, 200 * (i + 1));
    });
  }
});
