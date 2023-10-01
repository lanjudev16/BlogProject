import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { createUserWithEmailAndPassword, getAuth, updateProfile } from 'firebase/auth'
import app from '../../firebase/firebase.config'

const auth = getAuth(app)
const initialState = {
    name: "",
    email: "",
    isLoading: true,
    isError: false,
    error: ""
}
export const createUser = createAsyncThunk("userSlice/createUser", async ({ email, password, name }) => {
    const data = await createUserWithEmailAndPassword(auth, email, password)
    await updateProfile(auth.currentUser, {
        displayName: name
    })
    console.log(data);
    return {
        email: data.user.email,
        name: data.user.displayName
    }
})

const userSlice = createSlice({
    name: "userSlice",
    initialState,
    reducers: {
        setUser: (state, { payload }) => {
            state.email = payload.email,
            state.name = payload.name

        },
        toggleLoading:(state,{payload})=>{
            state.isLoading=payload
        }
    },
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state) => {
            state.email = "",
                state.name = "",
                state.isLoading = true,
                state.isError = false,
                state.error = ""
        }).addCase(createUser.fulfilled, (state, { payload }) => {
            state.email = payload.email,
                state.name = payload.name,
                state.isLoading = false,
                state.isError = false,
                state.error = ""
        }).addCase(createUser.rejected, (state, action) => {
            state.email = "",
                state.name = "",
                state.isLoading = false,
                state.isError = true,
                state.error = action.error.message
        })
    }
})
export const {setUser,toggleLoading}=userSlice.actions
export default userSlice.reducer