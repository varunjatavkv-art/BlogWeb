import { createSlice } from "@reduxjs/toolkit";
import { login, registration } from "../actions/actions";

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
    loginUser: {
      username: "",
      password: ""
    },
    userRole: null,
    loading: false,
    error: null,
    success:false,
    token: null,
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
        userRole: ""
      };
    },
     getLoginFormData: (state, action) => {
      const { name, value } = action.payload;
      state.loginUser[name] = value;
    },
    resetLoginForm: (state) => {
      state.loginUser = {
        username: "",
        password: "",
      };
    },
    resetToken: (state) => {
      state.token = null;
    }
  },

  extraReducers: (builder) => {
    // registration
    builder.addCase(registration.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(registration.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
      state.success = false;
    });
    builder.addCase(registration.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.users = action.payload.data;
      state.success = true;
    });
    //login
    builder.addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
      state.success = false;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload || action.error.message;
      state.success = false;
    });
    builder.addCase(login.fulfilled, (state, action) => {
      state.loading = false;
      state.error = null;
      state.token = action.payload.token;
      state.userRole = action.payload.userRole;
      state.success = true;
    });
  },
});

export const { getFormData, resetForm , getLoginFormData, resetLoginForm , resetToken} = authSlice.actions;
export default authSlice.reducer;
