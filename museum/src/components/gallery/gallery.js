const createGallery = () => {
  const galleryContainer = document.querySelector('.gallery__wrapper');
  const galleryImages = [
    {
      webp: 'assets/images/gallery/gallery1.webp',
      jpg: 'assets/images/gallery/gallery1.jpg',
      width: 464,
      height: 464,
      alt: `Psyche Revived by Cupid's Kiss`
    },
    {
      webp: 'assets/images/gallery/gallery2.webp',
      jpg: 'assets/images/gallery/gallery2.jpg',
      width: 464,
      height: 580,
      alt: 'The Diana of Versailles or Artemis, Goddess of the Hunt'
    },
    {
      webp: 'assets/images/gallery/gallery3.webp',
      jpg: 'assets/images/gallery/gallery3.jpg',
      width: 464,
      height: 580,
      alt: 'The Dying Slave - Michelangelo'
    },
    {
      webp: 'assets/images/gallery/gallery4.webp',
      jpg: 'assets/images/gallery/gallery4.jpg',
      width: 464,
      height: 464,
      alt: 'Winged Victory of Samothrace'
    },
    {
      webp: 'assets/images/gallery/gallery5.webp',
      jpg: 'assets/images/gallery/gallery5.jpg',
      width: 464,
      height: 580,
      alt: 'The Venus de Milo'
    },
    {
      webp: 'assets/images/gallery/gallery6.webp',
      jpg: 'assets/images/gallery/gallery6.jpg',
      width: 464,
      height: 580,
      alt: 'The Virgin and Child with Saint Anne (Leonardo)'
    },
    {
      webp: 'assets/images/gallery/gallery7.webp',
      jpg: 'assets/images/gallery/gallery7.jpg',
      width: 464,
      height: 580,
      alt: 'The Mona Lisa'
    },
    {
      webp: 'assets/images/gallery/gallery8.webp',
      jpg: 'assets/images/gallery/gallery8.jpg',
      width: 464,
      height: 580,
      alt: ''
    },
    {
      webp: 'assets/images/gallery/gallery9.webp',
      jpg: 'assets/images/gallery/gallery9.jpg',
      width: 464,
      height: 580,
      alt: ''
    },
    {
      webp: 'assets/images/gallery/gallery10.webp',
      jpg: 'assets/images/gallery/gallery10.jpg',
      width: 464,
      height: 464,
      alt: 'Cour Visconti roof of the Department of Islamic Arts'
    },
    {
      webp: 'assets/images/gallery/gallery11.webp',
      jpg: 'assets/images/gallery/galler11.jpg',
      width: 464,
      height: 464,
      alt: 'Liberty Leading the People'
    },
    {
      webp: 'assets/images/gallery/gallery12.webp',
      jpg: 'assets/images/gallery/gallery12.jpg',
      width: 464,
      height: 348,
      alt: 'The Cour Marly'
    },
    {
      webp: 'assets/images/gallery/gallery13.webp',
      jpg: 'assets/images/gallery/gallery13.jpg',
      width: 464,
      height: 348,
      alt: 'Sleeping Hermaphrodite'
    },
    {
      webp: 'assets/images/gallery/gallery14.webp',
      jpg: 'assets/images/gallery/gallery14.jpg',
      width: 464,
      height: 580,
      alt: 'La Belle Ferronnière by Leonardo da Vinci'
    },
    {
      webp: 'assets/images/gallery/gallery15.webp',
      jpg: 'assets/images/gallery/gallery15.jpg',
      width: 464,
      height: 464,
      alt: ''
    }
  ];

  const shuffleArray = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));

      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
  };
  shuffleArray(galleryImages);

  galleryImages.map((item) => {
    let picture = document.createElement('picture');
    let source = document.createElement('source');
    let img = document.createElement('img');

    galleryContainer.append(picture);
    picture.append(source, img);

    picture.classList.add('gallery__picture');
    img.classList.add('gallery__img');

    source.srcset = item.webp;
    source.type = 'image/webp';
    img.src = item.jpg;

    img.width = item.width;
    img.height = item.height;

    img.loading = 'lazy';
    img.alt = item.alt;
  });
};
createGallery();

export default createGallery;
