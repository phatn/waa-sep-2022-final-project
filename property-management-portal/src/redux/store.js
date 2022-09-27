import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import counterReducer from './slices/counterSlice';
import propertySlice from './slices/propertySlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    property: propertySlice.reducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false
  })
});
