import { createSlice } from "@reduxjs/toolkit";
import { createBlog } from "../actions/blogActions.js";

const blogSlice = createSlice({
  name: "blog",
  initialState: {
    formData: {
      imageFile: null, 
      title: "",
      description: "",
      created_at: "",
      edited_at: "",
      created_by: "",
      edited_by: "",
    },
    status: "",
    author: "",
    loading: false,
    error: null,
    success: false,
  },
  reducers: {
    getFormData: (state, action) => {
      const { name, value } = action.payload;
      state.formData[name] = value;
    },
    resetForm: (state) => {
      state.formData = {
        imageFile: null,
        title: "",
        description: "",
        created_at: "",
        edited_at: "",
        created_by: "",
        edited_by: "",
      };
    },
  },
  extraReducers: (builders) => {
    builders.addCase(createBlog.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builders.addCase(createBlog.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
      state.success = false;
    });
    builders.addCase(createBlog.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.success = true;
      state.status = action.payload;
      state.author = action.payload.author;
    });
  },
});

export const {getFormData,resetForm} = blogSlice.actions;
export default blogSlice.reducer;