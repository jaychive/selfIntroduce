const swiper = new Swiper("#swiper1", {
  slidesPerView: 3,
  spaceBetween: 10,
  loop: true,
  centeredSlides: true,
  autoplay: {
    delay: 1000,
    disableOnInteraction: false,
  },

  disableOnInteraction: false,

  breakpoints: {
    768: {
      slidesPerView: 5,
      spaceBetween: 30,
    },
  }
});
