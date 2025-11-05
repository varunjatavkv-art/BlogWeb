import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const createBlog = createAsyncThunk(
  "blog/create",
  async (formData, { rejectWithValue }) => {
    
    const rawToken = localStorage.getItem("storagetoken");
    const authHeader = rawToken ? `Bearer ${rawToken}` : null;
    
    if (!authHeader) {
        return rejectWithValue("Authentication token not found. Please log in.");
    }

    // FIX: Hardcode the known working URL to bypass potential VITE_API config issues
    const apiUrl = `http://localhost:1040/blog/add`;

    try {
      const res = await axios.post(
        apiUrl,
        formData,
        {
          headers: {
            "Authorization": authHeader,
            // CRITICAL: DO NOT manually set Content-Type header here for FormData.
          },
        }
      );
      
      return res.data; 
      
    } catch (error) {
      const responseData = error.response?.data;
      
      // FIX: Ensure a string is returned from the error response object
      const errorMessage =
        responseData?.error?.message ||
        responseData?.error || 
        responseData?.message ||
        (typeof responseData === 'string' ? responseData : "An unknown error occurred.");
        
      return rejectWithValue(errorMessage);
    }
  }
);