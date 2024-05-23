// Create slice
// Initialize intial state
// slice -> name, mention initial state, actions (reducers)

import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        // Here goes all my actions:
        addToCart(state, action){
            state.push(action.payload);
        },
        removeItem(state, action){

            return state.filter(item => item.id !== action.payload);
        }
    }
});

// export all your actions
export const { addToCart, removeItem } = cartSlice.actions;

// export your reducer
export default cartSlice.reducer;