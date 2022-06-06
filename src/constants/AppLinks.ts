export enum AppRoutesNames {
    HOME = 'Home',
    GALLERY = 'Gallery',
    CONTACT = 'Contact',
    ABOUT = 'About',
    CGL = 'CGL',
    SERVICES_LANDING = 'Services Landing',
    ROOM_SERVICE= 'Room Service',
    EATERY_SERVICE = 'Eatery Service',
    GUIDE_LANDING = 'Guide Landing',
    ROOM_BOOKING= 'Room Booking',
    EATERY_BOOKING = 'Eatery Booking',
}

export type AppRouteItem = {
    name: string,
    url: string
}

export const AppRoutesRecord: Record<AppRoutesNames, AppRouteItem > = {
    [AppRoutesNames.HOME]: {
        name: 'Accueil',
        url: '/',
    },
    [AppRoutesNames.ABOUT]: {
        name: 'À propos',
        url: '/about',
    },
    [AppRoutesNames.GALLERY]: {
        name: 'Galerie',
        url: '/gallery',
    },
    [AppRoutesNames.CGL]: {
        name: 'CGL',
        url: '/',
    },
    [AppRoutesNames.CONTACT]: {
        name: 'Contact',
        url: '/contact',
    },
    [AppRoutesNames.EATERY_BOOKING]: {
        name: 'Réserver',
        url: '/reserver/restaurant',
    },
    [AppRoutesNames.ROOM_BOOKING]: {
        name: 'Réserver',
        url: '/reserver/gites',
    },
    [AppRoutesNames.GUIDE_LANDING]: {
        name: 'Nos guides',
        url: '/guides',
    },
    [AppRoutesNames.SERVICES_LANDING]: {
        name: 'Nos services',
        url: '/services',
    },
    [AppRoutesNames.ROOM_SERVICE]: {
        name: 'Les gites',
        url: '/services/gite',
    },
    [AppRoutesNames.EATERY_SERVICE]: {
        name: 'Le restaurant',
        url: '/services/restaurant',
    },
}

export const HeaderLinks: Array<AppRouteItem & { subs?: AppRouteItem[] }> = [
    AppRoutesRecord.Home,
    AppRoutesRecord["Guide Landing"],
    AppRoutesRecord.Gallery,
    {
        ...AppRoutesRecord["Services Landing"],
        name:'Services',
        subs: [
            AppRoutesRecord["Services Landing"],
            AppRoutesRecord["Room Service"],
            AppRoutesRecord["Eatery Service"]
        ],
    },
    AppRoutesRecord["Room Booking"],
    AppRoutesRecord.Contact
];

export const FooterLinks = [
    AppRoutesRecord.Home,
    AppRoutesRecord["Room Booking"],
    AppRoutesRecord["Services Landing"],
    AppRoutesRecord.CGL,
    AppRoutesRecord["Room Booking"],
    AppRoutesRecord["Eatery Service"],
    AppRoutesRecord["Guide Landing"],
    AppRoutesRecord.Contact,
];