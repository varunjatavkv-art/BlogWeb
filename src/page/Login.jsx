import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import {
  getLoginFormData,
  resetLoginForm,
} from "../../redux/reducers/authReducers";
import { login } from "../../redux/actions/authActions.js";

const Login = () => {
  const { username, password } = useSelector((state) => state.auth.loginUser);
  const token = useSelector((state) => state.auth.token);
  const userRole = useSelector((state) => state.auth.userRole);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(getLoginFormData({ name, value }));
  };

  const submitLoginForm = (e) => {
    e.preventDefault();
    try {
      dispatch(login({ username, password })).unwrap();
      dispatch(resetLoginForm());
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    localStorage.setItem("storagetoken", JSON.stringify(token));
  }, [token]);

  useEffect(() => {
    if (token && userRole == "0") {
      navigate("/admin" , {replace:true});
    }
    if (token && userRole == "1") {
      navigate("/user", {replace:true});
    }
  }, [token, userRole, navigate]);

  return (
    <div>
      <h1 className="text-4xl py-10 text-center">Login Form</h1>
      <form
        className="flex flex-col content-between w-[800px] m-auto gap-5 p-10 text-left rounded-2xl"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        onSubmit={(e) => submitLoginForm(e)}
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
            onChange={(e) => handleChange(e)}
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
            onChange={(e) => handleChange(e)}
          />
        </div>
        <input
          type="submit"
          className="cursor-pointer bg-blue-500 text-white p-3 rounded-xl"
        />
        <p>
          Don't have account?{" "}
          <Link to="/signup" className="text-blue-500">
            Please Signup
          </Link>{" "}
        </p>
      </form>
    </div>
  );
};

export default Login;
