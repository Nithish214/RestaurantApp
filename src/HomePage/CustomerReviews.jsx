import React from 'react';

const CustomerReviews = () => {
  const reviewsStyle = {
    textAlign: 'center',
    padding: '20px',
  };

  const reviewCardStyle = {
    border: '1px solid #ddd',
    borderRadius: '4px',
    padding: '10px',
    margin: '10px',
    width: '30%',
  };

  return (
    <div style={reviewsStyle}>
      <h2>Our Customer Reviews</h2>
      <div style={{ display: 'flex', justifyContent: 'space-around' }}>
        <div style={reviewCardStyle}>
          <p>This is some random text...</p>
          <p>Name Name</p>
          <p>★★★★☆</p>
        </div>
        {/* Repeat for other reviews */}
      </div>
    </div>
  );
};

export default CustomerReviews;
