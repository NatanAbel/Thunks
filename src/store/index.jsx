import { configureStore } from "@reduxjs/toolkit";
import feedSlice from "./feed/slice";
import postPageSlice  from "./postPage/slice";
import authSlice  from "./auth/slice";


const store =configureStore({
    reducer:{
        feed : feedSlice,
        postPage : postPageSlice,
        auth : authSlice,
    }
})

export default store