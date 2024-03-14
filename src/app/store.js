import { configureStore } from '@reduxjs/toolkit';
import userRecuder from '../features/userSlice.js';

export const store = configureStore({
  reducer: {
    user: userRecuder,
  },
});
