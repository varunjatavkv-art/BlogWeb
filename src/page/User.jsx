import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";

const User = () => {
  return (
    <>
      <div className="flex flex-row h-[100vh]">
        <Sidebar />
        <div className="pl-[500px] w-full">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default User;
