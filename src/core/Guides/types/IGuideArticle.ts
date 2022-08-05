import { DbItemOf } from '@/core/Database/types/IDbItem';
import { MetaKeysNames } from '@/core/Database/types/meta';

import { GuideMeta } from './GuideMeta';

export enum IGuideArticleKeys {
    NAME = 'guide_name',
    META = 'meta',
    TITLE = 'title',
    DESCRIPTION = 'description',
    PREVIEW_IMAGE = 'previewImage',
    CONTENT = 'content',
    WEIGHT = 'weight',
    HOT_GUIDE = 'hotGuide'
}

export type IGuideArticle = {
    [IGuideArticleKeys.META]: GuideMeta
    [IGuideArticleKeys.NAME]: string;
    [IGuideArticleKeys.HOT_GUIDE]: boolean;
    [IGuideArticleKeys.TITLE]: string;
    [IGuideArticleKeys.DESCRIPTION]: string;
    [IGuideArticleKeys.PREVIEW_IMAGE]: string;
    [IGuideArticleKeys.CONTENT]: string;
    [IGuideArticleKeys.WEIGHT]: number;
};

export type GuideArticleOverview = Pick<
    DbItemOf<IGuideArticle>,
    IGuideArticleKeys.META
    | IGuideArticleKeys.NAME
    | IGuideArticleKeys.DESCRIPTION
    | IGuideArticleKeys.PREVIEW_IMAGE
    | MetaKeysNames.CREATED_AT
>;
