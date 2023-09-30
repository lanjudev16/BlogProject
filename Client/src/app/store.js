import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import bookMarkReducer from '../features/BookMark/BookMarkSlice'
import { baseApi } from '../features/api/baseApi'
import userSlice from '../features/user/userSlice'
export const store = configureStore({
  reducer: {
    bookMark: bookMarkReducer,
    userSlice:userSlice,
    [baseApi.reducerPath]: baseApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(baseApi.middleware),
})