import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createBlog = createAsyncThunk(
  "blog/create",
  async (formData, thunkAPI) => {
    
    const { rejectWithValue } = thunkAPI;

    const rawToken = localStorage.getItem("storagetoken");

    const authHeader = rawToken ? `Bearer ${rawToken}` : null;
    // console.log(authHeader);
    
    if (!authHeader) {
        return rejectWithValue("Authentication token not found.");
    }

    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API}/blog/add`,
        formData,
        {
          headers: {
            "Content-Type":"multipart/form-data",
            "Authorization": authHeader,
          },
        }
      );
      
      return res.data; 
      
    } catch (error) {
      const errorMessage =
        error.response?.data?.message ||
        error.message ||
        "An unknown error occurred.";
        
      return rejectWithValue(errorMessage);
    }
  }
);