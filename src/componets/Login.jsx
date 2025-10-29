import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <h1 className="text-4xl py-10">Login Form</h1>
      <form
        action=""
        className="flex flex-col content-between w-[800px] m-auto gap-5 p-10 text-left rounded-2xl"
        style={{ "boxShadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="username" className="text-xl">
            User Name :
          </label>
          <input
            type="text"
            name="username"
            id="username"
            placeholder="Please Type your User Name"
            className="p-3 text-xl"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="password" className="text-xl">
            Password :
          </label>
          <input
            type="text"
            name="password"
            id="password"
            placeholder="Please Type your Password"
            className="p-3 text-xl"
          />
        </div>
        <input
          type="submit"
          className="cursor-pointer bg-blue-500 text-white p-3 rounded-xl"
        />
        <p>
          Don't have coount?{" "}
          <Link to="/signup" className="text-blue-500">
            Please Signup
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
