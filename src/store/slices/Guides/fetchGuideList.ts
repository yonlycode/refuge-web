import axios from 'axios';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';

import { GuideArticleOverview } from '@/core/Guides/types/IGuideArticle';
import { createToast } from '../Layout';
import { GuideState } from './types/GuideState';

const fetchGuideList = createAsyncThunk < GuideArticleOverview[], undefined >(
  'fetchGuideList',
  async (_, { rejectWithValue, getState, dispatch }) => {
    const search: string = (getState() as any).guides.currentQuery;
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
      guideList: [],
      isGuideListFetching: true,
    }),
  );
  builder.addCase(fetchGuideList.fulfilled, (state, { payload }) => ({
    ...state,
    guideList: payload,
    isGuideListFetching: false,
  }));
  builder.addCase(fetchGuideList.rejected, (state) => ({
    ...state,
    isGuideListFetching: false,
  }));
};

export default fetchGuideList;
