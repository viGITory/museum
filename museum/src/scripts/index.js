//- *** STYLES ***
import 'swiper/css/bundle';
import '../styles/style.scss';

//- *** COMPONENTS ***
import '../components/main-header/header-nav.js';
import '../components/welcome-slider/welcome-slider.js';
import '../components/video-player/video-player.js';
import videoSlider from '../components/video-slider/video-slider.js';
import '../components/compare-slider/compare-slider.js';
import ticketsSlider from '../components/tickets-slider/tickets-slider.js';
import createGallery from '../components/gallery/gallery.js';
import showModal from '../components/booking-modal/booking-modal.js';
import FormValidation from '../components/booking/validation.js';
import addRipple from '../components/booking-overview/booking-overview.js';
import '../components/contacts/map.js';

new FormValidation().init();

// *** SELF-RATE ***
import './self-rate.js';
