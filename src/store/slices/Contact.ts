import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';

import { IContactRequest } from '../../core/Models/ContactRequest';
import { createToast } from './Layout';

export type ContactState = {
    request: IContactRequest,
    isRequestSending: boolean;
}
export interface MutateContactPayload {
    name: keyof IContactRequest,
    value: any
}

// Define the initial state using that type
const initialState: ContactState = {
  request: {
    name: '',
    email: '',
    subject: '',
    phone: '',
    message: '',
  },
  isRequestSending: false,
};

export const contactSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    mutateContactRequest(state, { payload }: PayloadAction<MutateContactPayload>): ContactState {
      return {
        ...state,
        request: {
          ...state.request,
          [payload.name]: payload.value,
        },
      };
    },
    mutateContactRequestSendingState(
      state,
      { payload }: PayloadAction<boolean>,
    ): ContactState {
      return {
        ...state,
        isRequestSending: payload,
      };
    },
  },
  extraReducers: (builder) => {
    // eslint-disable-next-line no-use-before-define
    builder.addCase(sendContactRequest.fulfilled, (state) => state);
  },
});

export const {
  mutateContactRequest,
  mutateContactRequestSendingState,
} = contactSlice.actions;

export const sendContactRequest = createAsyncThunk(
  'sendContactRequest',
  // eslint-disable-next-line consistent-return
  async (_: unknown, { dispatch, getState }) => {
    try {
      dispatch(mutateContactRequestSendingState(true));
      const { request } = (getState() as any).contact;
      const response = await axios.post('/api/contact', request);
      dispatch(mutateContactRequestSendingState(false));

      return response.data;
    } catch (e) {
      dispatch(createToast({
        message: (e as Error).toString(),
        type: 'error',
      }));
      dispatch(mutateContactRequestSendingState(false));
    }
  },
);
export default contactSlice.reducer;
