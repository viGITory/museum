import Swiper from 'swiper/bundle';
import { dropVideoProgress } from '../video-player/video-player.js';

const videos = [
  {
    src: 'assets/video/video1.mp4',
    poster: 'assets/images/video-posters/poster1.jpg',
  },
  {
    src: 'assets/video/video2.mp4',
    poster: 'assets/images/video-posters/poster2.jpg',
  },
  {
    src: 'assets/video/video3.mp4',
    poster: 'assets/images/video-posters/poster3.jpg',
  },
  {
    src: 'assets/video/video4.mp4',
    poster: 'assets/images/video-posters/poster4.jpg',
  },
  {
    src: 'assets/video/video5.mp4',
    poster: 'assets/images/video-posters/poster5.jpg',
  },
];

const pagination = document.querySelector('.video-slider__pagination');

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
    769: {
      spaceBetween: 42,
      slidesPerView: 3,
    },
    420: {
      spaceBetween: 20,
      slidesPerView: 2,
    },
    0: {
      spaceBetween: 10,
      slidesPerView: 2,
    },
  },
});

pagination.addEventListener('click', (event) => {
  const video = document.querySelector('.video-player__screen');
  const bullets = pagination.querySelectorAll(
    '.video-slider__bullets > .swiper-pagination-bullet'
  );

  const currentIndex = [...bullets].findIndex((item) =>
    item.classList.contains('swiper-pagination-bullet-active')
  );

  if (
    !event.target.classList.contains('swiper-pagination-bullet') &&
    !event.target.classList.contains('video-slider__arrow')
  )
    return;

  dropVideoProgress();
  video.src = videos[currentIndex].src;
  video.poster = videos[currentIndex].poster;
});
