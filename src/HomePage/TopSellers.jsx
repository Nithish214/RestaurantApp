import React from 'react';
import topSeller1 from './Rectangle 3.png'; // Import top seller images here
import topSeller2 from './Rectangle 4.png';
import topSeller3 from './Rectangle 5.png';

const TopSellers = () => {
  const topSellersStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const sellersListStyle = {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '20px 0',
  };

  const sellerItemStyle = {
    width: '30%',
  };

  return (
    <div style={topSellersStyle}>
      <h2>TOP SELLERS</h2>
      <div style={sellersListStyle}>
        <img src={topSeller1} alt="Top Seller 1" style={sellerItemStyle} />
        <img src={topSeller2} alt="Top Seller 2" style={sellerItemStyle} />
        <img src={topSeller3} alt="Top Seller 3" style={sellerItemStyle} />
      </div>
    </div>
  );
};

export default TopSellers;
