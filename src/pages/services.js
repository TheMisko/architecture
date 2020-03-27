import React from "react";
import Nav from "../components/nav";
import Footer from "../components/footer";
import ServicesText from "../components/servicesText";
import ServicesInfo from "../components/servicesInfo";
const Services = () => {
  return (
    <div>
      <Nav />
      <ServicesText />
      <ServicesInfo />

      <Footer />
    </div>
  );
};

export default Services;
