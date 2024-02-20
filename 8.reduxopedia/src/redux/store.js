import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";

export const store = configureStore({
    reducer: {
        counterStore: counterReducer,
        // We will fill this reducer in the upcoming videos
    }
});

// debugger;
console.log(store.getState());





// use toolkit for better approach
// store.dispatch({
//     type: 'counter/increment',
// });
// console.log(store.getState());