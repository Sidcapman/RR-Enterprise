import React from "react";
import "./OurPartners.css";
import partner1 from "./partner1.JPG";
const OurPartners = () => {
  return (
    <div className="partners-container">
      <h1 className="partners-title">Our Partners</h1>
      <div className="partner-card">
        <img src={partner1} alt="Partner 1" />
        <h2>SREEVEN CNC</h2>
        <p>Supplies and Deals CNC Machines across Korea, Japan and India</p>
      </div>
      {/* <div className="partner-card">
        <img src="partner2.jpg" alt="Partner 2" />
        <h2>Partner 2</h2>
        <p>Description of Partner 2 goes here.</p>
      </div>
      <div className="partner-card">
        <img src="partner3.jpg" alt="Partner 3" />
        <h2>Partner 3</h2>
        <p>Description of Partner 3 goes here.</p>
      </div>
      <div className="partner-card">
        <img src="partner4.jpg" alt="Partner 4" />
        <h2>Partner 4</h2>
        <p>Description of Partner 4 goes here.</p>
      </div>
      <div className="partner-card">
        <img src="partner4.jpg" alt="Partner 5" />
        <h2>Partner 5</h2>
        <p>Description of Partner 5 goes here.</p>
      </div>
      <div className="partner-card">
        <img src="partner4.jpg" alt="Partner 6" />
        <h2>Partner 6</h2>
        <p>Description of Partner 6 goes here.</p>
      </div> */}
    </div>
  );
};

export default OurPartners;
// import React from "react";
// import "./OurPartners.css"; // Import your CSS file
// import OurPartners from './OurPartners';
// import partner1 from "./partner1.JPG";
// const OurPartners = () => {
//   return (
//     <div className="partners-container">
//       <div className="partner-info">
//         <div className="partner-logo">
//           {/* Insert partner logo or image */}
//           <img src={partner1} alt="Partner Logo" />
//         </div>
//         <div className="partner-details">
//           <h2>Partner Name</h2>
//           <p>Partner Description or Information</p>
//         </div>
//       </div>

//       <div className="reviews-container">
//         <h3>Reviews</h3>
//         <div className="reviews">
//           <div className="review">
//             <p>
//               Review 1 - Lorem ipsum dolor sit amet, consectetur adipiscing
//               elit.
//             </p>
//           </div>
//           <div className="review">
//             <p>
//               Review 2 - Sed do eiusmod tempor incididunt ut labore et dolore
//               magna aliqua.
//             </p>
//           </div>
//           <div className="review">
//             <p>
//               Review 3 - Ut enim ad minim veniam, quis nostrud exercitation
//               ullamco laboris.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default OurPartners;
