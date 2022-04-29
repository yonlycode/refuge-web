const HeaderLinks = [
  {
    name: 'Accueil',
    url: '/',
  },
  {
    name: 'Guides',
    url: '/guides',
  },
  {
    name: 'Galerie',
    url: '/gallery',
  },
  {
    name: 'Services',
    url: '/services',
    subs: [
      {
        name: 'Nos services',
        url: '/services',
      },
      {
        name: 'Gites',
        url: '/services/gite',
      },
      {
        name: 'Restaurant',
        url: '/services/restaurant',
      },
      {
        name: 'Réserver',
        url: '/reserver',
      },
    ],
  },
  {
    name: 'Contact',
    url: '/contact',
  },
];

export default HeaderLinks;
