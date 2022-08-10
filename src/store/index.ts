import { configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';

import Layout from './slices/Layout';
import Reservation from './slices/Reservation';
import Contact from './slices/Contact';
import Gallery from './slices/Gallery';
import Guides from './slices/Guides/index';

export const store = configureStore({
  reducer: {
    contact: Contact,
    gallery: Gallery,
    layout: Layout,
    guides: Guides,
    reservation: Reservation,
  },
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch;

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
