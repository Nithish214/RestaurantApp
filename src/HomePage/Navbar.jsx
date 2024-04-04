import React from 'react';

const Navbar = () => {
  const navStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    listStyle: 'none',
    padding: '20px 0',
    backgroundColor: '#fff',
  };

  return (
    <ul style={navStyle}>
      <li>Order</li>
      <li>Menu</li>
      <li>About Us</li>
      <li>Sign/Register</li>
    </ul>
  );
};

export default Navbar;
