// Card.jsx
import React from 'react';
import './DisplaySeekers.css';

function Card({ data }) {
  return (
    <div className="good-card">
      <h4>Name: {data.name}</h4>
      <p>Gender: {data.gender}</p>
      <p>Phone No: {data.phone_no}</p>
      <p>Address: {data.address}</p>
      <p>Description: {data.desc}</p>
      <p>Accommodation Required: {data.accomodation_req}</p>
    </div>
  );
}

export default Card;
