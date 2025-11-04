import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const User = () => {
  return (
    <>
      <div className="flex flex-row ">
        <Sidebar />
        <Outlet />
      </div>
    </>
  );
};

export default User;
