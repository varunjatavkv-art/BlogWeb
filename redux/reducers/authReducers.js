import { createSlice } from "@reduxjs/toolkit";
import { registration } from "../actions/actions";

const authSlice = createSlice({
  name: "authUsers",
  initialState: {
    users: {
      name: "",
      email: "",
      mobile: "",
      username: "",
      password: "",
    },
    loading: false,
    error: null,
  },
  reducers: {
    getFormData: (state, action) => {
      const { name, value } = action.payload;
      state.users[name] = value;
    },
    resetForm: (state) => {
      state.users = {
        name: "",
        email: "",
        mobile: "",
        username: "",
        password: "",
      };
    },
    submitForm:()=> {

    }
  },
  extraReducers: (builder) => {
    builder.addCase(registration.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    builder.addCase(registration.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.users = action.payload;
    });
  },
});

export const { getFormData, resetForm, submitForm } = authSlice.actions;
export default authSlice.reducer;
