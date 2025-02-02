import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Team from './Team';

const Homepage = () => {
    return (
        <div className=''> 
          <Banner/>
          <About/>
          <Services/>
          <Team/>
            
        </div>
    );
};

export default Homepage;