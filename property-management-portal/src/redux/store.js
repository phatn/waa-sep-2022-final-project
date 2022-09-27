import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import propertySlice from './slices/propertySlice';
//import { serializableMiddleware } from 'middleware/SerializableMiddleware';

export const store = configureStore({
  reducer: {
    property: propertySlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});
