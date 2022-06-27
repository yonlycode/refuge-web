export enum GalleryTags {
    EATERY = 'Restaurant',
    ROOM = 'Gites',
    OTHER = 'Autres',
}

export type GalleryMeta = {
    weight: number;
    created?: string;
}

export type GalleryItem = {
    tags: GalleryTags;
    name: string;
    url: string;
    alt: string;
    meta: GalleryMeta;
}
