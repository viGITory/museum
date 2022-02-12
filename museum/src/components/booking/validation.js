export default class FormValidation {
  constructor() {
    this.userName = document.querySelector('[data-form=username]');
    this.userEmail = document.querySelector('[data-form=email]');
    this.userTel = document.querySelector('[data-form=tel]');

    this.errorMessage = document.createElement('p');
    this.errorMessage.classList.add('booking__error');
  }

  showError = (regexp, str, elem) => {
    if (elem.value === '') {
      this.removeError(elem);
    } else if (!regexp.test(elem.value)) {
      elem.insertAdjacentElement('afterend', this.errorMessage);
      this.errorMessage.textContent = str;
      elem.classList.add('js-error');
    } else {
      this.removeError(elem);
    }
  };

  removeError = (elem) => {
    this.errorMessage.remove();
    elem.classList.remove('js-error');
  };

  addListeners() {
    document.addEventListener('input', (event) => {
      if (event.target === this.userName) {
        const str = 'Example: Люк Skywalker';
        const pattern = /^[a-zа-яё\s]{3,15}$/i;

        this.showError(pattern, str, this.userName);
      } else if (event.target === this.userEmail) {
        const str = `Example: obi-wan_kenobi1@email.ru`;
        const pattern = /^[a-z\d_\-]{3,15}@[a-z]{4,}.[a-z]{2,}/i;

        this.showError(pattern, str, this.userEmail);
      } else if (event.target === this.userTel) {
        const str = `Example: 123 456-78-90 or 1234567890`;
        const pattern =
          /^([\d]{2,3}?[-\s])([\d]{2,3}?[-\s])?([\d]{2,3}?[-\s])?([\d]{2,3})$|^\d{2,10}$/;

        this.showError(pattern, str, this.userTel);
      }
    });
  }

  init() {
    this.addListeners();
  }
}
