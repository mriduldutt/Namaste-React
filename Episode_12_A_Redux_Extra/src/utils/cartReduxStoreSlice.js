import { createSlice, nanoid,current } from "@reduxjs/toolkit";

const initialState = {
        items: JSON.parse(localStorage.getItem("cart")) || [],
}
const cartReduxStoreSlice = createSlice({
    name : 'cart',
    initialState ,
    reducers : {
        addItem: (state, action) =>{
            
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

            // const data = current(state.items);
            // localStorage.setItem("cart", JSON.stringify(data));
        },
        removeItem: (state,action) => {
            //   state.items.pop();
            const actiondata = state.items.filter((items)=>{
                return  items.id !==action.payload;
            })
            state.items = actiondata;

            // localStorage.removeItem("cart");
        },
        clearCart: (state,action) => {
            state.items.length = 0;

            // return {items: []};
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








