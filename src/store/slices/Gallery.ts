import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { GalleryItem, GalleryTags } from '../../core/Gallery/Gallery';
import { PaginatedData } from '../../core/Pagination/PaginatedData';

import { createToast } from './Layout';

export type GalleryStateOptions = {
    page: number,
    perPage: number,
    tags: GalleryTags | null
}
export type GalleryState = PaginatedData<GalleryItem> & {
    options: GalleryStateOptions,
    isGalleryLoading: boolean
}

const initialState: GalleryState = {
  data: [],
  isGalleryLoading: false,
  options: {
    page: 0,
    perPage: 6,
    tags: null,
  },
  pagination: null,
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
    mutateGalleryLoadingState(state, { payload }: PayloadAction<boolean>): GalleryState {
      return {
        ...state,
        isGalleryLoading: payload,
      };
    },
    mutateGalleryOptions(
      state,
      { payload }: PayloadAction<Partial<GalleryStateOptions>>,
    ): GalleryState {
      return {
        ...state,
        options: {
          ...state.options,
          ...payload,
        },
      };
    },
    mutateGallery(
      state,
      { payload }: PayloadAction<Pick<GalleryState, 'pagination' | 'data'>>,
    ): GalleryState {
      return {
        ...state,
        data: [...state.data, ...payload.data],
        pagination: payload.pagination,
      };
    },
    resetGallery(): GalleryState {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    // eslint-disable-next-line no-use-before-define
    builder.addCase(FetchGallery.fulfilled, (state) => state);
  },
});

export const {
  mutateGallery,
  mutateGalleryLoadingState,
  mutateGalleryOptions,
  resetGallery,
} = gallerySlice.actions;

export const FetchGallery = createAsyncThunk(
  'fetchGallery',
  // eslint-disable-next-line consistent-return
  async (_: undefined, { dispatch, getState }) => {
    try {
      dispatch(mutateGalleryOptions({
        page: (getState() as any).gallery.options.page + 1,
      }));
      dispatch(mutateGalleryLoadingState(true));
      const response = await axios.get('/api/gallery', {
        params: { ...(getState() as any).gallery.options },
      });

      dispatch(mutateGallery(response.data));
      dispatch(mutateGalleryLoadingState(false));
    } catch (e) {
      dispatch(createToast({
        message: (e as AxiosError).response?.data as string,
        type: 'error',
      }));
      dispatch(mutateGalleryLoadingState(false));
    }
  },
);

export default gallerySlice.reducer;
