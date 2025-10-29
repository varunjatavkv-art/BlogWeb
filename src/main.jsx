import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./componets/Login.jsx";
import Signup from "./componets/Signup.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path="" element={<App />}>
        <Route index element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </StrictMode>
);
