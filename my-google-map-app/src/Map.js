// import React, { useState, useEffect } from 'react';
// import './components/Form.css';
// import { AdvancedMarkerElement } from '@vis.gl/react-google-maps';

// function Map({ setLatLong, showMap, setShowMap }) {
//   const [map, setMap] = useState(null);
//   const [selectedCoordinates, setSelectedCoordinates] = useState(null);

//   useEffect(() => {
//     // Create the map instance
//     const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
//       center: { lat: 10.534542950755414, lng: 76.21007357699288 }, // Default to center of the world
//       zoom: 8, // Adjust as needed
//     });
//     setMap(mapInstance);

//     // Add event listener to handle map clicks
//     mapInstance.addListener('click', handleMapClick);
//     mapInstance.addListener('click',handleMarker)

//     // Clean up function
//     return () => {
//       // Remove the event listener when the component unmounts
//       if (mapInstance) {
//         mapInstance.addListener('click', null);
//       }
//     };
//   }, []); // Empty dependency array ensures this effect runs only once

//   // Function to handle when user clicks on the map
//   const handleMapClick = (e) => {
//     const coordinates = {
//       lat: e.latLng.lat(),
//       lng: e.latLng.lng(),
//     };
//     setSelectedCoordinates(coordinates);
//   };
//   const handleMarker = (e) => {
//     const marker = new window.google.maps.Marker({
//       position: selectedCoordinates,
//       map: map,
//       title: 'Selected Location'
//     });
//   };

//   // Function to handle when user confirms selected coordinates
//   const handleConfirmClick = () => {
//     if (selectedCoordinates) {
//       const latLongString = `${selectedCoordinates.lat},${selectedCoordinates.lng}`;
//       setLatLong(latLongString);
//       setShowMap(false); 
//     }
//   };

//   return (
//     <div>
//       <h3>Map</h3>
//       <div id="map" style={{ width: '100%', height: '500px', cursor: 'crosshair' }}>
//         {/* Map will be rendered here */}
//       </div>
//       {selectedCoordinates && (
//         <button className="submit-btn" onClick={handleConfirmClick}>Confirm Coordinates</button>
//       )}
//     </div>
//   );
// }

// export default Map;

import React, { useState, useEffect } from 'react';
import './components/Form.css';

function Map({ setLatLong, showMap, setShowMap }) {
  const [map, setMap] = useState(null);
  const [selectedCoordinates, setSelectedCoordinates] = useState(null);
  const [marker, setMarker] = useState(null);

  useEffect(() => {
    const mapInstance = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: 10.534542950755414, lng: 76.21007357699288 },
      zoom: 8,
    });
    setMap(mapInstance);

    mapInstance.addListener('click', handleMapClick);
    mapInstance.addListener('click',addMarker);

    return () => {
      if (mapInstance) {
        mapInstance.addListener('click', null);
      }
    };
  }, []);

  const handleMapClick = (e) => {
    const coordinates = {
      lat: e.latLng.lat(),
      lng: e.latLng.lng(),
    };
    setSelectedCoordinates(coordinates);
    addMarker(coordinates);
  };

  const addMarker = (coordinates) => {
    if (map) {
      if (marker) {
        // If marker already exists, remove it from the map
        marker.setMap(null);
      }
      // Create a new marker at the selected coordinates
      const newMarker = new window.google.maps.Marker({
        position: coordinates,
        map: map,
        title: 'Selected Location'
      });
      // Set the new marker to state
      setMarker(newMarker);
    }
  };

  const handleConfirmClick = () => {
    if (selectedCoordinates) {
      const latLongString = `${selectedCoordinates.lat},${selectedCoordinates.lng}`;
      setLatLong(latLongString);
      setShowMap(false); 
    }
  };

  return (
    <div>
      <h3>Map</h3>
      <div id="map" style={{ width: '100%', height: '500px', cursor: 'crosshair' }}>
        {/* Map will be rendered here */}
      </div>
      {selectedCoordinates && (
        <button className="submit-btn" onClick={handleConfirmClick}>Confirm Coordinates</button>
      )}
    </div>
  );
}

export default Map;
