import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value:0,
}

export const BookMarkSlice = createSlice({
  name: 'bookMark',
  initialState,
  reducers: {
    isBookMark: (state) => {
      state.value+=1
    }
  },
})

export const { isBookMark } = BookMarkSlice.actions

export default BookMarkSlice.reducer