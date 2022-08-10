import axios from 'axios';
import { ActionReducerMapBuilder, createAsyncThunk } from '@reduxjs/toolkit';

import { IGuideArticle } from '@/core/Guides/types/IGuideArticle';
import { createToast } from '../Layout';
import { GuideState, GuideStateKeys } from './types/GuideState';

const fetchGuideDetail = createAsyncThunk < IGuideArticle, string >(
  'fetchGuideDetail',
  async (reference: string, { rejectWithValue, dispatch }) => {
    const response = await axios.get<{Items: IGuideArticle}>(`/api/get-guide-details/${reference}`);
    if (response.status !== 200) {
      dispatch(createToast({
        type: 'error',
        message: JSON.stringify(response.data),
      }));
      rejectWithValue(response.data);
    }

    return response.data.Items as IGuideArticle;
  },
);

export const fetchGuideDetailBuilder = (builder: ActionReducerMapBuilder<GuideState>) => {
  builder.addCase(
    fetchGuideDetail.pending,
    (state) => ({
      ...state,
      [GuideStateKeys.GUIDE]: null,
      [GuideStateKeys.IS_GUIDE_FETCHING]: true,
    }),
  );
  builder.addCase(fetchGuideDetail.fulfilled, (state, { payload }) => ({
    ...state,
    [GuideStateKeys.GUIDE]: payload,
    [GuideStateKeys.IS_GUIDE_FETCHING]: false,
  }));
  builder.addCase(fetchGuideDetail.rejected, (state) => ({
    ...state,
    [GuideStateKeys.IS_GUIDE_FETCHING]: false,
  }));
};

export default fetchGuideDetail;
