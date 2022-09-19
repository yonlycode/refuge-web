export enum AppRoutesNames {
    CGL = 'CGL',
    CONTACT = 'Contact',
    EATERY_BOOKING = 'Eatery Booking',
    EATERY_SERVICE = 'Eatery Service',
    GALLERY = 'Gallery',
    GUIDE_ARTICLE = 'Guide Article',
    GUIDE_LANDING = 'Guide Landing',
    GUIDE_SEARCH = 'Guide Search',
    HOME = 'Home',
    ROOM_BOOKING= 'Room Booking',
    ROOM_SERVICE= 'Room Service',
    SERVICES_LANDING = 'Services Landing',
}

export type AppRouteItem = {
    name: string;
    url: string;
    label: string; // Breadcrumb label
}

export const AppRoutesRecord:
  Record<AppRoutesNames, AppRouteItem> = {
    [AppRoutesNames.HOME]: {
      name: 'Accueil',
      label: 'Accueil',
      url: '/',
    },
    [AppRoutesNames.GALLERY]: {
      name: 'Galerie',
      label: 'Galerie',
      url: '/gallery',
    },
    [AppRoutesNames.CGL]: {
      name: 'CGL',
      label: 'CGL',
      url: '/',
    },
    [AppRoutesNames.CONTACT]: {
      name: 'Contact',
      label: 'Contact',
      url: '/contact',
    },
    [AppRoutesNames.EATERY_BOOKING]: {
      name: 'Réserver',
      label: 'Réserver',
      url: '/reserver/restaurant',
    },
    [AppRoutesNames.ROOM_BOOKING]: {
      name: 'Réserver',
      label: 'Réserver',
      url: '/reserver/gites',
    },
    [AppRoutesNames.GUIDE_LANDING]: {
      name: 'Nos guides',
      label: 'Nos guides',
      url: '/guides',
    },
    [AppRoutesNames.GUIDE_ARTICLE]: {
      name: 'Nos guides',
      label: 'Nos guides',
      url: '/guides/:ref',
    },
    [AppRoutesNames.GUIDE_SEARCH]: {
      name: 'Recherche de guides',
      label: 'Chercher un guide',
      url: '/guides/search',
    },
    [AppRoutesNames.SERVICES_LANDING]: {
      name: 'Nos services',
      label: 'Nos services',
      url: '/services',
    },
    [AppRoutesNames.ROOM_SERVICE]: {
      name: 'Gîtes',
      label: 'Gîtes',
      url: '/services/gite',
    },
    [AppRoutesNames.EATERY_SERVICE]: {
      name: 'Restaurant',
      label: 'Restaurant',
      url: '/services/restaurant',
    },
  };

export const HeaderLinks: Array<AppRouteItem & { subs?: AppRouteItem[] }> = [
  AppRoutesRecord[AppRoutesNames.HOME],
  AppRoutesRecord[AppRoutesNames.GALLERY],
  {
    ...AppRoutesRecord[AppRoutesNames.SERVICES_LANDING],
    name: 'Services',
    subs: [
      AppRoutesRecord[AppRoutesNames.GUIDE_LANDING],
      AppRoutesRecord[AppRoutesNames.ROOM_SERVICE],
      AppRoutesRecord[AppRoutesNames.EATERY_SERVICE],
    ],
  },
  AppRoutesRecord[AppRoutesNames.ROOM_BOOKING],
  AppRoutesRecord[AppRoutesNames.CONTACT],
];

export const FooterLinks = [
  AppRoutesRecord[AppRoutesNames.HOME],
  AppRoutesRecord[AppRoutesNames.ROOM_BOOKING],
  AppRoutesRecord[AppRoutesNames.SERVICES_LANDING],
  AppRoutesRecord[AppRoutesNames.CGL],
  AppRoutesRecord[AppRoutesNames.EATERY_BOOKING],
  AppRoutesRecord[AppRoutesNames.EATERY_SERVICE],
  AppRoutesRecord[AppRoutesNames.GUIDE_LANDING],
  AppRoutesRecord[AppRoutesNames.CONTACT],
];
