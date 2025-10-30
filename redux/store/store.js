import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducers.js";

export const store = configureStore({
    reducer: {
        auth: authReducer
    }
});