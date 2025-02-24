import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Team from './Team';
import Products from './Products';
import Features from './Features';
import Review from './Review';

const Homepage = () => {
    return (
        <div className=''> 
          <Banner/>
          <About/>
          <Services/>
          <Team/>
          <Products/>
          <Features/>
          <Review/>
            
        </div>
    );
};

export default Homepage;