import React, { useContext } from 'react';
import { JobCetagoryContext } from '../App';

const JobCetagory = () => {
    const jobCetagory = useContext(JobCetagoryContext)

    return (
        <div className='my-container mt-24'>
            <div className='mx-auto text-center mb-8'>
                <h4 className='section-title'>Job Category List</h4>
                <p className='font-medium text-gray-500 mt-4'>Explore thousands of job opportunities with all the information you need. Its your future</p>
            </div>
            <div className="job-cetagory-container">
                <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-5">
                    {
                        jobCetagory.map(singleJobCetagory =>
                            <div
                                key={singleJobCetagory.id}
                                className='bg-slate-100 p-10 rounded-xl'>
                                   <figure className='rounded-md p-2 bg-slate-200 w-16 h-16 flex justify-center items-center mb-5'> <img className='' src={singleJobCetagory.logo} alt="" /></figure>
                                <h4 className='font-bold text-lg'>{singleJobCetagory.name}</h4>
                                <p className='font-medium text-gray-500'>{singleJobCetagory.vacancies} jobs availabe</p>
                            </div>)
                    }
                </div>
            </div>
        </div>
    );
};

export default JobCetagory;