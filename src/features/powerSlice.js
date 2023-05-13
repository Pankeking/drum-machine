import { createSlice } from "@reduxjs/toolkit";

const powerSlice = createSlice({
    name: "power",
    initialState: {
        isOn: true,
    },
    reducers: {
        togglePower: (state) => {
            state.isOn = !state.isOn;
        }
    }
})

export const { togglePower } = powerSlice.actions;
export default powerSlice.reducer;