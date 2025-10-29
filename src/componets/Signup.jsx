import React from "react";
import { Link } from "react-router-dom";

const Signup = () => {
  return (
    <div>
      <h1 className="text-4xl py-10">Signup Form</h1>
      <form
        action=""
        className="flex flex-col content-between w-[800px] m-auto gap-5 p-10 text-left rounded-2xl"
        style={{ "boxShadow": "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
      >
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-xl">
             Name :
          </label>
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Please Type your Name"
            className="p-3 text-xl"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-xl">
             Email :
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Please Type your Email"
            className="p-3 text-xl"
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-xl">
             Mobile no :
          </label>
          <input
            type="text"
            name="mobile no"
            id="mobile no"
            placeholder="Please Type your Mobile No"
            className="p-3 text-xl"
          />
        </div>
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
          Already have account?{" "}
          <Link to="/" className="text-blue-500">
            Please Login
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Signup;
