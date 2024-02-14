import { createSlice } from "@reduxjs/toolkit"; 

const initalState = { count: 0 };

export const counterSlice = createSlice({
    name: "counter",
    initialState: initalState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        }
    }
});

export const {increment, decrement} = counterSlice.actions;
export const counterReducer = counterSlice.reducer;