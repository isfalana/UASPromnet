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

// side bar
const hamburger = document.getElementById("hamburger-menu");
const menu = document.querySelector("#nav-li");

hamburger.addEventListener("click", (e) => {
  menu.classList.toggle("ada");
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !menu.contains(e.target)) {
    menu.classList.remove("ada");
  }
});

//show the carousel
document.addEventListener("DOMContentLoaded", function () {
  var corusel = document.querySelector(".corusel");
  var imgSlides = document.querySelectorAll(".img-slide");
  var navigationLinks = document.querySelectorAll(".navigation-corusel a");
  var currentIndex = 0;

  function showSlide(index) {
    corusel.style.transform = "translateX(" + -index * 100 + "%)";
    navigationLinks.forEach(function (link) {
      link.classList.remove("active");
    });
    navigationLinks[index].classList.add("active");
  }

  function showNextSlide() {
    currentIndex = (currentIndex + 1) % imgSlides.length;
    showSlide(currentIndex);
  }

  function showPrevSlide() {
    currentIndex = (currentIndex - 1 + imgSlides.length) % imgSlides.length;
    showSlide(currentIndex);
  }

  function autoSlide() {
    showNextSlide();
  }

  document.getElementById("next-Btn").addEventListener("click", showNextSlide);
  document.getElementById("prev-Btn").addEventListener("click", showPrevSlide);

  navigationLinks.forEach(function (link, index) {
    link.addEventListener("click", function (event) {
      event.preventDefault();
      currentIndex = index;
      showSlide(currentIndex);
    });
  });

  var autoSlideInterval = setInterval(autoSlide, 3000);

  corusel.addEventListener("mouseenter", function () {
    clearInterval(autoSlideInterval);
  });

  corusel.addEventListener("mouseleave", function () {
    autoSlideInterval = setInterval(autoSlide, 2000);
  });

  showSlide(currentIndex);
});

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
  if (wScroll > $(".contactus").offset().top - 100) {
    $(".instagram").addClass("ada");
  }
  if (wScroll > $(".contactus").offset().top - 80) {
    $(".wa1").addClass("ada");
  }
  if (wScroll > $(".contactus").offset().top - 60) {
    $(".wa2").addClass("ada");
  }
  if (wScroll > $(".contactus").offset().top - 40) {
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
