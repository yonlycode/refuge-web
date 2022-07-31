import { DbItemOf } from '@/core/Database/types/IDbItem';
import { MetaKeysNames } from '@/core/Database/types/meta';

import { GuideMeta } from './GuideMeta';

export enum IGuideArticleKeys {
    NAME = 'guide_name',
    META = 'meta',
    TITLE = 'title',
    DESCRIPTION = 'description',
    CONTENT = 'content',
    WEIGHT = 'WEIGHT',
}

export type IGuideArticle = {
    [IGuideArticleKeys.META]: GuideMeta
    [IGuideArticleKeys.NAME]: string;
    [IGuideArticleKeys.TITLE]: string;
    [IGuideArticleKeys.DESCRIPTION]: string;
    [IGuideArticleKeys.CONTENT]: string;
    [IGuideArticleKeys.WEIGHT]: number;
};

export type GuideArticleOverview = Pick<
    DbItemOf<IGuideArticle>,
    IGuideArticleKeys.META
        | IGuideArticleKeys.NAME
        | IGuideArticleKeys.DESCRIPTION
        | MetaKeysNames.CREATED_AT
>;
