import {createSlice} from "@reduxjs/toolkit";

const restrauntSlice = createSlice({
    name: "restraunt",
    initialState: {
        isloading:false,
        list: [],
        error:'',
    },
    reducers: {
        fetchRestrauntList: (state) => {
            state.isloading = true
        },
        setRestrauntList: (state, action) => {
            state.list = action.payload;
            state.error = '';
        },
        fetchError:(state, action) =>{
            isloading = false
            state.error = action.payload || "Error";
        }
    },
});


export const { setRestrauntList,fetchRestrauntList } = restrauntSlice.actions;
export default restrauntSlice.reducer;