import { createSlice } from "@reduxjs/toolkit";


const cartReduxStoreSlice = createSlice({
    name : 'cart',
    initialState : {
        items:[]
    },
    reducers : {
        addItem: (state, action) =>{
            //mutating the state here
              state.items.push(action.payload)
        },
        removeItem: (state,action) => {
              state.items.pop();
        },
        clearCart: (state,action) => {
            state.items.length = 0;
        }
    }

});

// {
//     actions:{
//         addItem,
//         removeItem
//     }
//     reducer
// }

export const {addItem, removeItem, clearCart} = cartReduxStoreSlice.actions;

export default cartReduxStoreSlice.reducer;






