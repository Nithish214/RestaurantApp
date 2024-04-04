import React from 'react';
import Navbar from './Navbar';
import Banner from './Banner';
import TopSellers from './TopSellers';
import CustomerReviews from './CustomerReviews';

function HomePage() {
  return (
    <div>
      <Navbar />
      <Banner />
      <TopSellers />
      <CustomerReviews />
    </div>
  );
}

export default HomePage;
