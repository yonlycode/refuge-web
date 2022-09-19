import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';

import { GuideState, GuideStateKeys } from './types/GuideState';

import fetchGuideList, { fetchGuideListBuilder } from './fetchGuideList';

export const initialState: GuideState = {
  currentQuery: '',
  isGuideListFetching: false,
  guideList: [],
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
  },
});

export const { mutateCurrentGuideQuery } = GuideSlice.actions;

export {
  fetchGuideList,
};

export default GuideSlice.reducer;
