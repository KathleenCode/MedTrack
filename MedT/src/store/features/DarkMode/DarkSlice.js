import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkMode: false
}

const darkSlice = createSlice({
    name: "darkMode",
    initialState,
    reducers: {
        toggleDarkMode: (state, action) => {
            state.darkMode = !state.darkMode;
        },
    },
});

export const { toggleDarkMode } = darkSlice.actions;

export const darkReducer = darkSlice.reducer;
