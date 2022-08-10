import { GuideArticleOverview, IGuideArticle } from '@/core/Guides/types/IGuideArticle';

export enum GuideStateKeys {
    CURRENT_QUERY = 'currentQuery',
    IS_GUIDE_LIST_FETCHING = 'isGuideListFetching',
    IS_HOT_GUIDES_FETCHING = 'isHotGuidesFetching',
    IS_GUIDE_FETCHING = 'isGuideFetching',
    GUIDE_LIST = 'guideList',
    HOT_GUIDES = 'hotGuides',
    GUIDE = 'guide'
}

export interface GuideState {
    [GuideStateKeys.CURRENT_QUERY]: string;
    [GuideStateKeys.IS_GUIDE_LIST_FETCHING]: boolean;
    [GuideStateKeys.IS_HOT_GUIDES_FETCHING]: boolean;
    [GuideStateKeys.IS_GUIDE_FETCHING]: boolean;
    [GuideStateKeys.GUIDE_LIST]: Array<GuideArticleOverview>;
    [GuideStateKeys.HOT_GUIDES]: Array<GuideArticleOverview>;
    [GuideStateKeys.GUIDE]: IGuideArticle | null;
}
