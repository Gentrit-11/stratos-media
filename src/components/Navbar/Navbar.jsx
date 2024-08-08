import React from "react";
import "./navbar.css";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import logo from '../Navbar/images/logo.jpg';
import { HashLink as Link } from 'react-router-hash-link';

const Navbar = ({ hidePricingContact }) => {
  const [isMobile, setIsMobile] = useState(false);

  console.log("Navbar hidePricingContact prop:", hidePricingContact);  // Log the prop to debug

  return (
    <div className="container-navbar">
      <div className="navbar">
        <div className="logo-container">
          <img src={logo} alt="My Image" className="logo-img" />
          STRATOS MEDIA
        </div>
        <ul
          className={isMobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setIsMobile(false)}
        >
          <Link to="/" className="nav-link">
            <li>Home</li>
          </Link>
          <Link to="/services" className="nav-link">
            <li>Services</li>
          </Link>
          <Link to="/aboutus" className="nav-link">
            <li>About Us</li>
          </Link>
          <Link to="/ourwork" className="nav-link">
            <li>Our Work</li>
          </Link>
          {!hidePricingContact && (
            <>
              <Link to="#price" className="nav-link">
                <li>Pricing</li>
              </Link>
              <Link to="#footer" className="nav-link nav-link-contact">
                <li>Contact Us</li>
              </Link>
            </>
          )}
        </ul>
        <div className="mobile-menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? (
            <AiOutlineClose className="menu-icon-close" />
          ) : (
            <AiOutlineMenu className="menu-icon-open" />
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
