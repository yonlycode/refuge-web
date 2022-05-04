import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';

import { IEateryReservation } from '../../core/Models/EateryReservation';
import { IRoomReservation } from '../../core/Models/RoomReservation';
import { createToast } from './Layout';

interface ReservationState {
    eatery: {
      reservation: IEateryReservation,
      isSending: boolean
    },
    room: {
      reservation: IRoomReservation
      isSending: boolean
    }
}

export interface MutateEateryPayload {
    name: keyof IEateryReservation,
    value: any
}

export interface MutateRoomPayload {
    name: keyof IRoomReservation,
    value: any
}

// Define the initial state using that type
const initialState: ReservationState = {
  eatery: {
    reservation: {
      phone: '',
      customerCount: 0,
      date: '',
      email: '',
      firstName: '',
      lastName: '',
      message: '',
    },
    isSending: false,
    
  },
  room: {
    reservation: {
      adultCount: 0,
      childrenCount: 0,
      email: '',
      endDate: '',
      startDate: '',
      firstName: '',
      lastName: '',
      message: '',
      phone: '',
    },
    isSending: false,
  },
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    mutateEateryReservation(state, { payload }: PayloadAction<MutateEateryPayload>): ReservationState {
      return {
        ...state,
        eatery: {
          ...state.eatery,
          reservation: {
            ...state.eatery.reservation,
            [payload.name]: payload.value,
          }
        },
      };
    },
    mutateEateryReservationSendingState(state, { payload }: PayloadAction<boolean>): ReservationState {
      return {
        ...state,
        eatery: {
          ...state.eatery,
          isSending: payload
        },
      };
    },
    mutateRoomReservation(state, { payload }: PayloadAction<MutateRoomPayload>): ReservationState {
      return {
        ...state,
        room: {
          ...state.room,
          reservation: {
            ...state.room.reservation,
            [payload.name]: payload.value,
          }
        },
      };
    },
    mutateRoomReservationSendingState(state, { payload }: PayloadAction<boolean>): ReservationState {
      return {
        ...state,
        room: {
          ...state.room,
          isSending: payload
        },
      };
    },
    resetEateryReservation(state): ReservationState {
      return {
        ...state,
        eatery: initialState.eatery
      }
    },
    resetRoomReservation(state): ReservationState {
      return {
        ...state,
        room: initialState.room
      }
    }
  },
  extraReducers: (builder) => {
    // eslint-disable-next-line no-use-before-define
    builder.addCase(sendEateryReservation.fulfilled, (state) => state);
    // eslint-disable-next-line no-use-before-define
    builder.addCase(sendRoomReservation.fulfilled, (state) => state);
  },
});

export const { 
  mutateEateryReservation,
  mutateRoomReservation,
  mutateEateryReservationSendingState,
  mutateRoomReservationSendingState,
  resetEateryReservation,
  resetRoomReservation
} = reservationSlice.actions;

export const sendEateryReservation = createAsyncThunk(
  'sendEateryReservation',
  // eslint-disable-next-line consistent-return
  async (_: undefined, { dispatch, getState }) => {
    try {
      dispatch(mutateEateryReservationSendingState(true));
      const { reservation } = (getState() as any).reservation.eatery;
      const response = await axios.post('/api/reserver/restaurant', reservation);
      dispatch(createToast({
        message: 'Votre réservation à bien été envoyée.',
        type: 'success',
      }));

      dispatch(mutateEateryReservationSendingState(false));
      dispatch(resetEateryReservation());

      return response.data;
    } catch (e) {
      dispatch(createToast({
        message: (e as AxiosError).response?.data as string,
        type: 'error',
      }));
      dispatch(mutateEateryReservationSendingState(false));
    }
  },
);

export const sendRoomReservation = createAsyncThunk(
  'sendRoomReservation',
  // eslint-disable-next-line consistent-return
  async (_: {}, { dispatch, getState }) => {
    try {
      dispatch(mutateRoomReservationSendingState(true));
      const { reservation } = (getState() as any).reservation.gite;
      const response = await axios.post('/api/reserver/gite', reservation);
      dispatch(createToast({
        message: 'Votre réservation à bien été envoyée.',
        type: 'success',
      }));

      dispatch(mutateRoomReservationSendingState(false));
      dispatch(resetRoomReservation());

      return response.data;
    } catch (e) {
      dispatch(createToast({
        message: (e as AxiosError).response?.data as string,
        type: 'error',
      }));
      dispatch(mutateRoomReservationSendingState(false));
    }
  },
);

export default reservationSlice.reducer;
