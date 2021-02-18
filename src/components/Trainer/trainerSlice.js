import { createSlice } from "@reduxjs/toolkit";

export const trainerSlice = createSlice({
    name: 'trainer',
    initialState: {
        keysPressedAll: 0,
        keysPressedWrong: 0,
        keysPressedCorrect: 0
    },
    reducers: {
        keyPressed: (state) => {
            state.keysPressedAll += 1;
        },
        keyPressedWrong: (state) => {
            state.keysPressedWrong += 1;
        },
        keyPressedCorrect: (state) => {
            state.keysPressedCorrect += 1;
        }
    }
});

export const { keyPressed, keyPressedWrong, keyPressedCorrect } = trainerSlice.actions;

export default trainerSlice.reducer;