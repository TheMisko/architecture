import React from "react";
import { Link } from "react-router-dom";
const MobileNav = () => {
  return (
    <div class="content">
      <Link to="/" style={{ textDecoration: "none" }}>
        {" "}
        <h1>M & M</h1>
      </Link>

      <nav role="navigation">
        <div id="menuToggle">
          <input type="checkbox" />
          <span></span>
          <span></span>
          <span></span>
          <ul id="menu">
            <li>
              <Link style={{ textDecoration: "none" }} to="/">
                <p>Home</p>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/services">
                <p id="menu=p">Services</p>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/projects">
                <p>Projects</p>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/aboutUs">
                <p>About Us</p>
              </Link>
            </li>
            <li>
              <Link style={{ textDecoration: "none" }} to="/contact">
                <p>Contact Us</p>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default MobileNav;
