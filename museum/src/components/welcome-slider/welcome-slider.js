const currentSlide = document.querySelector('.welcome-slider__current-slide');

const swiper = new Swiper('.swiper', {
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
});

swiper.on('slideChange', function() {
  currentSlide.textContent = `0${this.realIndex + 1}`;
});
