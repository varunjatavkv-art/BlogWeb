import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const registration = createAsyncThunk(
    "users/registration",
    async ({rejectWithValue})=> {
        try {
            const res = axios.post("http://localhost/registration");
            return res;
        } catch (error) {
           rejectWithValue(error);
        }
    }
);