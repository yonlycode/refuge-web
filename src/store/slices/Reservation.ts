import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface EateryReservation {
    firstName: string,
    lastName: string,
    email: string,
    message: string,
    date: string,
    phone: string,
    customerCount: number
}

interface RoomReservation {
    firstName: string;
    lastName: string;
    email: string;
    message: string;
    childrenCount: number;
    adultCount: number;
    phone: string;
    startDate: string;
    endDate: string;
}

interface CounterState {
    eatery: EateryReservation,
    room: RoomReservation
}

interface MutateEateryPayload {
    name: keyof EateryReservation,
    value: any
}

interface MutateRoomPayload {
    name: keyof RoomReservation,
    value: any
}

// Define the initial state using that type
const initialState: CounterState = {
  eatery: {
    phone: '',
    customerCount: 0,
    date: '',
    email: '',
    firstName: '',
    lastName: '',
    message: '',
  },
  room: {
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
};

export const reservationSlice = createSlice({
  name: 'reservation',
  initialState,
  reducers: {
    mutateEateryReservation(state, { payload }: PayloadAction<MutateEateryPayload>): CounterState {
      return {
        ...state,
        eatery: {
          ...state.eatery,
          [payload.name]: payload.value,
        },
      };
    },
    mutateRoomReservation(state, { payload }: PayloadAction<MutateRoomPayload>): CounterState {
      return {
        ...state,
        room: {
          ...state.room,
          [payload.name]: payload.value,
        },
      };
    },
  },
});

export const { mutateEateryReservation, mutateRoomReservation } = reservationSlice.actions;

export default reservationSlice.reducer;
