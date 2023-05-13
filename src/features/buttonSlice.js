import { createSlice } from "@reduxjs/toolkit";

const buttonSlice = createSlice({
    name: "button",
    initialState: {
        pressedButton: null,
    },
    reducers: {
        setPressedButton: (state, action) => {
            state.pressedButton = action.payload;
        },
        clearPressedButton: (state) => {
            state.pressedButton = null;
        }
    }
});

export const { setPressedButton, clearPressedButton} = buttonSlice.actions;
export default buttonSlice.reducer;