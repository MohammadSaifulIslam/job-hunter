import React, { createContext } from 'react';
import Header from './components/Header';
import { Outlet, useLoaderData } from 'react-router-dom';
import Footer from './components/Footer';
import toast, { Toaster } from 'react-hot-toast';


export const JobCetagoryContext = createContext([]);
export const FeaturedJobContext = createContext([])
const App = () => {
  const [jobCetagory, featuredJob] = useLoaderData();
  return (
    <div className='h-screen'>
      <JobCetagoryContext.Provider value={jobCetagory}>
        <FeaturedJobContext.Provider value={featuredJob}>
          <Header></Header>
          <Outlet></Outlet>
          <Footer/>
          <Toaster />
        </FeaturedJobContext.Provider>
      </JobCetagoryContext.Provider>
    </div>
  );
};

export default App;