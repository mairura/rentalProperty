import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <nav className="nav_container">
        <ul>
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "#fff" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/tenants"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Tenants
            </Link>
          </li>
          <li>
            <Link
              to="/landlord"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Landlords
            </Link>
          </li>
          <li>
            <Link
              to="/contactus"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              Contact Us
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
