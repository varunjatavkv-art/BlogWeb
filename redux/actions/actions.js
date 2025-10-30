import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registration = createAsyncThunk(
    "users/registration",
    async (formData, {rejectWithValue})=> {
        try {
            const res = await axios.post(`${import.meta.env.VITE_API}/registration`, formData, {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            return res.data;
        } catch (error) {
           rejectWithValue(error);
        }
    }
);

export const login = createAsyncThunk(
    "users/login",
    async(formData, {rejectWithValue}) => {
        try {
            const res = await axios.post(`${import.meta.env.VITE_API}/login`, formData);
            return res.data.token; 
        } catch (error) {
            rejectWithValue(error);
        }
    }
)