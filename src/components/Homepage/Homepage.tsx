import React from 'react';
import Banner from './Banner';
import About from './About';
import Services from './Services';
import Team from './Team';
// import Features from './Features';

const Homepage = () => {
    return (
        <div className=''> 
          <Banner/>
          <About/>
          <Services/>
          <Team/>
          {/* <Features/> */}
            
        </div>
    );
};

export default Homepage;