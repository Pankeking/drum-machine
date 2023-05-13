import { configureStore } from "@reduxjs/toolkit";
import displayReducer from "./features/displaySlice";
import buttonReducer from "./features/buttonSlice";
import powerReducer from "./features/powerSlice";
import volumeReducer from "./features/volumeSlice";

const store = configureStore({
    reducer: {
        display: displayReducer,
        button: buttonReducer,
        power: powerReducer,
        volume: volumeReducer,
    }
});

export default store;