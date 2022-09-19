import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { GalleryItem, GalleryTags } from '@/core/Gallery/Gallery';
import { PaginatedData } from '@/core/Pagination/PaginatedData';

import { createToast, setApplicationLoadingBackdrop } from './Layout';

export type GalleryStateOptions = {
  page: number;
  perPage: number;
  tags: GalleryTags | null;
}

export type GalleryStateLightbox = {
  isLightboxShown: boolean;
  currentIndex: number;
}

export type GalleryState = PaginatedData<GalleryItem> & {
  options: GalleryStateOptions;
  lightbox: GalleryStateLightbox;
}

const initialState: GalleryState = {
  data: [],
  options: {
    page: 0,
    perPage: 6,
    tags: null,
  },
  pagination: null,
  lightbox: {
    isLightboxShown: false,
    currentIndex: 0,
  },
};

export const gallerySlice = createSlice({
  name: 'gallery',
  initialState,
  reducers: {
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
    mutateLightboxState(state, { payload }: PayloadAction<boolean>): GalleryState {
      return {
        ...state,
        lightbox: {
          ...state.lightbox,
          isLightboxShown: payload,
        },
      };
    },
    mutateLightboxCurrentIndex(state, { payload }: PayloadAction<number>): GalleryState {
      return {
        ...state,
        lightbox: {
          ...state.lightbox,
          currentIndex: payload,
        },
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
  mutateGalleryOptions,
  mutateLightboxState,
  mutateLightboxCurrentIndex,
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
      dispatch(setApplicationLoadingBackdrop(true));

      const response = await axios.get('/api/gallery', {
        params: { ...(getState() as any).gallery.options },
      });

      dispatch(mutateGallery(response.data));
    } catch (e) {
      dispatch(createToast({
        message: (e as AxiosError).response?.data as string,
        type: 'error',
      }));
    } finally {
      dispatch(setApplicationLoadingBackdrop(false));
    }
  },
);

export default gallerySlice.reducer;
