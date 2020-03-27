import React from "react";

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div>
        <div>
          <h3>Mathew and Maricell</h3>
          <p>
            If you want to hire our team of expert architects and designers for
            your next project or have any questions, we are always ready to
            help.
          </p>
        </div>
        <div className="contact-info-item">
          <h4>Adress:</h4> <p>Adresa Adresovica 11</p>
        </div>
        <div className="contact-info-item">
          <h4>Hours:</h4> <p>09:00 - 20:00</p>
        </div>
        <div className="contact-info-item">
          <h4>Contacts:</h4>
          <p>
            060-123-456-7
            <br />
            email@email.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
