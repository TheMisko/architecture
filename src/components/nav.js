import React from "react";
import MobileNav from "../components/mobileNav";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <>
      <div className="mobile-nav">
        {" "}
        <MobileNav />
      </div>
      <div className="nav-container">
        <div className="nav-logo">
          <Link style={{ textDecoration: "none" }} to="/">
            <h2>Matthew&Maricel</h2>
          </Link>
        </div>
        <div className="nav-btns">
          {" "}
          <div className="nav-btn">
            <Link style={{ textDecoration: "none" }} to="/">
              {" "}
              <h4>Home</h4>
            </Link>
          </div>
          <div className="nav-btn">
            <Link style={{ textDecoration: "none" }} to="/services">
              <h4>Services</h4>
            </Link>
          </div>
          <div className="nav-btn">
            <Link style={{ textDecoration: "none" }} to="/projects">
              <h4>Projects</h4>
            </Link>
          </div>
          <div className="nav-btn">
            <Link style={{ textDecoration: "none" }} to="/aboutus">
              <h4>About us</h4>
            </Link>
          </div>
          <div className="nav-btn">
            <Link style={{ textDecoration: "none" }} to="/contact">
              {" "}
              <h4>Contact us</h4>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Nav;
