import { createSlice, nanoid } from "@reduxjs/toolkit";


const cartReduxStoreSlice = createSlice({
    name : 'cart',
    initialState : {
        items:[]
    },
    reducers : {
        addItem: (state, action) =>{
            //mutating the state here
            // Vanilla redux way ==>  Dont mutate the state , returing complusory
            // const newState = [...state]
            // newState.items.push(action.payload)
            // return newState

            // Redux toolkit way ==>  Mutate the state
            //   state.items.push(action.payload)
            const actiondata = {
                id:nanoid(),
                ...action.payload
            }
            state.items.push(actiondata);
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






