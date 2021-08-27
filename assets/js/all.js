"use strict";

//space-intro.html 課程推薦
var spaceIntroSwiper = new Swiper(".space-intro-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 4.3,
      spaceBetween: 20
    }
  },
  centeredSlides: false
}); //course-intro.html 師資介紹

var courseIntroSwiper = new Swiper(".course-intro-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 2.1,
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3.1,
      spaceBetween: 30
    }
  },
  centeredSlides: false
}); // 主頁

var indexLgCourseSwiper = new Swiper(".index-lg-course-swiper", {
  slidesPerView: 1.2,
  spaceBetween: 30,
  centeredSlides: false
});
//# sourceMappingURL=all.js.map
