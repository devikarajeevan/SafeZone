// "use client";

// import { useState } from "react";
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   InfoWindow,
// } from "@vis.gl/react-google-maps";

// export default function Map2(props) {
//   const [open, setOpen] = useState(false);

//   return (
//     <APIProvider apiKey="AIzaSyCCOlK89Zd5eSyYJmsALRHliBlFsIvJYrE">
//       <div style={{ height: "100vh", width: "100%" }}>
//         <Map zoom={9} center={position} mapId='9c16559ce132e274'>
            
//           <AdvancedMarker position={position} onClick={() => setOpen(true)}>
//             <Pin
//               background={"red"}
//               borderColor={"red"}
//               glyphColor={"white"}
//             />
//           </AdvancedMarker>

//           {open && (
//             <InfoWindow position={position} onCloseClick={() => setOpen(false)}>
//               <p></p>
//             </InfoWindow>
//           )}
//         </Map>
//       </div>
//     </APIProvider>
//   );
// }

// import React from 'react';
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   InfoWindow,
// } from '@vis.gl/react-google-maps';

// function Map2({ data }) {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <APIProvider apiKey="YOUR_GOOGLE_MAPS_API_KEY">
//       <div style={{ height: '100vh', width: '100%' }}>
//         <Map zoom={9} center={{ lat: 10.530345, lng: 76.214729 }} mapId="9c16559ce132e274">
//           {data && Object.keys(data).map((key) => (
//             Array.isArray(data[key]) && data[key].map((item, index) => (
//               <AdvancedMarker key={index} position={{ lat: 10.530345, lng: 76.214729 }} onClick={() => setOpen(true)}>
//                 <Pin background="red" borderColor="red" glyphColor="white" />
//               </AdvancedMarker>
//             ))
//           ))}
//           {open && (
//             <InfoWindow position={{ lat: 10.530345, lng: 76.214729 }} onCloseClick={() => setOpen(false)}>
//               <p>Info Window Content</p>
//             </InfoWindow>
//           )}
//         </Map>
//       </div>
//     </APIProvider>
//   );
// }

// export default Map2;

// import React from 'react';
// import {
//   APIProvider,
//   Map,
//   AdvancedMarker,
//   Pin,
//   InfoWindow,
// } from '@vis.gl/react-google-maps';

// function Map2({ data }) {
//   const [open, setOpen] = React.useState(false);

//   return (
//     <APIProvider apiKey="YOUR_GOOGLE_MAPS_API_KEY">
//       <div style={{ height: '100vh', width: '100%' }}>
//         <Map zoom={10} center={{ lat: 10.530345, lng: 76.214729 }} mapId="9c16559ce132e274">
//           {data && Object.keys(data).map((key) => (
//             Array.isArray(data[key]) && data[key].map((item, index) => {
//               const [latitude, longitude] = item.coordinates.split(',').map(parseFloat);
//               return (
//                 <AdvancedMarker key={index} position={{ lat: latitude, lng: longitude }} onClick={() => setOpen(true)}>
//                   <Pin background="red" borderColor="red" glyphColor="white" />
//                 </AdvancedMarker>
//               );
//             })
//           ))}
//           {open && (
//             <InfoWindow position={{ lat: 10.530345, lng: 76.214729 }} onCloseClick={() => setOpen(false)}>
//               <p>Info Window Content</p>
//             </InfoWindow>
//           )}
//         </Map>
//       </div>
//     </APIProvider>
//   );
// }

// export default Map2;

import React from 'react';
import {
  APIProvider,
  Map,
  AdvancedMarker,
  Pin,
  InfoWindow,
} from '@vis.gl/react-google-maps';

function Map2({ data }) {
  const [open, setOpen] = React.useState(false);
  const [selectedName, setSelectedName] = React.useState('');
  const [selectedPosition, setSelectedPosition] = React.useState(null);

  const handleMarkerClick = (name, position) => {
    setSelectedName(name);
    setSelectedPosition(position);
    setOpen(true);
  };

  return (
    <APIProvider apiKey="AIzaSyCCOlK89Zd5eSyYJmsALRHliBlFsIvJYrE">
      <div style={{ height: '100vh', width: '100%' }}>
        <Map zoom={10} center={{ lat: 10.530345, lng: 76.214729 }} mapId="9c16559ce132e274"  interactionOptions={{ scrollZoom: true }} >
          {data &&
            Object.keys(data).map((key) =>
              Array.isArray(data[key]) &&
              data[key].map((item, index) => {
                const [latitude, longitude] = item.coordinates.split(',').map(parseFloat);
                return (
                  <AdvancedMarker
                    key={index}
                    position={{ lat: latitude, lng: longitude }}
                    onClick={() => handleMarkerClick(item.name, { lat: latitude, lng: longitude })}
                  >
                    <Pin background="red" borderColor="red" glyphColor="white" />
                  </AdvancedMarker>
                );
              })
            )}
          {open && selectedPosition && (
            <InfoWindow position={selectedPosition} onCloseClick={() => setOpen(false)}>
              <p>{selectedName}</p>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
}

export default Map2;


