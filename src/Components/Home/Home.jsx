import React from "react";
import "./home.css";
import map from "../../Assets/map.png";
import { Link } from "react-router-dom";
import logo from "../../Assets/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
          <p>Sign In</p>
        </nav>
      </div>
      <div className="home_page">
        <div className="home_desc">
          <h1>
            The Most Affordable <br /> Place To Stay In <br />
            Nairobi Area
          </h1>
        </div>
        <div className="map">
          <img src={map} alt="map" />
          <form>
            <div className="location_box">
              <select name="rooms" id="rooms">
                <option value="">All Types</option>
                <option value="1BR">1BR</option>
                <option value="2BR">2BR</option>
                <option value="3BR">3BR</option>
              </select>
              <select name="house" id="house">
                <option value="">Neighborhood</option>
                <option value="Kilimani">Kilimani</option>
                <option value="Rongai">Rongai</option>
                <option value="Kasarani">Kasarani</option>
                <option value="Kahawa">Kahawa</option>
              </select>
              <input type="submit" value="Search" />
              {/* <FontAwesomeIcon icon="fa-sharp fa-solid fa-magnifying-glass" /> */}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Home;
