// import React from 'react';
// import { Link } from 'react-router-dom';
// import './HomePage.css';

// const HomePage = () => {
//   return (
//     <div className="home-page">
//       <div className="text">
//       <div className="text">
//   <h1>
//     <span>W</span>
//     <span>E</span>
//     <span>L</span>
//     <span>C</span>
//     <span>O</span>
//     <span>M</span>
//     <span>E</span>
//     <span> </span>
//     <span>T</span>
//     <span>O</span>
//     <span> </span>
//     <span>S</span>
//     <span>A</span>
//     <span>F</span>
//     <span>E</span>
//     <span>Z</span>
//     <span>O</span>
//     <span>N</span>
//     <span>E</span>
//   </h1>
// </div>

//       </div>
//       <div className="left-section">
//         <img src="./assets/flood_image.png" alt="flood-image" className="left-image" />
//       </div>
      
//         <div className="button-container">
//           <Link to="/home-seeker" className="button">Home Seekers</Link>
//           <Link to="/home-provider" className="button">Home Providers</Link>
//           <Link to="/camp-form" className="button">Camp Form</Link>
//           <Link to="/supply-truck" className="button">Supply Truck</Link>
//         </div>
//     </div>
//   );
// }

// export default HomePage;
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage = () => {
  useEffect(() => {
    const spans = document.querySelectorAll('.text h1 span');
    spans.forEach((span, index) => {
      setTimeout(() => {
        span.classList.add('visible');
      }, index * 100); // Adjust the delay as needed
    });
  }, []);

  return (
    <div className="home-page">
      <div className="text">
        <h1>
          <span>W</span>
          <span>E</span>
          <span>L</span>
          <span>C</span>
          <span>O</span>
          <span>M</span>
          <span>E</span>
          <span> </span>
          <span>T</span>
          <span>O</span>
          <span> </span>
          <span>S</span>
          <span>A</span>
          <span>F</span>
          <span>E</span>
          <span>Z</span>
          <span>O</span>
          <span>N</span>
          <span>E</span>
        </h1>
      </div>
      <div className="left-section">
        <img src="./assets/flood_image.png" alt="flood-image" className="left-image" />
      </div>
      
      <div className="button-container">
        <Link to="/home-seeker" className="button">Home Seekers</Link>
        <Link to="/home-provider" className="button">Home Providers</Link>
        <Link to="/camp-form" className="button">Camp Form</Link>
        <Link to="/supply-truck" className="button">Supply Truck</Link>
      </div>
    </div>
  );
}

export default HomePage;
