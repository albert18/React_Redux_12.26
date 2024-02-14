import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";

export const store = configureStore({
    reducer: {
        counter: counterReducer
        // We will fill this reducer in the upcoming videos
    }
    
});

debugger;
console.trace(store);