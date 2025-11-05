import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../reducers/authReducers.js";
import blogReducer from "../reducers/blogReducer.js";

export const store = configureStore({
    reducer: {
        auth: authReducer,
        blog: blogReducer
    },
});