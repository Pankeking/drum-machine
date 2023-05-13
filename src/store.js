import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./features/displaySlice";
import buttonReducer from "./features/buttonSlice";

const store = configureStore({
    reducer: {
        display: displayReducer,
        button: buttonReducer,
    }
});

export default store;