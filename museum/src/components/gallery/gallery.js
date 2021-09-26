const createGallery = () => {
  const galleryContainer = document.querySelector('.gallery__wrapper');
  const galleryImages = ['assets/images/gallery/gallery1.jpg', 'assets/images/gallery/gallery2.jpg', 'assets/images/gallery/gallery3.jpg',
                         'assets/images/gallery/gallery4.jpg', 'assets/images/gallery/gallery5.jpg', 'assets/images/gallery/gallery6.jpg',
                         'assets/images/gallery/gallery7.jpg', 'assets/images/gallery/gallery8.jpg', 'assets/images/gallery/gallery9.jpg',
                         'assets/images/gallery/gallery10.jpg', 'assets/images/gallery/gallery11.jpg', 'assets/images/gallery/gallery12.jpg',
                         'assets/images/gallery/gallery13.jpg', 'assets/images/gallery/gallery14.jpg', 'assets/images/gallery/gallery15.jpg'];

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };
  shuffleArray(galleryImages);

  galleryImages.map((item) => {
    let img = document.createElement('img');

    galleryContainer.append(img);
    img.classList.add('gallery__img');
    img.src = item;
    img.alt = `gallery${item.match(/\d+/)}`;
  });
};
createGallery();

export default createGallery;
