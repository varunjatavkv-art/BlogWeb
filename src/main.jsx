import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "../redux/store/store.js";

//! page routes
import Login from "./page/Login.jsx";
import Signup from "./page/Signup.jsx";
import Home from "./page/Home.jsx";
import User from "./page/User.jsx";
import Admin from "./page/Admin.jsx";
import PrivateRoute from "./PrivateRoute/PrivateRoute.jsx";
import AddBlog from "./components/AddBlog.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <App >
        <Routes>
          //? public routes
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

          //? private routes
          <Route path="" element={<PrivateRoute />}>
            <Route path="/home" element={<Home />} />
            <Route path="/user" element={<User />} >
             <Route index element={<AddBlog />} />
             </Route>
            <Route path="/admin" element={<Admin />} />
          </Route>

          <Route path="*" element={<h1>Not Found</h1>} />
        </Routes>
        </App>
      </BrowserRouter>
    </Provider>
  </StrictMode>
);
