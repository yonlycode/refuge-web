export enum GuideContentType {
    PLAIN_TEXT = 'plaintext',
    PHOTO = 'photo',
    TEXT_WITH_PHOTO = 'textWithPhoto',
    VIDEO = 'video',
}

export enum GuideContentKeys {
    TYPE = 'type',
    URL = 'url',
    TEXT = 'text',
}

export type GuideContent = {
    [GuideContentKeys.TYPE]: GuideContentType;
    [GuideContentKeys.URL]?: string;
    [GuideContentKeys.TEXT]?: string;
}
