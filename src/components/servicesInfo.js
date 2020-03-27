import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

AOS.init();

const ServicesInfo = () => {
  const url =
    "https://jooinn.com/images1280_/grayscale-photo-of-concrete-building-2.jpg";
  const url1 =
    "https://images.unsplash.com/photo-1527259216948-b0c66d6fc31f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80";
  const url2 =
    "https://tomaszjanickiphoto.co.uk/wp-content/gallery/black-white/DSC_9816-Panon.JPG";
  const url3 =
    "https://www.dsi.rs/wp-content/uploads/2019/08/master-40-interfejsi-za-interoperabilnost-sistema-za-industriju-40.jpg";

  return (
    <div className="services-Info">
      <div className="services-info-item">
        <div data-aos-duration="2500" data-aos="fade-right">
          <img src={url} />
        </div>
        <div className="services-info-item-text">
          {" "}
          <h2>Architecture</h2>{" "}
          <h5>It begins with curiosity. Nothing is more essential.</h5>
        </div>
      </div>
      <div className="services-info-item-reverse">
        <div data-aos-duration="2500" data-aos="fade-left">
          <img src={url1} />
        </div>
        <div className="services-info-item-text">
          {" "}
          <h2>Interior and Graphic Design</h2>{" "}
          <h5>
            We design and create building identities that <br />
            support the building's functionality and give it <br />
            character.
          </h5>
        </div>
      </div>
      <div className="services-info-item">
        <div data-aos-duration="2500" data-aos="fade-right">
          <img src={url2} />
        </div>
        <div className="services-info-item-text">
          {" "}
          <h2>Landscape Design</h2>{" "}
          <h5>
            We design urban spaces with emphasis on physical <br />
            and mental health, sensory perception, biodevirsity,
            <br />
            and climate adaption.
          </h5>
        </div>
      </div>
      <div className="services-info-item-reverse">
        <div data-aos-duration="2500" data-aos="fade-left">
          <img loading="lazy" src={url} />
        </div>
        <div className="services-info-item-text">
          {" "}
          <h2>Architecture</h2>{" "}
          <h5>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br />
            Lorem Ipsum has been the industry's standard dummy text ever
            <br />
            since the 1500s.
          </h5>
        </div>
      </div>
      <div className="services-info-item">
        <div data-aos-duration="2500" data-aos="fade-right">
          <img src={url3} />
        </div>
        <div className="services-info-item-text">
          {" "}
          <h2>Engineering</h2>{" "}
          <h5>
            orem Ipsum is simply dummy text of the printing and typesetting
            industry.
            <br />
            Lorem Ipsum has been the industry's standard dummy text ever
            <br />
            since the 1500s.
          </h5>
        </div>
      </div>
    </div>
  );
};

export default ServicesInfo;
