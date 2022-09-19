export enum GuideMetaKeys {
    NAME = 'name',
    DESCRIPTION = 'description',
    KEYWORDS = 'keywords',
    READ_TIMES = 'readTime',
}

export interface GuideMeta {
    [GuideMetaKeys.NAME]?: string;
    [GuideMetaKeys.DESCRIPTION]?: string;
    [GuideMetaKeys.KEYWORDS]?: string;
    [GuideMetaKeys.READ_TIMES]?: number;
}
