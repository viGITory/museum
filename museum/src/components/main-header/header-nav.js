const headerNav = document.querySelector('.main-header__nav');
const burgerBtn = document.querySelector('.main-header__button');
const welcomeText = document.querySelector('.welcome__wrapper');

burgerBtn.addEventListener('click', () => {
  headerNav.classList.toggle('js-show-nav');
  burgerBtn.classList.toggle('js-open-burger');
  welcomeText.classList.toggle('js-hide-welcome');
});

const hideNav = () => {
  headerNav.classList.remove('js-show-nav');
  burgerBtn.classList.remove('js-open-burger');
  welcomeText.classList.remove('js-hide-welcome');
};

window.addEventListener('resize', () => {
  if (document.body.clientWidth >= 1920) hideNav();
});

document.addEventListener('click', (event) => {
  if (!(event.target.classList.contains('burger-btn')) &&
      !(event.target === headerNav) &&
      !(event.target.classList.contains('main-header__menu'))) {
    hideNav();
  }
});
