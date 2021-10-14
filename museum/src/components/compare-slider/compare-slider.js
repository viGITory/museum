const divider = document.querySelector('.compare-slider__divider');

const compareImages = (event) => {
  const containerCoords = document.querySelector('.compare-slider').getBoundingClientRect();
  const imgAfter = document.querySelector('.compare-slider__after');

  const dividerHalf = divider.offsetWidth / 2;
  const dividerPos = event.clientX - dividerHalf - containerCoords.left;

  if (dividerPos < (0 - dividerHalf) || dividerPos > (containerCoords.width - dividerHalf)) {
    return;
  }

  divider.style.left = `${dividerPos / containerCoords.width * 100}%`;
  imgAfter.style.width = `${(dividerPos + dividerHalf) / containerCoords.width * 100}%`;
};

divider.addEventListener('pointerdown', (event) => {
  event.preventDefault();
  document.addEventListener('pointermove', compareImages);
});

document.addEventListener('pointerup', () => {
  document.removeEventListener('pointermove', compareImages);
});

divider.addEventListener('touchstart', (event) => {
  event.preventDefault();
  document.addEventListener('touchmove', compareImages);
});

document,addEventListener('touchend', () => {
  document.removeEventListener('touchmove', compareImages);
});
