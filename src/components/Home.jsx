import React from 'react';
import Hero from './Hero';
import JobCetagory from './JobCetagory';
import FeaturedJob from './FeaturedJob';

const Home = () => {
    return (
        <div className='mb-11'>
          <Hero/>
          <JobCetagory/>
          <FeaturedJob/>
        </div>
    );
};

export default Home;