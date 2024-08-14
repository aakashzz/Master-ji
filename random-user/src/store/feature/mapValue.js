import { createSlice } from "@reduxjs/toolkit";
const initialState = {
    apiRes: [],
}

const mapSlice = createSlice({
    name:"map",
    initialState,
    reducers:{
        fetchResponse: (state,action)=>{
            state.apiRes = action.payload
        }
    }
})
export default mapSlice.reducer;

export const {fetchResponse} = mapSlice.actions 