import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const menuItems = (
    <React.Fragment>
      <li>
        {" "}
        <Link to="/" className="nav-list">
          Home
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/services" className="nav-list">
          Services
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/portfolio" className="nav-list">
          Portfolio
        </Link>{" "}
      </li>
      <li>
        {" "}
        <Link to="/contactme" className="nav-list">
          Contact Me
        </Link>{" "}
      </li>
    </React.Fragment>
  );

  return (
    <motion.div
      initial={{ y: -600 }}
      animate={{ y: 0 }}
      transition={{ delay: 1 }}
    >
      <div className="navbar bg-base-100 mb-16 mt-8  ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            ></ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">Sushant</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="navbar-download-btn rounded-md text-black"
          >
            Downlaod Resume
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
