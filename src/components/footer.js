import React from "react";

const Footer = () => {
  const ig =
    "http://www.patruckingbuyersguide.com/images/SocialMedia/INSTAGRAM-GRAY.png";
  const fb =
    "https://clipart.info/images/ccovers/1509135109gray-facebook-logo-png.png";
  return (
    <div className="footer">
      <div className="footer-flex">
        {" "}
        <div className="footer-info">
          <h3>email@email.com</h3> <h3>Adresa Adresovica 11</h3>{" "}
          <img src={fb} /> <img src={ig} />
        </div>
        <div>
          {" "}
          <div className="nav-logo">
            <h2>Matthew&Maricel</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
