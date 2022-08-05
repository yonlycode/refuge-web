import axios from 'axios';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';

import { GuideArticleOverview } from '@/core/Guides/types/IGuideArticle';
import { createToast } from '../Layout';
import { GuideState } from './types/GuideState';

const fetchHotGuides = createAsyncThunk < GuideArticleOverview[], undefined >(
  'fetchHotGuides',
  async (_, { rejectWithValue, dispatch }) => {
    const response = await axios.get<{Items: GuideArticleOverview[]}>('/api/get-hot-guides');

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

export const fetchHotGuidesBuilder = (builder: ActionReducerMapBuilder<GuideState>) => {
  builder.addCase(
    fetchHotGuides.pending,
    (state) => ({
      ...state,
      hotGuides: [],
      isHotGuidesFetching: true,
    }),
  );
  builder.addCase(fetchHotGuides.fulfilled, (state, { payload }) => ({
    ...state,
    ogtGuides: payload,
    isHotGuidesFetching: false,
  }));
  builder.addCase(fetchHotGuides.rejected, (state) => ({
    ...state,
    isHotGuidesFetching: false,
  }));
};

export default fetchHotGuides;
