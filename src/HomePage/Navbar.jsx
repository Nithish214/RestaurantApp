import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/Login/AuthContext'; // Adjust the path as needed to import useAuth
import './css/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const { isAuthenticated, logout } = useAuth(); // Destructure isAuthenticated and logout

  const handleLogout = () => {
    logout(); // Call the logout method from context
    navigate('/login'); // Redirect to the login page
  };

  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    padding: '20px 0',
    backgroundColor: '#fff',
    margin: '0',
  };

  const buttonStyle = {
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    backgroundColor: '#f0f0f0',
    transition: 'background-color 0.3s',
  };

  return (
    <ul style={navStyle}>
      <li><button style={buttonStyle} onClick={() => navigate('/order')}>Order</button></li>
      <li><button style={buttonStyle} onClick={() => navigate('/menu')}>Menu</button></li>
      <li><button style={buttonStyle} onClick={() => navigate('/about')}>About Us</button></li>
      {isAuthenticated ? (
        <li><button style={buttonStyle} onClick={handleLogout}>Logout</button></li>
      ) : (
        <li><button style={buttonStyle} onClick={() => navigate('/login')}>Sign/Register</button></li>
      )}
    </ul>
  );
};

export default Navbar;
