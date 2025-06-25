import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "../utils/cartReduxStoreSlice";
import middleware_logger from "../Middleware/middleware_logger";
import restrauntReducer from "../utils/restrauntSlice_thunk";

const appReduxStore = configureStore({
    reducer : {
         cart : cartReducer,
         restraunts : restrauntReducer
        //  user : userReducer
    },
    middleware : (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})

export default appReduxStore;