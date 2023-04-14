import React from 'react';
import Vector from '../assets/Vector.png'
import VectorUp from '../assets/Vector-up.png'


const Banner = ({children}) => {
    return (
        <div className='w-full h-[300px] bg-slate-100 relative'>
          <figure className='absolute -top-[100px] right-0 w-52 md:w-72'>  <img  src={VectorUp} alt="" /></figure>
          <h2 className='text-center text-2xl font-bold absolute top-20 right-[50%] translate-x-[50%]'>{children}</h2>
            <figure className='absolute bottom-0 left-0 w-52 md:w-72'><img  src={Vector} alt="" /></figure>
        </div>
    );
};

export default Banner;