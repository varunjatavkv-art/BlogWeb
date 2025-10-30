import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getFormData, resetForm } from "../../redux/reducers/authReducers";
import { registration } from "../../redux/actions/actions";

const Signup = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    name = "",
    email = "",
    mobile = "",
    username = "",
    password = "",
  } = useSelector((state) => state?.auth?.users || {});
  const loading = useSelector((state) => state.auth.loading);
  const error = useSelector((state) => state.auth.error);
  // const success = useSelector((state) => state.auth.success);
  

  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(getFormData({ name, value }));
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    try {
      dispatch(
        registration({ name, email, mobile, username, password })
      ).unwrap();
      dispatch(resetForm());
      navigate("/");
    } catch (error) {
      console.log("error:", error);
    }
  };

 

  return (
    <div>
      <h1 className="text-4xl py-10">Signup Form</h1>
      <form
        action=""
        className="flex flex-col content-between w-[800px] m-auto gap-5 p-10 text-left rounded-2xl"
        style={{ boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px" }}
        onSubmit={handleFormSubmit}
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
            value={name}
            onChange={(e) => handleChange(e)}
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
            value={email}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="name" className="text-xl">
            Mobile no :
          </label>
          <input
            type="text"
            name="mobile"
            id="mobile"
            placeholder="Please Type your Mobile No"
            className="p-3 text-xl"
            value={mobile}
            onChange={(e) => handleChange(e)}
            maxLength={10}
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
            value={username}
            onChange={(e) => handleChange(e)}
          />
        </div>
        <div className="flex flex-col gap-3">
          <label htmlFor="password" className="text-xl">
            Password :
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Please Type your Password"
            className="p-3 text-xl"
            value={password}
            onChange={(e) => handleChange(e)}
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
      {loading && "Loading...."}
      {error && error}
    </div>
  );
};

export default Signup;
