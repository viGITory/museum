const showModal = () => {
  const buyBtn = document.querySelector('.buy-btn');
  const booking = document.querySelector('.booking');
  const closeBtn = booking.querySelector('.booking__close-btn');
  const overlay = document.querySelector('.booking-overlay');

  const toggleModal = () => {
    booking.classList.toggle('js-show-booking');
    overlay.classList.toggle('js-show-overlay');
    closeBtn.classList.toggle('js-show-close-btn');
  }

  buyBtn.addEventListener('click', toggleModal);
  closeBtn.addEventListener('click', toggleModal);
  overlay.addEventListener('click', toggleModal);
}
showModal();

export default showModal;
