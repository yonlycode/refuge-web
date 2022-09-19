import {
  FilterKeysNames,
  MetaKeysNames,
  RecordType,
} from '@/core/Database/types/meta';
import DbItem from '@/core/Database/DbItem';
import { IDbItem } from '@/core/Database/types/IDbItem';

import InputErrorMessages from '@/constants/InputErrorMessages';

import { IGuideArticle, IGuideArticleKeys } from './types/IGuideArticle';

export default class GuideArticle extends DbItem<IGuideArticle> {
  constructor(reservation?: IGuideArticle) {
    super(RecordType.GUIDE, reservation);
  }

  public isValid(): null | Partial<Record<keyof IGuideArticle, InputErrorMessages>> {
    if (!this.data) {
      throw new Error('no payload');
    }

    return null;
  }

  static get detailsGuideAttributeToGet(): Array<IGuideArticleKeys | MetaKeysNames | FilterKeysNames> {
    return [
      IGuideArticleKeys.CONTENT,
      IGuideArticleKeys.TITLE,
      IGuideArticleKeys.NAME,
      IGuideArticleKeys.DESCRIPTION,
      IGuideArticleKeys.META,
      IGuideArticleKeys.PREVIEW_IMAGE,
      IGuideArticleKeys.HOT_GUIDE,
      FilterKeysNames.FILTER_KEY,
      MetaKeysNames.CREATED_AT,
      MetaKeysNames.UPDATED_AT,
    ];
  }

  static get overviewGuideAttributeToGet(): Array<IGuideArticleKeys | MetaKeysNames | FilterKeysNames> {
    return [
      IGuideArticleKeys.NAME,
      IGuideArticleKeys.DESCRIPTION,
      IGuideArticleKeys.PREVIEW_IMAGE,
      IGuideArticleKeys.HOT_GUIDE,
      IGuideArticleKeys.META,
      FilterKeysNames.FILTER_KEY,
      MetaKeysNames.CREATED_AT,
    ];
  }

  public async get(ref: string) {
    return super.get(ref, GuideArticle.detailsGuideAttributeToGet);
  }

  public new(data: IGuideArticle): IDbItem<IGuideArticle> {
    super.new(data);
    if (this.data) {
      this.data = {
        ...this.data,
        [IGuideArticleKeys.HOT_GUIDE]: this.data[IGuideArticleKeys.HOT_GUIDE] ?? false,
        [IGuideArticleKeys.NAME]: this.data[IGuideArticleKeys.NAME].toLowerCase(),
        [IGuideArticleKeys.META]: this.data[IGuideArticleKeys.META],
      };
    }
    return this;
  }

  public async searchGuideArticlesByName(searchString: string) {
    return this.find({
      ProjectionExpression: GuideArticle.overviewGuideAttributeToGet.join(', '),
      FilterExpression:
        'contains (#search, :s)',
      ExpressionAttributeNames: {
        '#search': IGuideArticleKeys.NAME,
      },
      ExpressionAttributeValues: {
        ':s': {
          S: searchString.trim().toLowerCase(),
        },
      },
    });
  }

  public async getHotGuideArticles() {
    return this.find({
      ProjectionExpression: GuideArticle.overviewGuideAttributeToGet.join(', '),
      FilterExpression: `${IGuideArticleKeys.HOT_GUIDE} = :hg`,
      ExpressionAttributeValues: {
        ':hg': {
          BOOL: true,
        },
      },
    });
  }
}
