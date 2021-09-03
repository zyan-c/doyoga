"use strict";

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
}); //booking-optionv2 

var bookingOptionSwiper = new Swiper(".booking-option-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  grid: {
    rows: 3,
    fill: 'column'
  },
  breakpoints: {
    768: _defineProperty({
      slidesPerView: 2.1,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row'
      }
    }, "spaceBetween", 30),
    992: {
      slidesPerView: 3,
      grid: {
        rows: 1,
        fill: 'row'
      },
      spaceBetween: 30
    }
  }
}); //index testmonial version3

var jsSwiperUserRecommand = new Swiper(".js-swiper-user-recommand", {
  slidesPerView: 1,
  spaceBetween: 0,
  grid: {
    rows: 3,
    fill: 'column'
  },
  autoplay: {
    delay: 3500,
    disableOnInteraction: false
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  },
  breakpoints: {
    768: {
      slidesPerView: 2.15,
      grid: {
        rows: 2,
        fill: 'row'
      },
      spaceBetween: 30
    },
    992: {
      slidesPerView: 3,
      grid: {
        rows: 2,
        fill: 'row'
      },
      spaceBetween: 30
    }
  }
}); // datepicker

var elem = document.querySelector('input[name="datepicker"]');
var datepicker = new Datepicker(elem, {
  // 套用 BS 的 .btn 樣式（拿掉的話就是原始 button 樣式）
  buttonClass: 'btn',
  nextArrow: '>',
  prevArrow: '<'
}); // index testimonial version2 testing
// var testimonialOneSwiper = new Swiper(".testimonial-one-swiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   breakpoints: {
//     768: {
//       slidesPerView: 2.1,
//       spaceBetween: 30,
//     },
//     992: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   },
//   centeredSlides: false,
// });
// var testimonialTwoSwiper = new Swiper(".testimonial-two-swiper", {
//   slidesPerView: 1,
//   spaceBetween: 30,
//   breakpoints: {
//     768: {
//       slidesPerView: 2.1,
//       spaceBetween: 30,
//     },
//     992: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   },
//   centeredSlides: false,
// });
//# sourceMappingURL=all.js.map
