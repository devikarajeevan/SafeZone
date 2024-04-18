// HomeProviderForm.jsx
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Form.css'; 
import Map from '../Map';

function HomeProviderForm() {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [gender, setGender] = useState('');
  const [latLong, setLatLong] = useState('');
  const [description, setDescription] = useState('');
  const [accommodationsAvailable, setAccommodationsAvailable] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [aadharNo, setAadharNo] = useState('');
  const [cautionDeposit, setCautionDeposit] = useState('');
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
      accommodationsAvailable,
      phoneNo,
      aadharNo,
      cautionDeposit,
    };
  
    fetch('http://localhost:5000/home-provider', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
    .then(response => response.json())
    .then(data => {
      console.log('Success:', data);
      // Navigate to the CoordinateComparison component with latLong data
      history('/coordinate-comparison', { state: { latLong } });
    })
    .catch((error) => {
      console.error('Error:', error);
    });
  };

  const handleLatLongClick = () => {
    setShowMap(true);
  };
  

  return (

    <div className='complete-container'>
      <h3 className='heading'>HOME PROVIDER FORM</h3>
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
          <label htmlFor="latLong">Latitude, Longitude:</label>
          <input
            type="text"
            id="latLong"
            value={latLong}
            onClick={handleLatLongClick}
            onChange={(e) => setLatLong(e.target.value)}
            placeholder="Click to select location"
          />
        </div>
        {showMap && <Map setLatLong={setLatLong} showMap={showMap} setShowMap={setShowMap} />}
        
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
          <label htmlFor="accommodationsAvailable">Accommodations Available:</label>
          <input
            type="text"
            id="accommodationsAvailable"
            value={accommodationsAvailable}
            onChange={(e) => setAccommodationsAvailable(e.target.value)}
            placeholder="Enter available accommodations"
          />
        </div>
        <div className="form-group">
          <label htmlFor="phoneNo">Phone No:</label>
          <input
            type="text"
            id="phoneNo"
            value={phoneNo}
            onChange={(e) => setPhoneNo(e.target.value)}
            placeholder="Enter your phone number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="aadharNo">Aadhar No:</label>
          <input
            type="text"
            id="aadharNo"
            value={aadharNo}
            onChange={(e) => setAadharNo(e.target.value)}
            placeholder="Enter your Aadhar number"
          />
        </div>
        <div className="form-group">
          <label htmlFor="cautionDeposit">Caution Deposit:</label>
          <input
            type="text"
            id="cautionDeposit"
            value={cautionDeposit}
            onChange={(e) => setCautionDeposit(e.target.value)}
            placeholder="Enter caution deposit"
          />
        </div>
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default HomeProviderForm;