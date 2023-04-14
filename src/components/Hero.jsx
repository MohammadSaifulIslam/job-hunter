import React from 'react';
import heroImg from '../assets/hero.png'
const Hero = () => {
    return (
        <div className='my-container grid md:grid-cols-2 bg-slate-100 gap-5 items-center'>
            <div className="text-container">
                <h1 className='font-extrabold text-7xl leading-[80px]'>One Step <br /> Closer To Your <br /> <span className='title-text'>Dream Job</span></h1>
                <p className='text-lg my-7'>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
                <button className='my-btn'>Get Started</button>
            </div>
            <div className="img-container ">
               <img className='object-contain w-full h-[520px] ' src={heroImg} alt="" />
            </div>
        </div>
    );
};

export default Hero;