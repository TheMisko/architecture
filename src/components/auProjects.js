import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const AuProjects = () => {
  const url1 =
    "http://www.jpjouve.com/wp-content/uploads/2016/10/20161016-jp-jouve-black-white-cityscape-paris-Notre-Dame-de-lEsp%C3%A9rance-1-HQ-WQ.jpg";
  const url2 =
    "https://arcspace.com/wp-content/uploads/CropUp/-/media/930633/01_stoller.jpg";
  return (
    <div className="au-text">
      <div className="au-projects">
        <div className="project-img1">
          <div className="project-img-info">
            <h3>More about the project</h3> <h5>24/5/2017</h5>
          </div>
          <div data-aos-duration="2500" data-aos="fade-right">
            {" "}
            <img src={url1} />
          </div>
        </div>
        <div className="project-img2">
          <div data-aos-duration="2500" data-aos="fade-left">
            {" "}
            <img src={url2} />
          </div>

          <div className="project-img-info">
            <h3>More about the project</h3> <h5>10/9/2017</h5>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuProjects;
