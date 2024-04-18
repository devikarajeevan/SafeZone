import React, { useState } from 'react';
import './Form.css';
import Map from '../Map';

function SupplyTruck() {
  const [mineralWater, setMineralWater] = useState('');
  const [sanitaryNapkins, setSanitaryNapkins] = useState('');
  const [firstAid, setFirstAid] = useState('');
  const [ration, setRation] = useState('');
  const [additionalItems, setAdditionalItems] = useState('');
  const [latLong, setLatLong] = useState('');
  const [showMap, setShowMap] = useState(false); // State to control visibility of the Map component


  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      mineralWater,
      sanitaryNapkins,
      firstAid,
      ration,
      additionalItems,
      latLong,
    };

    fetch('http://localhost:5000/supply-truck', {
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
      // history.push('/dashboard'); // Redirect to dashboard page
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
      <h3 className='heading'>SUPPLY TRUCK FORM</h3>
    <div className="supply-truck-form-container">
      <form onSubmit={handleSubmit} className="supply-truck-form">
        
        <div className="form-group">
          <label htmlFor="mineralWater">Mineral Water:</label>
          <input
            type="text"
            id="mineralWater"
            value={mineralWater}
            onChange={(e) => setMineralWater(e.target.value)}
            placeholder="Number of 1L bottles"
          />
        </div>
        <div className="form-group">
          <label htmlFor="sanitaryNapkins">Sanitary Napkins:</label>
          <input
            type="text"
            id="sanitaryNapkins"
            value={sanitaryNapkins}
            onChange={(e) => setSanitaryNapkins(e.target.value)}
            placeholder="Number of sanitary napkins"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstAid">First Aid:</label>
          <input
            type="text"
            id="firstAid"
            value={firstAid}
            onChange={(e) => setFirstAid(e.target.value)}
            placeholder="Number of first aid kits"
          />
        </div>
        <div className="form-group">
          <label htmlFor="ration">Ration:</label>
          <input
            type="text"
            id="ration"
            value={ration}
            onChange={(e) => setRation(e.target.value)}
            placeholder="Quantity of ration (in kg)"
          />
        </div>
        <div className="form-group">
          <label htmlFor="additionalItems">Additional Items:</label>
          <input
            type="text"
            id="additionalItems"
            value={additionalItems}
            onChange={(e) => setAdditionalItems(e.target.value)}
            placeholder="Additional items"
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
        <button type="submit" className="submit-btn">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default SupplyTruck;
