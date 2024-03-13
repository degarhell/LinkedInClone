import { configureStore } from '@reduxjs/toolkit';
import userRecuder from '../features/userSlice';

export const store = configureStore({
  reducer: {
    user: userRecuder,
  },
});
