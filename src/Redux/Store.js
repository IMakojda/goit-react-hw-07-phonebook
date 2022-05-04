import { configureStore } from '@reduxjs/toolkit';
import { contactApi } from './SliceApi';
import filterReduser from '../Redux/SliceFilter'

export const store = configureStore({

  reducer: {
    [contactApi.reducerPath]: contactApi.reducer,
    filter: filterReduser,
  },

  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware(),
    contactApi.middleware,
  ]
});