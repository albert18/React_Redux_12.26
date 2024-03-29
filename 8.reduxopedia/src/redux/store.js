import { configureStore } from "@reduxjs/toolkit";
import { counterReducer } from "./slice/counterSlice";
import { destinationReducer } from "./slice/destinationSlice"; 

export const store = configureStore({
    reducer: {
        counterStore: counterReducer,
        destinationStore: destinationReducer,
        // We will fill this reducer in the upcoming videos
    }
});







// use toolkit for better approach
// store.dispatch({
//     type: 'counter/increment',
// });
// console.log(store.getState());