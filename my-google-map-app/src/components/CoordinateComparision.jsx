// CoordinateComparison.jsx
import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Card from './Card'; // Import the Card component
import './DisplaySeekers.css';
import Map2 from './Map2';

function CoordinateComparison() {
  const location = useLocation();
  const latLong = location.state?.latLong;
  const [comparisonResult, setComparisonResult] = useState({});

  useEffect(() => {
    if (latLong) {
      fetch('http://localhost:5000/compare_coordinates', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ latLong }),
      })
      .then(response => response.json())
      .then(data => {
        console.log('Comparison result:', data);
        if (typeof data === 'object' && !Array.isArray(data)) {
          setComparisonResult(data); // Set the comparison result in state if it's an object
        } else {
          console.error('Comparison result is not an object:', data);
        }
      })
      .catch((error) => {
        console.error('Error:', error);
      });
    }
  }, [latLong]);

  return (
    <div className='full-container'>
      <h2 className='comparison-result'>COMPARISON RESULT</h2>
      {/* Iterate over the keys of the comparisonResult object */}
      {Object.keys(comparisonResult).map((key) => (
        <div key={key}>
      
          <div className="goods-container">
            {/* Map through the array of objects for each key */}
            {Array.isArray(comparisonResult[key]) ? (
              comparisonResult[key].map((item, index) => (
                <Card key={index} data={item} />
              ))
            ) : (
              <p>No comparison result available</p>
            )}
          </div>
        </div>
      ))}
      <div className="map-container">
        <Map2 data= {comparisonResult}/>
      </div>
    </div>
  );
}

export default CoordinateComparison;
