import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Map from '../Map'; // Import the Map component
import './Form.css';

function HomeSeekerForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [latLong, setLatLong] = useState('');
  const [description, setDescription] = useState('');
  const [accommodationRequired, setAccommodationRequired] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [showMap, setShowMap] = useState(false); // State to control visibility of the Map component
  const history = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    const data = {
      name,
      address,
      gender,
      latLong,
      description,
      accommodationRequired,
      phoneNo,
      aadharNo,
    };
  
    fetch('http://localhost:5000/home-seeker', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Redirect or perform any other action upon successful submission
      // history.push('/dash'); // Redirect to dashboard page
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const handleLatLongClick = () => {
    setShowMap(true); // Show the Map component when the latitude and longitude input field is clicked
  };

  return (
    <div className='complete-container'> 
      <h3 className='heading'>HOME SEEKER FORM </h3> 
    <div className="goods-form-container">
      
      <form onSubmit={handleSubmit} className="goods-form">
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your name"
          />
        </div>
        <div className="form-group">
          <label htmlFor="address">Address:</label>
          <textarea
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            placeholder="Enter your address"
          />
        </div>
        <div className="form-group">
          <label htmlFor="gender">Gender:</label>
          <input
            type="text"
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            placeholder="Enter your gender"
          />
        </div>
        <div className="form-group">
          <label htmlFor="latLong">Latitude,Longitude:</label>
          <input
            type="text"
            id="latLong"
            value={latLong}
            onClick={handleLatLongClick} // Open the Map component when the input field is clicked
            readOnly // Make the input field read-only
            placeholder="Click to select location"
          />
        </div>
        {showMap && <Map setLatLong={setLatLong} showMap={showMap} setShowMap={setShowMap} />} {/* Render the Map component only when showMap is true */}
        <div className="form-group">
          <label htmlFor="description">Description:</label>
          <textarea
            type="text"
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Enter your description"
          />
        </div>
        <div className="form-group">
          <label htmlFor="accommodationRequired">Number of Accommodation Required:</label>
          <input
            type="number"
            id="accommodationRequired"
            value={accommodationRequired}
            onChange={(e) => setAccommodationRequired(e.target.value)}
            placeholder="Enter the number of accommodations required"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone Number:</label>
          <input
            type="text"
            id="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="aadharNo">Aadhar Number:</label>
          <input
            type="text"
            id="aadharNo"
            value={aadharNo}
            onChange={(e) => setAadharNo(e.target.value)}
            placeholder="Enter your Aadhar number"
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default HomeSeekerForm;