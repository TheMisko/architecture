import React from "react";
import Nav from "../components/nav";
import TestC1 from "../components/testC1";
import { Link } from "react-router-dom";
const Projects = () => {
  const url =
    "https://media.gq.com/photos/5b6b1d966515980b722b526a/master/w_1600%2Cc_limit/The-Brutal-Wonders-Of-The-Architecture-World-GQ-Style-Fall-2018_13.jpg";
  const url1 =
    "https://arcspace.com/wp-content/uploads/CropUp/-/media/930633/01_stoller.jpg";
  const url2 =
    "https://dnsarchitectsinc.com/wp-content/uploads/2019/07/architecture-black-and-white-boardwalk-262367.jpg";
  const url3 =
    "https://www.habitat67.com/wp-content/themes/habitat67/assets/images/hommage-architecte/achitecte-block1-small5-full.jpg";
  const url4 =
    "https://i.pinimg.com/originals/4f/53/eb/4f53eb17c1b5feea5b656ab6abf2fd8f.jpg";
  return (
    <>
      <div>
        <div className="fixed">
          <Nav />
        </div>
        <div className="mobile-projects-show">
          <TestC1 />
        </div>
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
                <h2>Bangalore International</h2>
              </a>
            </div>
            <div className="project-item">
              <a style={{ textDecoration: "none" }} href="#five">
                <h2>Wayne State University</h2>
              </a>
            </div>
          </div>{" "}
          <div className="column">
            <div id="one" className="block"></div>

            <div className="project-scroll-1">
              <Link
                style={{ textDecoration: "none" }}
                to="/Stratos Research Center"
              >
                <div className="PS-name">
                  <h1>Stratos Research Center</h1>
                </div>

                <div className="project-scroll-img">
                  <img src={url} />
                </div>
                <h4>More about this project</h4>
              </Link>
            </div>

            <div id="two" className="block"></div>
            <div className="project-scroll-1">
              <Link style={{ textDecoration: "none" }} to="/Cotswolds bungalow">
                <div className="PS-name">
                  <h1>Cotswolds bungalow</h1>
                </div>

                <div className="project-scroll-img">
                  <img src={url1} />
                </div>
                <h4>More about this project</h4>
              </Link>
            </div>
            <div id="three" className="block"></div>
            <div className="project-scroll-1">
              <Link style={{ textDecoration: "none" }} to="/Matchbox houses">
                <div className="PS-name">
                  <h1>Matchbox houses</h1>
                </div>

                <div className="project-scroll-img">
                  <img src={url3} />
                </div>
                <h4>More about this project</h4>
              </Link>
            </div>
            <div id="four" className="block"></div>

            <div className="project-scroll-1">
              <Link
                style={{ textDecoration: "none" }}
                to="/Bangalore International"
              >
                <div className="PS-name">
                  <h1>Bangalore International</h1>
                </div>

                <div className="project-scroll-img">
                  <img src={url2} />
                </div>
                <h4>More about this project</h4>
              </Link>
            </div>
            <div id="five" className="block"></div>
            <div className="project-scroll-1">
              <Link
                style={{ textDecoration: "none" }}
                to="/Wayne State University"
              >
                <div className="PS-name">
                  <h1>Wayne State University</h1>
                </div>

                <div className="project-scroll-img">
                  <img src={url4} />
                </div>
                <h4>More about this project</h4>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
