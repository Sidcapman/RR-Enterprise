import React from "react";
import "./ContactInfo.css";

const ContactInfo = () => {
  return (
    <div className="contact-info-top">
      <header className="header">
        <div className="company-name">
          <h1>RR Enterprises</h1>
        </div>
        <div className="social-links">
          <a href="#">Facebook</a>
          <a href="#">LinkedIn</a>
          <a href="#">Twitter</a>
        </div>
      </header>
      <div className="creator">
        <div className="col">
          {" "}
          <div>Rohitha Ravindra Myla</div>
          <div>+91 83175 13691 </div>
          <div>rohitharavindramyla@gmail.com </div>{" "}
        </div>
        <div className="col">
          <div>Hyderabad , Telangana</div>
          <div>ECE Student </div>
          <div>NIT Raipur , Chhattisgarh</div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
