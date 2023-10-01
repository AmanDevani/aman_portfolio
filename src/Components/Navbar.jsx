import React from "react";
import "./style.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-item">
            <NavLink className="navbar-link" to="/" data-nav-link>
              About
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink className="navbar-link" to="/experience" data-nav-link>
              Experience
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink className="navbar-link" to="/portfolio" data-nav-link>
              Portfolio
            </NavLink>
          </li>

          <li className="navbar-item">
            <NavLink className="navbar-link" to="/contact" data-nav-link>
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
