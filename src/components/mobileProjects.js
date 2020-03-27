import React from "react";

const MobileProjects = () => {
  return (
    <div className="mobile-projects-container">
      <div className="flex">
        {" "}
        <div className="projects-list-container">
          <div className="project-item">
            <a style={{ textDecoration: "none" }} href="#one">
              <h2>Stratos Research Center</h2>
            </a>
          </div>
          <div className="project-item">
            <a style={{ textDecoration: "none" }} href="#two">
              <h2>Cotswolds bungalow</h2>
            </a>
          </div>
          <div className="project-item">
            <a style={{ textDecoration: "none" }} href="#three">
              <h2>Matchbox houses</h2>
            </a>
          </div>
          <div className="project-item">
            <a style={{ textDecoration: "none" }} href="#four">
              <h2>Bangalore International Centre</h2>
            </a>
          </div>
          <div className="project-item">
            <a style={{ textDecoration: "none" }} href="#five">
              <h2>Wayne State University</h2>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileProjects;
