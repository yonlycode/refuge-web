import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { GuideState } from './types/GuideState';

import fetchGuideList, { fetchGuideListBuilder } from './fetchGuideList';
import fetchGuideDetail, { fetchGuideDetailBuilder } from './fetchGuideDetail';
import fetchHotGuides, { fetchHotGuidesBuilder } from './fetchHotGuides';

export const initialState: GuideState = {
  currentQuery: '',
  isGuideListFetching: false,
  isHotGuidesFetching: false,
  isGuideFetching: false,
  hotGuides: [],
  guideList: [],
  guide: null,
};

export const GuideSlice = createSlice({
  name: 'guides',
  initialState,
  reducers: {
    mutatecurrentGuideQuery(state: GuideState, { payload }: PayloadAction<string>) {
      return {
        ...state,
        currentQuery: payload,
      };
    },
  },
  extraReducers: (builder) => {
    fetchGuideListBuilder(builder);
    fetchGuideDetailBuilder(builder);
    fetchHotGuidesBuilder(builder);
  },
});

export {
  fetchGuideList,
  fetchGuideDetail,
  fetchHotGuides,
};

export const { mutatecurrentGuideQuery } = GuideSlice.actions;

export default GuideSlice.reducer;
