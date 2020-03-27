import React, { useState } from "react";
import HpdText from "../components/hpdText";
import HpdSlider from "../components/hpdSlider";
import HpdSliderMenu from "../components/hpdSliderMenu";

const HomeProjectsDisplay = () => {
  const [index, setIndex] = useState(0);
  console.log(index);

  return (
    <div className="HPD-container">
      <HpdText />
      <div className="HPD-slider-container">
        {" "}
        <div className="HPD-slider-menu-container">
          {" "}
          <HpdSliderMenu index={index} setIndex={setIndex} />
        </div>
        <div className="HPD-slider">
          <HpdSlider index={index} />
        </div>
      </div>
    </div>
  );
};

export default HomeProjectsDisplay;
