import React from "react";
import "./home.css";
import map from "../../Assets/map.png";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";

const Home = () => {
  return (
    <div className="home_container">
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
      <div className="home_desc">
        <h1>
          The Most Affordable <br /> Place To Stay In <br />
          Nairobi Area
        </h1>
      </div>
      <div className="map">
        <img src={map} alt="map" />
      </div>
    </div>
  );
};

export default Home;
