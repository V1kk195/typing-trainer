import { configureStore } from '@reduxjs/toolkit';
import trainerReducer from "./components/Trainer/trainerSlice";

export default configureStore({
    reducer: {
        trainer: trainerReducer
    }
})