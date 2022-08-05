import { GuideArticleOverview, IGuideArticle } from '@/core/Guides/types/IGuideArticle';

export interface GuideState {
    currentQuery: string;
    isGuideListFetching: boolean;
    isHotGuidesFetching: boolean;
    isGuideFetching: boolean;
    guideList: Array<GuideArticleOverview>;
    hotGuides: Array<GuideArticleOverview>;
    guide: IGuideArticle | null;
}
