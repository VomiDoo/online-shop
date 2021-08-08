import { configureStore } from '@reduxjs/toolkit';
import usersSlice from './reducers/usersSlice';
import actualUserSlice from './reducers/actualUserSlice';
import itemList from './reducers/itemListSlice'

export const store = configureStore({
  reducer: {
      users: usersSlice,
      actualUser: actualUserSlice,
      itemList: itemList,
  },
})