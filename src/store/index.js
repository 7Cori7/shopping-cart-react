import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./slices/cart-slice";

const store = configureStore({
    reducer: {
        cart: cartReducer, 
        // you can add all the reducers you want here...
    },
});

export default store;