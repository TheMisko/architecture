import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Project4 = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://dnsarchitectsinc.com/wp-content/uploads/2019/07/architecture-black-and-white-boardwalk-262367.jpg"
  );

  const images = [
    "https://dnsarchitectsinc.com/wp-content/uploads/2019/07/architecture-black-and-white-boardwalk-262367.jpg",
    "https://cdn.indesignlive.com/wp-content/uploads/HIPLA_HyundaiCapital_ConventionHall_22_160620.jpg",
    "https://hetnieuweinstituut.nl/sites/default/files/styles/width_1024/public/nain_1226-1_2500px.jpg?itok=i_F_wWqJ"
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
          <h1>Bangalore International</h1>
          <h3>Public space</h3>
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
            <h1>Bangalore International</h1>
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

export default Project4;
