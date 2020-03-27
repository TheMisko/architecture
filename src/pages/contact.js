import React from "react";

import MapBox from "../components/mapBox";
import Nav from "../components/nav";
import Footer from "../components/footer";
import ContactInfo from "../components/contactInfo";
import ContactForm from "../components/contactForm";

const Contact = () => {
  return (
    <div>
      <Nav />

      <div className="map-container">
        <MapBox />
      </div>
      <div className="contact-info-container">
        {" "}
        <ContactInfo />
        <ContactForm />
      </div>

      {/* <div className="block"></div> */}
      <Footer />
    </div>
  );
};

export default Contact;
