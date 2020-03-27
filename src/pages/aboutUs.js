import React from "react";
import Nav from "../components/nav";
import Leadership from "../components/leadership";
import AuText from "../components/au-text";
import AuProjects from "../components/auProjects";
import Awards from "../components/awards";
import Clients from "../components/clients";
import Footer from "../components/footer";

const AboutUs = () => {
  return (
    <div>
      <Nav />
      <Leadership />
      <AuText />
      <AuProjects />
      <Awards />
      <Clients />
      <div className="block"></div>
      <Footer />
    </div>
  );
};

export default AboutUs;
