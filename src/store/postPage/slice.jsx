import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: true,
    post: null,
    // comments: [],
}

export const postPageSlice = createSlice({
    name : "postPage",
    initialState,
    reducers :{
        startLoading : (state)=>{
            state.loading = true;
        },
        postFullyFetched : (state, action)=>{
            // const id = action.payload
            state.post = action.payload
            console.log("state.post.....",state.post)
            state.loading = false
        }
    }
})

export const {startLoading, postFullyFetched} = postPageSlice.actions

export default postPageSlice.reducer