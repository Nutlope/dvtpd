import hassanpic from './me.png';
import greg from './greg.png';
import millo from './millo.png';
import ray from './ray.png';

export const team = [
  {
    title:
      'Built hardware prototype and NMES circuit. Worked on microcontroller code. Worked with doppler device.',
    authorPhoto: {
      src: greg,
    },
    authorName: 'Greg Olson - Electrical Engineer',
  },
  {
    title:
      'Built hardware prototype. Evaluated actuation methods and built NMES circuit. Worked with doppler device.',
    authorPhoto: {
      src: millo,
    },
    authorName: 'Millo Ling - Mechanical Engineer',
  },
  {
    title:
      'In charge of all things software. Machine learning model, web server, and microcontroller code.',
    authorPhoto: {
      src: hassanpic,
    },
    authorName: 'Hassan El Mghari - Software Engineer',
  },
  {
    title:
      'Worked on 3D model, performed extensive research, and evaluated different technologies.',
    authorPhoto: {
      src: ray,
    },
    authorName: 'Ray Ganesh - Mechanical Engineer',
  },
];

export const companies = [
  {
    name: 'Airbnb',
    logo: 'https://assets.maccarianagency.com/the-front/logos/airbnb.svg',
  },
  {
    name: 'Coinbase',
    logo: 'https://assets.maccarianagency.com/the-front/logos/coinbase.svg',
  },
  {
    name: 'Dribbble',
    logo: 'https://assets.maccarianagency.com/the-front/logos/dribbble.svg',
  },
];

export const mapData = [
  {
    location: {
      y: 71.0589,
      x: 42.3601,
      address: '445 Mansfield Dr, 55027',
    },
  },
  {
    location: {
      y: 39.7662,
      x: 75.1442,
      address: '502 Devonshire Drive, 08080',
    },
  },
  {
    location: {
      y: 37.7749,
      x: 122.4194,
      address: 'Silicon Valley',
    },
  },
];

export const gallery = [
  {
    image: {
      src:
        'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1.jpg',
      srcSet:
        'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery1@2x.jpg 2x',
    },
    title: 'gallery',
    cols: 1,
  },
  {
    image: {
      src:
        'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3.jpg',
      srcSet:
        'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery3@2x.jpg 2x',
    },
    title: 'gallery',
    cols: 3,
  },
  {
    image: {
      src:
        'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2.jpg',
      srcSet:
        'https://assets.maccarianagency.com/the-front/photos/expo-gallery/gallery2@2x.jpg 2x',
    },
    title: 'gallery',
    cols: 3,
  },
  {
    image: {
      src:
        'https://assets.maccarianagency.com/the-front/photos/coworking/place3.jpg',
      srcSet:
        'https://assets.maccarianagency.com/the-front/photos/coworking/place3@2x.jpg 2x',
    },
    title: 'gallery',
    cols: 1,
  },
];
