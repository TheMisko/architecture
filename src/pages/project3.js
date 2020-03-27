import React, { useState } from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const Project3 = () => {
  const [backgroundImage, setBackgroundImage] = useState(
    "https://www.habitat67.com/wp-content/themes/habitat67/assets/images/hommage-architecte/achitecte-block1-small5-full.jpg"
  );

  const images = [
    "https://www.habitat67.com/wp-content/themes/habitat67/assets/images/hommage-architecte/achitecte-block1-small5-full.jpg",
    "https://www.kcet.org/sites/kl/files/thumbnails/image/sinatra-residence-exterior-2-cal-state-library-1200.jpg",

    "https://images.squarespace-cdn.com/content/v1/566a61030e4c11b7fa580abf/1454998488982-KQNRRIS8NMK1O8TBI5JJ/ke17ZwdGBToddI8pDm48kAFOyjJ4eQ8fZLEVg_wmc7J7gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z4YTzHvnKhyp6Da-NYroOW3ZGjoBKy3azqku80C789l0k6sq9GEl9ZUDkp1sRKcAyL5Hd0MwZvZQYZgoIu91QgLegzP01x1yYpJMErlvn2lCQ/0081_Render_A.jpg?format=2500w"
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
          <h1>Matchbox houses</h1>
          <h3>Vacation Home</h3>
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
            <h1>About Matchbox houses</h1>
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
            <img src={images[0]} />
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

export default Project3;
