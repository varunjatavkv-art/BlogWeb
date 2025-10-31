import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import Header from "../components/Header";
import App from "../App";

const PrivateRoute = () => {
  //   const authToken = useSelector((state) => state.auth.token);
  //   const tokenString = localStorage.getItem("storagetoken");
  //   const token = tokenString ? JSON.parse(tokenString) : null;
  const stateToken = useSelector((state) => state.auth.token);
  const [token, setToken] = useState(
    stateToken || localStorage.getItem("storagetoken")
  );

  if (token) {
    return <Outlet />;
  } else {
    return <Navigate to={"/"} replace />;
  }
};

export default PrivateRoute;
