export const compareImages = () => {
  const divider = document.querySelector('.compare-slider__divider');

  const compare = (event) => {
    const containerCoords = document.querySelector('.compare-slider').getBoundingClientRect();
    const imgAfter = document.querySelector('.compare-slider__after');

    const dividerHalf = divider.offsetWidth / 2;
    const dividerPos = event.clientX - dividerHalf - containerCoords.left;

    if (dividerPos < (0 - dividerHalf) || dividerPos > (containerCoords.width - dividerHalf)) {
      return;
    }

    divider.style.left = `${dividerPos}px`;
    imgAfter.style.width = `${dividerPos + dividerHalf}px`;
  };

  divider.addEventListener('pointerdown', (event) => {
    event.preventDefault();
    document.addEventListener('pointermove', compare);
  });

  document.addEventListener('pointerup', () => {
    document.removeEventListener('pointermove', compare);
  });
}
compareImages();
