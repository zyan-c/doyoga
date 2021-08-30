//space-intro.html 課程推薦
var spaceIntroSwiper= new Swiper(".space-intro-swiper", {
  slidesPerView: 1.5,
  spaceBetween: 30,
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 4.3,
      spaceBetween: 20,
    },
  },
  centeredSlides: false,
});
//course-intro.html 師資介紹
var courseIntroSwiper = new Swiper(".course-intro-swiper", {
  slidesPerView: 1,
  spaceBetween: 30,  
  breakpoints: {
    768: {
      slidesPerView: 2.1,
      spaceBetween: 30,
    },
    992: {
      slidesPerView: 3.1,
      spaceBetween: 30,
    },
  },
  centeredSlides: false,
});

// 主頁
var indexLgCourseSwiper = new Swiper(".index-lg-course-swiper", {
  slidesPerView: 1.2,
  spaceBetween: 30,
  centeredSlides: false,
});

//index testmonial version3 testing
var jsSwiperUserRecommand = new Swiper(".js-swiper-user-recommand", {
  slidesPerView: 1,
      //為什麼這裡的 spacebetween 改成 8 就破版（所有斷點的全部li都變成一排 column，間隙寬度也不一） 
      // 原本以為是控制 li 跟 li 的spacing，看來不是，那要在每個 li 套用 spacing class(md-0)？
      spaceBetween: 0,
      grid: {
        rows: 3,
        fill: 'column',
      },
      autoplay: {
        delay: 3500,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        768: {
          slidesPerView: 2.15,
          grid: {
            rows: 2,
            fill: 'row',
          },
          spaceBetween: 30,
        },
        992: {
          slidesPerView: 3,
          grid: {
            rows: 2,
            fill: 'row',
          },
          spaceBetween: 30,
        },
      },
});

// index testimonial version2 testing
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