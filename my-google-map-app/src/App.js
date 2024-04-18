import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Map from './Map';
import HomeSeekerForm from './components/Home_Seeker';
import HomeProviderForm from './components/Home_Provider';
import CampForm from './components/CampForm';
import SupplyTruck from './components/SupplyTruck';
import HomePage from './components/HomePage';
import Navbar from './components/Navbar';
import './App.css'; // Import CSS for transitions
import CoordinateComparison from './components/CoordinateComparision';

function App() {
  const [latLong, setLatLong] = useState('');
 

  return (
    <Router>
      <Navbar />
      <div className="app-container">
      
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/map" element={<Map setLatLong={setLatLong} />} />
            <Route path="/home-seeker" element={<HomeSeekerForm />} />
            <Route path="/home-provider" element={<HomeProviderForm />} />
            <Route path="/camp-form" element={<CampForm />} />
            <Route path="/supply-truck" element={<SupplyTruck />} />
            
            <Route path="/coordinate-comparison" element={<CoordinateComparison />} />
          </Routes>
       
      </div>
    </Router>
  );
}

export default App;
