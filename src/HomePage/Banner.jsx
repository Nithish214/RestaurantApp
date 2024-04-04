import React from 'react';
import bannerImage from './Rectangle.png'; // Import your banner image here

const Banner = () => {
  const bannerStyle = {
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    height: '300px',
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  };

  return (
    <div style={bannerStyle}>
      <h1>No 1 Indian Restaurant in Dublin</h1>
    </div>
  );
};

export default Banner;
