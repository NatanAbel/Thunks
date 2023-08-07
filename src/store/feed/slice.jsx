import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    loading: false,
    posts:[]
}

export const feedSlice = createSlice({
    name: "feed",
    initialState,
    reducers:{
        startLoading : (state)=>{
            state.loading = true; // before having the data loading must be true
        },
        postsFetched : (state, action)=>{
            // We will get 5 posts at a time so it's important we keep the posts
            // currently in the state and add the new incoming ones at the end of the array
            state.posts = [...state.posts, ...action.payload]
            state.loading = false
        }
    }
})

export const {startLoading, postsFetched} = feedSlice.actions

export default feedSlice.reducer
