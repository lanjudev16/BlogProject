import { configureStore } from '@reduxjs/toolkit'
import bookMarkReducer from '../features/BookMark/BookMarkSlice'
export const store = configureStore({
  reducer: {
    bookMark:bookMarkReducer,
  },
})