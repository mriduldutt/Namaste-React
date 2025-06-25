import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";

export const fetchThunkData = createAsyncThunk(
    'restraunt/fetchRes',async(dispatch) =>{
        try{
            const data = await fetch('https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6465998&lng=77.3395938&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
            const json = await data.json();
            return json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        }
        catch(err){
            throw new Error("Error" + err)
        }
    });


const restrauntSlice_thunk = createSlice({
    name: "restraunt",
    initialState: {
        isloading:false,
        list: [],
        error:'',
    },
    // reducers: {
    //     fetchRestrauntList: (state) => {
    //         state.isloading = true
    //     },
    //     setRestrauntList: (state, action) => {
    //         state.list.push(action.payload);
    //         state.error = '';
    //     },
    //     fetchError:(state, action) =>{
    //         isloading = false
    //         state.error = action.payload || "Error";
    //     }

    // },

    extraReducers : (builder) => {
         builder.addCase(fetchThunkData.pending, (state,action) => {
             state.isloading = true;
         }).addCase(fetchThunkData.fulfilled, (state,action) => {
             state.isloading = false;
             state.list = action.payload;
             state.error = '';
         }).addCase(fetchThunkData.rejected, (state,action) => {
             state.isloading = true;
             state.error = action.error.message
         })

    }
});




export const { setRestrauntList,fetchRestrauntList } = restrauntSlice_thunk.actions;
export default restrauntSlice_thunk.reducer;