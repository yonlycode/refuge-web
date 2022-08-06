import { GalleryItem, GalleryTags } from '@/core/Gallery/Gallery';

// TODO migrate to database
const Gallery: Array<GalleryItem> = [
  // Eatery photos
  {
    tags: GalleryTags.EATERY,
    name: 'Plat de chatrou',
    url: '/assets/images/restau/chatrou.png',
    alt: 'Un plat traditionnel antillais a base de pieuvre, de riz et de pois locaux.',
    meta: {
      weight: 4,
      created: '2022-06-06',
    },
  },
  {
    tags: GalleryTags.EATERY,
    name: 'Langouste farcie',
    url: '/assets/images/restau/langouste.png',
    alt: 'Un plat traditionnel antillais a base de langouste.',
    meta: {
      weight: 4,
      created: '2022-06-06',
    },
  },
  {
    tags: GalleryTags.EATERY,
    name: 'Poisson grillé',
    url: '/assets/images/restau/poissonG.png',
    alt: 'Un plat traditionnel antillais a base de poisson grillé et de gratin de légume locaux.',
    meta: {
      weight: 4,
      created: '2022-06-06',
    },
  },
  {
    tags: GalleryTags.EATERY,
    name: 'Restaurant Le Refuge Hulman',
    url: '/assets/images/restau/image03.jpg',
    alt: 'Aperçu du restaurant le refuge.',
    meta: {
      weight: 8,
      created: '2022-06-06',
    },
  },
  {
    tags: GalleryTags.EATERY,
    name: 'Restaurant Le Refuge en Katimini ',
    url: '/assets/images/katimini/katimini4.jpeg',
    alt: 'Aperçu du restaurant le refuge en Katimini au bourg de Saint-Louis de Marie-Galante.',
    meta: {
      weight: 12,
      created: '2022-06-06',
    },
  },
  {
    tags: GalleryTags.EATERY,
    name: 'Restaurant Le Refuge en Katimini ',
    url: '/assets/images/katimini/katimini5.jpeg',
    alt: 'Aperçu du restaurant le refuge en Katimini au bourg de Saint-Louis de Marie-Galante.',
    meta: {
      weight: 14,
      created: '2022-06-06',
    },
  },
  {
    tags: GalleryTags.EATERY,
    name: 'Restaurant Le Refuge en Katimini ',
    url: '/assets/images/katimini/katimini6.jpeg',
    alt: 'Aperçu du restaurant le refuge en Katimini au bourg de Saint-Louis de Marie-Galante.',
    meta: {
      weight: 13,
      created: '2022-06-06',
    },
  },

  // Room photos
  {
    tags: GalleryTags.ROOM,
    name: 'Chambre Émeraude',
    url: '/assets/images/gites/emeraude/chambre.jpg',
    alt: 'Chambre du gite Émeraude.',
    meta: {
      weight: 9,
      created: '2022-06-06',
    },
  },
  {
    tags: GalleryTags.ROOM,
    name: 'Chambre Opale',
    url: '/assets/images/gites/opale/chambre.jpg',
    alt: 'Chambre du gite Opale.',
    meta: {
      weight: 9,
      created: '2022-06-06',
    },
  },
  {
    tags: GalleryTags.ROOM,
    name: 'Chambre Topaze',
    url: '/assets/images/gites/topaze/chambre.jpg',
    alt: 'Chambre du gite Topaze.',
    meta: {
      weight: 9,
      created: '2022-06-06',
    },
  },
  {
    tags: GalleryTags.ROOM,
    name: 'Chambre Turquoise',
    url: '/assets/images/gites/turquoise/chambre.jpg',
    alt: 'Chambre du gite Turquoise.',
    meta: {
      weight: 9,
      created: '2022-06-06',
    },
  },

  // Other photos
  {
    tags: GalleryTags.OTHER,
    name: 'Entrée de la propriété Refuge Hulman',
    url: '/assets/images/excursions/image001.jpeg',
    alt: 'Entrée de la propriété Refuge Hulman.',
    meta: {
      weight: 9,
      created: '2022-06-06',
    },
  },
  {
    tags: GalleryTags.OTHER,
    name: 'Piscine de la propriété Refuge Hulman',
    url: '/assets/images/excursions/image006.jpg',
    alt: 'Piscine de la propriété Refuge Hulman.',
    meta: {
      weight: 9,
      created: '2022-06-06',
    },
  },

];

export default Gallery;
