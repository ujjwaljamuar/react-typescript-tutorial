import { PayloadAction, configureStore, createSlice } from "@reduxjs/toolkit";

// -----------------------using createReducer--------------------------------------

import { configureStore, createAction, createReducer } from "@reduxjs/toolkit";

interface stateType {
    count: number;
}

const increment = createAction("INCREMENT");
const decrement = createAction("DECREMENT");

const initialState: stateType = {
    count: 0,
};

const rootReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(increment, (state) => {
            state.count += 1;
        })
        .addCase(decrement, (state) => {
            state.count -= 1;
        });
});

export const store = configureStore({ reducer: { rootReducer } });

// ------------------using createSlice -------------------------------

export interface stateType {
    count: number;
}

const initialState: stateType = {
    count: 0,
};

const rootSlice = createSlice({
    name: "counter",
    initialState,
    reducers: {
        increment: (state) => {
            state.count += 1;
        },
        decrement: (state) => {
            state.count -= 1;
        },
        incrementByValue: (state, action: PayloadAction<number>) => {
            state.count += action.payload;
        },
    },
});

export const { increment, decrement, incrementByValue } = rootSlice.actions;

export const store = configureStore({ reducer: rootSlice.reducer });
