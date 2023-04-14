import React, { useContext, useState } from 'react';
import { FeaturedJobContext } from '../App';
import FeaturedJobCard from './Card/FeaturedJobCard';

const FeaturedJob = () => {
    const featuredJobsData = useContext(FeaturedJobContext)
    const [featuredJobs, setFeaturedJobs] = useState(featuredJobsData.slice(0, 4))
    const [isClicked, setIsClicked] = useState(false)
    const handleShowAllBtn = () => {
        setFeaturedJobs(featuredJobsData)
        setIsClicked(true)
    }
    return (
        <div className='my-container mt-24'>
            <div className='mx-auto text-center mb-8'>
                <h4 className='section-title'>Featured Jobs</h4>
                <p className='font-medium text-gray-500 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="grid md:grid-cols-2 gap-7">
                {
                    featuredJobs.map(featuredJob =>
                        <FeaturedJobCard key={featuredJob.id} featuredJob={featuredJob}></FeaturedJobCard>
                    )
                }
            </div>
            <div className="flex justify-center mt-10">
                <button onClick={()=> handleShowAllBtn()} className={`my-btn ${isClicked && 'hidden'}`}>See All Jobs</button>
            </div>
        </div>
    );
};

export default FeaturedJob;