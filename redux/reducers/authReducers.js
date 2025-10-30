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
      state.users = action.payload;
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
      console.log("action:", action.payload);
      
      state.loading = false;
      state.error = null;
      state.token = action.payload;
      state.success = true;
    });
  },
});

export const { getFormData, resetForm , getLoginFormData, resetLoginForm } = authSlice.actions;
export default authSlice.reducer;
