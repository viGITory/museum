export const addRipple = () => {
  const button = document.querySelector('.booking-overview__button');

  button.addEventListener('click', (event) => {
    event.preventDefault();

    const coords = event.target.getBoundingClientRect();
    const x = event.clientX - coords.x;
    const y = event.clientY - coords.y;

    const circle = document.createElement('span');
    circle.classList.add('js-ripple-circle');
    circle.style.top = y + 'px';
    circle.style.left = x + 'px';

    event.target.appendChild(circle);

    setTimeout(() => circle.remove(), 500);
  });
};
addRipple();
