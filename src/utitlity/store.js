import { configureStore } from "@reduxjs/toolkit";
import userSliceRducer from "./userSlice";
const store = configureStore({
    reducer:{
        users:userSliceRducer
    }
});

export default store;