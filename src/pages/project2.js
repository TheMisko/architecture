import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Project2 = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://arcspace.com/wp-content/uploads/CropUp/-/media/930633/01_stoller.jpg"
  );

  const images = [
    "https://arcspace.com/wp-content/uploads/CropUp/-/media/930633/01_stoller.jpg",
    "https://hetnieuweinstituut.nl/sites/default/files/styles/pages_slider/public/js_ni_ext_2.jpg",
    "https://images.adsttc.com/media/images/5316/54af/c07a/80fc/cb00/0065/large_jpg/Favourite_1.jpg?1393972375"
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
          <h1>Cotswolds bungalow</h1>
          <h3>Home bungalow</h3>
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
            <h1>About Cotswolds bungalow</h1>
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

export default Project2;
