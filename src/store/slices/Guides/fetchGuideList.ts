import axios from 'axios';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';

import { GuideArticleOverview } from '@/core/Guides/types/IGuideArticle';
import { createToast } from '../Layout';
import { GuideState, GuideStateKeys } from './types/GuideState';

const fetchGuideList = createAsyncThunk < GuideArticleOverview[], string >(
  'fetchGuideList',
  async (search, { rejectWithValue, dispatch }) => {
    // const search: string = (getState() as any).guides.currentQuery;
    const response = await axios.get<{Items: GuideArticleOverview[]}>('/api/find-guide-articles', {
      params: { search },
    });

    if (response.status !== 200) {
      dispatch(createToast({
        type: 'error',
        message: JSON.stringify(response.data),
      }));
      rejectWithValue(response.data);
    }

    return response.data.Items as GuideArticleOverview[];
  },
);

export const fetchGuideListBuilder = (builder: ActionReducerMapBuilder<GuideState>) => {
  builder.addCase(
    fetchGuideList.pending,
    (state) => ({
      ...state,
      [GuideStateKeys.GUIDE_LIST]: [],
      [GuideStateKeys.IS_GUIDE_LIST_FETCHING]: true,
    }),
  );
  builder.addCase(fetchGuideList.fulfilled, (state, { payload }) => ({
    ...state,
    [GuideStateKeys.GUIDE_LIST]: payload,
    [GuideStateKeys.IS_GUIDE_LIST_FETCHING]: false,

  }));
  builder.addCase(fetchGuideList.rejected, (state) => ({
    ...state,
    [GuideStateKeys.IS_GUIDE_LIST_FETCHING]: false,
  }));
};

export default fetchGuideList;
