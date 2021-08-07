import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './reducers/usersSlice';
import actualUserSlice from './reducers/actualUserSlice';

export const store = configureStore({
  reducer: {
      users: usersSlice,
      actualUser: actualUserSlice,
  },
})