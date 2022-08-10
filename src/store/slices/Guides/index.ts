import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { GuideState, GuideStateKeys } from './types/GuideState';

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
    mutateCurrentGuideQuery(state: GuideState, { payload }: PayloadAction<string>) {
      return {
        ...state,
        [GuideStateKeys.CURRENT_QUERY]: payload,
      };
    },
  },
  extraReducers: (builder) => {
    fetchGuideListBuilder(builder);
    fetchGuideDetailBuilder(builder);
    fetchHotGuidesBuilder(builder);
  },
});

export const { mutateCurrentGuideQuery } = GuideSlice.actions;

export {
  fetchGuideList,
  fetchGuideDetail,
  fetchHotGuides,
};

export default GuideSlice.reducer;
