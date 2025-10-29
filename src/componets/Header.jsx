import React from 'react'
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <header className="flex items-center justify-between fixed px-4 pt-4 bg-white pb-4 w-[70%]">
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
            <Link to="/" className="bg-blue-500 text-white block p-2">
              Login
            </Link>
          </nav>
        </div>
      </header>
  )
}

export default Header