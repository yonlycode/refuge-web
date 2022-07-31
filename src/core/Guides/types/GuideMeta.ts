export enum GuideMetaKeys {
    NAME = 'name',
    DESCRIPTION = 'description',
    KEYWORDS = 'keywords',
    READ_TIMES = 'readTime',
    URL = 'url',
}

export interface GuideMeta {
    [GuideMetaKeys.NAME]?: string;
    [GuideMetaKeys.DESCRIPTION]?: string;
    [GuideMetaKeys.KEYWORDS]?: string;
    [GuideMetaKeys.READ_TIMES]?: number;
    [GuideMetaKeys.URL]: string;
}
