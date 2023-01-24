import React from "react";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav_container">
        <p className="logo">
          <img src={logo} alt="logo" />
        </p>
        <ul>
          <li>
            <Link to="/" className="links">
              Home
            </Link>
          </li>
          <li>
            <Link to="/tenants" className="links">
              Tenants
            </Link>
          </li>
          <li>
            <Link to="/landlord" className="links">
              Landlords
            </Link>
          </li>
          <li>
            <Link to="/contactus" className="links">
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
