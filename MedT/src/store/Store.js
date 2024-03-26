import { configureStore } from "@reduxjs/toolkit";
import { labReducer } from "./features/Laboratory/LabSlice";
import { pharmReducer } from "./features/Pharmacy/PharmSlice";
import { darkReducer } from "./features/DarkMode/DarkSlice";

export const store = configureStore({
    reducer: {
        pharmItems: pharmReducer,
        labItems: labReducer,
        darkMode: darkReducer
    }
})