import {createSlice} from '@reduxjs/toolkit'
const initialState={
    cart:[],
}
export const  cartSlice =createSlice({
    name:"cartSlice",
    initialState,
    reducers:{
        storeCartData:(state,{payload})=>{
            state.cart.push(payload)
        }
    }
})
export const {storeCartData}=cartSlice.actions
export default cartSlice.reducer