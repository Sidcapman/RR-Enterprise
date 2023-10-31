// import React from "react";
// import "./ContactInfo.css"; // Create this CSS file to style the component

// const ContactInfo = () => {
//   return (
//     <div className="contact-info">
//       <div className="contact-column">
//         <img src="/company-logo.png" alt="Company Logo" className="logo" />
//         <p className="company-description">
//           Your company description goes here...
//         </p>
//       </div>
//       <div className="contact-column">
//         <h2>Contact Info</h2>
//         <ul className="contact-list">
//           <li>Email: info@example.com</li>
//           <li>Phone: +1 (123) 456-7890</li>
//           <li>Website: www.example.com</li>
//           {/* Add more contact info items as needed */}
//         </ul>
//       </div>
//       <div className="contact-column">
//         <h2>Help Center</h2>
//         <p className="help-center-text">
//           If you need assistance, please visit our help center or contact our
//           support team.
//         </p>
//       </div>
//       <div className="contact-column">
//         <h2>Office Address</h2>
//         <address>
//           123 Main St,
//           <br />
//           City, Country
//         </address>
//       </div>
//     </div>
//   );
// };

// export default ContactInfo;
import React from "react";
import "./ContactInfo.css"; // Create this CSS file to style the component

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
      {/* <main>
        <div className="page-contents">
          <nav>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
              <li>
                <a href="#">Projects</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </nav>
          <section className="contact-info">
            <h2>Contact Information</h2>
            <p>Email: info@example.com</p>
            <p>Phone: +1 (123) 456-7890</p>
            <p>Address: 123 Main St, City, Country</p>
          </section>
        </div>
      </main> */}
    </div>
  );
};

export default ContactInfo;
