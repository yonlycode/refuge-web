import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { IContactRequest } from '@/core/ContactRequest/types/IContactRequest';

import { createToast, setApplicationLoadingBackdrop } from './Layout';

export type ContactState = IContactRequest;
export interface MutateContactPayload {
    name: keyof IContactRequest,
    value: any
}

const initialState: ContactState = {
  name: '',
  email: '',
  subject: '',
  phone: '',
  message: '',
};

export const contactSlice = createSlice({
  name: 'contact',
  initialState,
  reducers: {
    resetContactRequest(): ContactState {
      return initialState;
    },
    mutateContactRequest(state, { payload }: PayloadAction<MutateContactPayload>): ContactState {
      return {
        ...state,
        [payload.name]: payload.value,
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
  resetContactRequest,
} = contactSlice.actions;

export const sendContactRequest = createAsyncThunk(
  'sendContactRequest',
  // eslint-disable-next-line consistent-return
  async (_, { dispatch, getState }) => {
    try {
      dispatch(setApplicationLoadingBackdrop(true));
      const request = (getState() as any).contact;
      const response = await axios.post('/api/contact', request);
      dispatch(createToast({
        message: 'Demande envoyer avec succès',
        type: 'success',
      }));
      dispatch(resetContactRequest());

      return response.data;
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

export default contactSlice.reducer;
