import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="text-center fixed w-full top-0 bg-gray-800 font-bold text-md text-white font-mono">
      <ul>
        <li className="inline-block pt-4 pb-4 transition duration-200 hover:text-indigo-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <Link to="/" className="pl-6 pr-8">
            Home
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4 transition duration-200 hover:text-indigo-300 ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <Link to="/about" className="pl-6 pr-8">
            About
          </Link>
        </li>
        <li className="inline-block pt-4 pb-4 transition duration-200 hover:text-indigo-300  ease-in-out transform hover:-translate-y-1 hover:scale-110">
          <Link to="/articles-list" className="pl-6 pr-8">
            Articles
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
