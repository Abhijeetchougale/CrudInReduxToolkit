import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./userData";

const userSlice = createSlice({
    name:'users',
    initialState:Data,
    reducers:{

    }
})

export default userSlice.reducer;