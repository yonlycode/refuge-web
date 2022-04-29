import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import Layout from './slices/Layout';
import Reservation from './slices/Reservation';
import Contact from './slices/Contact';

export const store = configureStore({
  reducer: {
    reservation: Reservation,
    layout: Layout,
    contact: Contact,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
