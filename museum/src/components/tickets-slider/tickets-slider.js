import Swiper from 'swiper/bundle';

const ticketsSlider = new Swiper('.tickets-slider', {
  loop: true,
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true
  },
});

export default ticketsSlider;
