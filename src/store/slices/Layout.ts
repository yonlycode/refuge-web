import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Toast {
    delay?: number,
    message: string,
    title?: string,
    type: string,
}

interface LayoutState {
    isAppLoading: boolean
    toasts: Toast[]
}

const initialState: LayoutState = {
  isAppLoading: false,
  toasts: [],
};

export const LayoutSlice = createSlice({
  name: 'layout',
  initialState,
  reducers: {
    createToast(state, { payload }: PayloadAction<Toast>) {
      return {
        ...state,
        toasts: [
          ...state.toasts,
          payload,
        ],
      };
    },
    setApplicationLoadingBackdrop(state, { payload }: PayloadAction<boolean>) {
      return {
        ...state,
        isAppLoading: payload,
      };
    },
    removeToast(state, { payload }: PayloadAction<Toast>) {
      return {
        ...state,
        toasts: state.toasts.filter((el) => el.message !== payload.message),
      };
    },
  },
});

export const { createToast, removeToast, setApplicationLoadingBackdrop } = LayoutSlice.actions;

export default LayoutSlice.reducer;
