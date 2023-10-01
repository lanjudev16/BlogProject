import { createSlice } from "@reduxjs/toolkit";
const initialState={
    bitStore:[]
}
export const nftBitSlice=createSlice({
    name:"nftBitSlice",
    initialState,
    reducers:{
        storeNftBIt:(state,{payload})=>{
            state.bitStore.push(payload)
        },
        deleteNftBit:(state,{payload})=>{
            state.bitStore=state.bitStore.filter(bit=>bit.id!==payload)
        },
        updateNftBit:(state,{payload})=>{
            let bit=state.bitStore.find(item=>item.id==payload.id)
            bit.name=payload.name
            bit.ethValue=payload.ethValue
        }
    }
})

export const {storeNftBIt,deleteNftBit,updateNftBit} = nftBitSlice.actions

export default nftBitSlice.reducer