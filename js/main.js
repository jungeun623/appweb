window.onload = function () {
  const swPromotion = new Swiper(".sw-promotion", {
    // swiper ===========
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    grid: {
      rows: 1,
      fill: "row",
    },
    pagination: {
      el: ".sw-promotion-pg ",
      clickable: true,
    },
  });
  const swMeal = new Swiper(".sw-medal", {
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
   
    breakpoints: {
      480:{
        slidesPerView: 2,
        spaceBetween: 30,
      }
    },
  });
};
// breakpoints: {
//   480: {
//     spaceBetween: 32,
//     slidesPerView: 2,
//     slidesPerGroup: 2,
//     grid: {
//       rows: 2,
//     },
//   },
//   1280: {
//     spaceBetween: 26,
//     slidesPerView: 1,
//     // slidesPerGroup: 3,
//   },
// },
