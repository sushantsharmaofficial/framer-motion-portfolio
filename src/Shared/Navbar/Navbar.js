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
        <Link to="/port" className="nav-list">
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
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            ></ul>
          </div>
          <a className="btn btn-ghost normal-case text-3xl">Sushant</a>
        </div>

        <div className="navbar-center hidden md:flex">
          <ul className="menu menu-horizontal px-1">{menuItems}</ul>
        </div>
        <div className="navbar-end">
          <motion.a
            whileHover={{ scale: 1.1 }}
            href="#"
            className="navbar-download-btn rounded-md text-black text-xl"
          >
            Downlaod Resume
          </motion.a>
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
