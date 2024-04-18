import React, { useState } from 'react';
import './Form.css';
import Map from '../Map';

function CampForm() {
  const [children, setChildren] = useState('');
  const [elderly, setElderly] = useState('');
  const [men, setMen] = useState('');
  const [women, setWomen] = useState('');
  const [name, setName] = useState('');
  const [mineralWater, setMineralWater] = useState('');
  const [sanitaryNapkins, setSanitaryNapkins] = useState('');
  const [firstAid, setFirstAid] = useState('');
  const [rice, setRice] = useState('');
  const [latLong, setLatLong] = useState('');
  const [showMap, setShowMap] = useState(false); // State to control visibility of the Map component



  const handleSubmit = (e) => {
    e.preventDefault();
    
    const data = {
      children,
      elderly,
      men,
      women,
      name,
      mineralWater,
      sanitaryNapkins,
      firstAid,
      rice,
      latLong,
    };

    fetch('http://localhost:5000/camp-form', {
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
      <h3 className='heading'>CAMP FORM</h3>
    <div className="camp-form-container">
      <form onSubmit={handleSubmit} className="camp-form">
        
        <div className="form-group">
          <label htmlFor="children">Children:</label>
          <input
            type="text"
            id="children"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            placeholder="Number of children"
          />
        </div>
        <div className="form-group">
          <label htmlFor="elderly">Elderly:</label>
          <input
            type="text"
            id="elderly"
            value={elderly}
            onChange={(e) => setElderly(e.target.value)}
            placeholder="Number of elderly"
          />
        </div>
        <div className="form-group">
          <label htmlFor="men">Men:</label>
          <input
            type="text"
            id="men"
            value={men}
            onChange={(e) => setMen(e.target.value)}
            placeholder="Number of men"
          />
        </div>
        <div className="form-group">
          <label htmlFor="women">Women:</label>
          <input
            type="text"
            id="women"
            value={women}
            onChange={(e) => setWomen(e.target.value)}
            placeholder="Number of women"
          />
        </div>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Camp Name"
          />
        </div>
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
            placeholder="Number of Sanitary napkins"
          />
        </div>
        <div className="form-group">
          <label htmlFor="firstAid">First Aid:</label>
          <input
            type="text"
            id="firstAid"
            value={firstAid}
            onChange={(e) => setFirstAid(e.target.value)}
            placeholder="Number of First aid kits"
          />
        </div>
        <div className="form-group">
          <label htmlFor="rice">Ration:</label>
          <input
            type="text"
            id="rice"
            value={rice}
            onChange={(e) => setRice(e.target.value)}
            placeholder="in kg"
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

export default CampForm;
