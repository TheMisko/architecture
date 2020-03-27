import React from "react";
import Nav from "../components/nav";
import NavBottom from "../components/navBottom";
import HomeProjectsDisplay from "./homeProjectsDisplay";
import Footer from "../components/footer";

const Home = () => {
  const url =
    "https://c.wallhere.com/photos/fc/9d/architecture_monochrome_abstract_curves_geometry_blackandwhite_repetitive_monotonous-560909.jpg!d";
  // https://i.pinimg.com/originals/aa/b6/71/aab671643d9b3dc0343602cd1f0747e5.jpg  https://c.wallhere.com/photos/41/24/1920x1080_px_abstract_monochrome-774169.jpg!d
  return (
    <div className="home-container">
      <NavBottom />
      <div className="absolute">
        {" "}
        <Nav />
      </div>

      <div className="home-text">
        <h1>
          THE INTERSECTION BETWEEN
          <br />
          DESIGN & ARCHITECTURE
        </h1>
      </div>

      <img src={url} />
      <HomeProjectsDisplay />
      <Footer />
    </div>
  );
};

export default Home;
