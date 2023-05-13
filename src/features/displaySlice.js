import { createSlice } from "@reduxjs/toolkit";

const displaySlice = createSlice({
    name: "display",
    initialState: {
        displayName: "key name",
    },
    reducers: {
        setDisplayName: (state, action) => {
            state.displayName = action.payload;
        },
    },
});

export const { setDisplayName } = displaySlice.actions;
export default displaySlice.reducer;