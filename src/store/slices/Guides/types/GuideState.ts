import { GuideArticleOverview } from '@/core/Guides/types/IGuideArticle';

export enum GuideStateKeys {
    CURRENT_QUERY = 'currentQuery',
    IS_GUIDE_LIST_FETCHING = 'isGuideListFetching',
    GUIDE_LIST = 'guideList',
}

export interface GuideState {
    [GuideStateKeys.CURRENT_QUERY]: string;
    [GuideStateKeys.IS_GUIDE_LIST_FETCHING]: boolean;
    [GuideStateKeys.GUIDE_LIST]: Array<GuideArticleOverview>;
}
