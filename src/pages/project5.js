import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Project5 = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://i.pinimg.com/originals/4f/53/eb/4f53eb17c1b5feea5b656ab6abf2fd8f.jpg"
  );

  const images = [
    "https://i.pinimg.com/originals/4f/53/eb/4f53eb17c1b5feea5b656ab6abf2fd8f.jpg",
    "http://www.jpjouve.com/wp-content/uploads/2016/10/20161016-jp-jouve-black-white-cityscape-paris-Notre-Dame-de-lEsp%C3%A9rance-1-HQ-WQ.jpg",

    "https://www.beta-architecture.com/wp-content/uploads/2015/12/1369-16.jpg"
  ];

  const changeImage = img => {
    setBackgroundImage(img);
  };
  return (
    <div className="container">
      <Nav />{" "}
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`,
          width: "100vw",
          height: "80vh",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center"
        }}
        className="project-header"
      >
        {" "}
        <div className="project-name">
          <h1>Wayne State University</h1>
          <h3>University</h3>
        </div>
        <div className="project-buttons">
          {" "}
          {images.map(img => (
            <div onClick={() => changeImage(img)} className="button"></div>
          ))}
        </div>
      </div>
      <div className="project-info-container">
        {" "}
        <div className="project-info">
          <div>
            <h1>Wayne State University</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>
        </div>
        <div className="project-images">
          <div data-aos-duration="2500" data-aos="fade-right">
            <img src={images[1]} />
          </div>
          <div data-aos-duration="2500" data-aos="fade-left">
            <img src={images[2]} />
          </div>
        </div>
        <Footer />
      </div>{" "}
    </div>
  );
};

export default Project5;
