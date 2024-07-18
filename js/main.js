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
  const swPromotionB = new Swiper(".sw-promotion-mobile",{
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
  })
};