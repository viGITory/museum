const headerNav = document.querySelector('.main-header__nav');
const burgerBtn = document.querySelector('.main-header__button');
const welcomeText = document.querySelector('.welcome__wrapper');

burgerBtn.addEventListener('click', () => {
  headerNav.classList.toggle('js-show-nav');
  burgerBtn.classList.toggle('js-open-burger');
  welcomeText.classList.toggle('js-hide-welcome');
});
