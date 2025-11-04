import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="w-[400px]  h-full p-10 shadow-lg h-full fixed">
      <li className="list-none flex flex-col gap-10 font-bold">
        <ul>
          <Link to="/user">Add Blog</Link>
        </ul>
        <ul>
          <Link to="/user/pending-blogs">Pending Blog</Link>
        </ul>
        <ul>
          <Link to="/user/rejected-blogs">Rejected Blog</Link>
        </ul>
        <ul>
          <Link to="/user/approved-blogs">Approved Blog</Link>
        </ul>
      </li>
    </div>
  );
};

export default Sidebar;
