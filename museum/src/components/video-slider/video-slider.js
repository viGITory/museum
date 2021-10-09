const videoSlider = new Swiper('.video-slider', {
  loop: true,
  pagination: {
    el: '.video-slider__bullets',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  breakpoints: {
    1024: {
      spaceBetween: 42,
      slidesPerView: 3
    },
    420: {
      spaceBetween: 20,
      slidesPerView: 2
    },
    0: {
      spaceBetween: 10,
      slidesPerView: 2
    },
  }
});

export default videoSlider;
