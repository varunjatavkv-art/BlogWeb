import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { resetToken } from "../../redux/reducers/authReducers";
const Header = () => {
  const stateToken = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const localTokenString = localStorage.getItem("storagetoken");
  const localToken = localTokenString ? JSON.parse(localTokenString) : null;
  const token = stateToken || localToken;

  const logout = () => {
    localStorage.removeItem("storagetoken");
    dispatch(resetToken());
    navigate("/", { replace: true });
  };
  return (
    <header className="flex items-center justify-between fixed px-4 pt-4 bg-white pb-4 w-full shadow-md">
      <div>
        <img
          src="https://png.pngtree.com/png-vector/20230304/ourmid/pngtree-colorful-blog-speech-bubble-vector-png-image_6633021.png"
          alt="blog logo"
          loading="lazy"
          height={"50px"}
          width={"80px"}
        />
      </div>
      <div>
        <nav className="flex items-center justify-between gap-10">
          <Link to="/blog">Blog</Link>
          <Link to="/add_blog">Add Blog</Link>
          {token ? (
            <button
              className="bg-red-500 text-white block p-2 font-bold cursor-pointer rounded-lg"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <Link to="/" className="bg-blue-500 text-white block p-2">
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
};

export default Header;
