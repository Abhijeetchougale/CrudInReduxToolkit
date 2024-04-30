import { createSlice } from "@reduxjs/toolkit";
import { Data } from "./userData";

const userSlice = createSlice({
    name:'users',
    initialState:Data,
    reducers:{
        addUser(state, action){
            state.push(action.payload)
        },
        updateUser(state,action){
            const {id, name, age}= action.payload
            const userToupadate = state.find(user=>user.id ===id);
            if(userToupadate){
                userToupadate.name =name;
                userToupadate.age= age;
            }
        },
        removeUser(state,action){
            const {id} = action.payload
            return state.filter(user=>user.id !==id)
        }
    }
})

export const {addUser, updateUser, removeUser}= userSlice.actions;
export default userSlice.reducer;