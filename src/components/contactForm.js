import React from "react";

const ContactForm = () => {
  return (
    <form>
      <div className="form">
        <label for="fname">Full Name</label>
        <input type="text" id="fname" name="fname" />
        <label for="lname">E-mail</label>
        <input type="text" id="lname" name="lname" />
        <textarea>Ask us anything...</textarea>
      </div>
    </form>
  );
};

export default ContactForm;
