import { createSlice } from "@reduxjs/toolkit";

const volumeSlice = createSlice({
    name: "volume",
    initialState: {
        volumeLevel: 50,
    },
    reducers: {
        setVolume: (state, action) => {
            state.volumeLevel = action.payload;
        },
    },
});

export const { setVolume } = volumeSlice.actions;
export default volumeSlice.reducer;