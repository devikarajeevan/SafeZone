import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Import your CSS file for styling
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const history = useNavigate();

  const handleSearch = () => {
    history('/');
  }
  return (
    <nav className="navbar">
      <div className="navbar-left">
      <button className='icon-button' onClick={handleSearch}>
        <img src='./assets/safezone-logo.png' alt="Icon" />
      </button>
      </div>
      <div className="navbar-right">
        <Link to="" className="navbar-link">Login</Link>
        {/* Add logic to conditionally render login/logout based on user authentication */}
        {/* <Link to="/logout" className="navbar-link">Logout</Link> */}
      </div>
    </nav>
  );
}

export default Navbar;