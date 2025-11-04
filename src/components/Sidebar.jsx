import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-1/4 flex flex-col gap-10 h-full p-10 shadow-lg h-100">
      <li>
        <ul>
          <Link to="/user">Add Blog</Link>
        </ul>
      </li>
      <li>
        <ul>
          <Link to="/user">Pending Blog</Link>
        </ul>
      </li>
      <li>
        <ul>
          <Link to="/user">Rejected Blog</Link>
        </ul>
      </li>
      <li>
        <ul>
          <Link to="/user">Confirmed Blog</Link>
        </ul>
      </li>
    </div>
  );
};

export default Sidebar;
