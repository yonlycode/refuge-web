import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Toast {
    delay?: number,
    message: string,
    title?: string,
    type: string,
}

interface LayoutState {
    toasts: Toast[]
}

const initialState: LayoutState = {
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
    removeToast(state, { payload }: PayloadAction<Toast>) {
      return {
        ...state,
        toasts: state.toasts.filter((el) => el.message !== payload.message),
      };
    },
  },
});

export const { createToast, removeToast } = LayoutSlice.actions;

export default LayoutSlice.reducer;
