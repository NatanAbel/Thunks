import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    token : null,
    profile : null,
    loading : true,
}

export const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers:{
        startLoading :(state)=>{
            state.loading = true;
        } ,
        // storeToken : (state, action) => {
        //     state.token = action.payload


        // },
        // storeProfile : (state, action) => {
        //     state.profile = action.payload


        // },
        // stopLoading : (state)=>{
        //     state.loading = false
        // },
        userLogedIn : (state, action) => {
            state.token = action.payload.token
            state.profile = action.payload.profile
            state.loading = false
        },
        logout: (state) => {
            if(state.token) {
                localStorage.removeItem("token")
                state.token = null
                state.profile = null
                state.loading = true
            }
        }
    }
})

export const {storeToken, storeProfile, startLoading, stopLoading, userLogedIn, logout} = authSlice.actions

export default authSlice.reducer
