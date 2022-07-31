import {
  FilterKeysNames,
  MetaKeys,
  MetaKeysNames,
  RecordType,
} from '@/core/Database/types/meta';
import DbItem from '@/core/Database/DbItem';
import { IDbItem } from '@/core/Database/types/IDbItem';

import InputErrorMessages from '@/constants/InputErrorMessages';

import { IGuideArticle, IGuideArticleKeys } from './types/IGuideArticle';

export default class GuideArticle extends DbItem<IGuideArticle> {
  constructor(reservation?: IGuideArticle, meta: MetaKeys = {
    created_at: Date.now().toLocaleString('Fr'),
  }) {
    super(RecordType.GUIDE, reservation, meta);
  }

  private get getUrl() :string {
    return `/guides/${this._filterKey}`;
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
      FilterKeysNames.FILTER_KEY,
      MetaKeysNames.CREATED_AT,
      MetaKeysNames.UPDATED_AT,
    ];
  }

  static get overviewGuideAttributeToGet(): Array<IGuideArticleKeys | MetaKeysNames | FilterKeysNames> {
    return [
      IGuideArticleKeys.NAME,
      IGuideArticleKeys.DESCRIPTION,
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
        [IGuideArticleKeys.NAME]: this.data[IGuideArticleKeys.NAME].toLowerCase(),
        [IGuideArticleKeys.META]: {
          ...this.data[IGuideArticleKeys.META],
          url: this.getUrl,
        },
      };
    }
    return this;
  }

  public async searchGuideArticlesByName(searchString: string) {
    return this.scan({
      ProjectionExpression: GuideArticle.overviewGuideAttributeToGet.join(', '),

      FilterExpression: `contains (#search, :s) OR contains (${IGuideArticleKeys.DESCRIPTION}, :s)`,
      ExpressionAttributeNames: {
        '#search': IGuideArticleKeys.NAME,
      },
      ExpressionAttributeValues: {
        ':s': {
          S: searchString.trim().toLowerCase(),
        },
      },
      // AttributesToGet: GuideArticle.overviewGuideAttributeToGet,
    });
  }
}
