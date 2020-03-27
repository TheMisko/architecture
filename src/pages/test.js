import React, { useState } from "react";
import Nav from "../components/nav";
import TestC1 from "../components/testC1";
import TestC2 from "../components/testC2";

const Test = () => {
  const [index, setIndex] = useState(0);
  const changeState = () => {
    setIndex(index + 1);
  };
  console.log(index);
  const url =
    "https://www.tokkoro.com/picsup/3112580-architectural-design_architecture_black_black-and-white_building_clouds_contemporary_downtown_glass_light_low-angle-shot_modern_office_perspective_reflection_sky_skyscraper_steel_street_window.jpg";
  return (
    <div className="test">
      <div class="content">
        <nav role="navigation">
          <div id="menuToggle">
            <input type="checkbox" />
            <span></span>
            <span></span>
            <span></span>
            <ul id="menu">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Info</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Test;
