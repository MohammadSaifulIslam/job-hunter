import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Banner from './Banner';
import { addToDb } from '../utilities/fakedb';
import { toast } from 'react-hot-toast';

const JobDetails = () => {
    const jobDetails = useLoaderData();
    const handleApplyNow = id =>{
        const notify = () => toast.success('Successfully applied');
        notify()
        addToDb(id)
    }
    const {id, educationalRequirements, experiences, contactInformation, jobDescription, jobResponsibilities, jobTitle, location, salary } = jobDetails;
    return (
        <div>
            <Banner>Job Details</Banner>
            <div className="my-container grid my-20 gap-5 md:grid-cols-6">
                <div className="description col-span-4 text-gray-500 font-medium">
                    <p className='mb-6'><span className='text-black font-bold '>Description:</span> {jobDescription}</p>
                    <p className='mb-6'><span className='text-black font-bold '>Responsibility:</span> {jobResponsibilities}</p>
                    <p className='mb-6'><span className='text-black font-bold block mb-4'>Educational Requirements: </span> {educationalRequirements}</p>
                    <p className='mb-6'><span className='text-black font-bold block mb-4'>Experiences:</span> {experiences}</p>
                </div>
                <div className="details col-span-2">
                    <div className='bg-slate-200 p-7 rounded-xl'>
                        <h5 className='text-xl font-bold'>Job Details</h5>
                        <hr className='border border-gray-300 my-6' />
                        <p className='mb-4'><span className='text-black font-bold '>Salary :</span> {salary} (per month)</p>
                        <p className='mb-4'><span className='text-black font-bold '>Job Title :</span>  {jobTitle} </p>
                        <h5 className='text-xl font-bold'>Contact Information</h5>
                        <hr className='border border-gray-300 my-6' />
                        <p className='mb-4'><span className='text-black font-bold '>Phone :</span> {contactInformation?.phone}</p>
                        <p className='mb-4'><span className='text-black font-bold '>Email :</span> {contactInformation?.email}</p>
                        <p className='mb-4'><span className='text-black font-bold '>Address :</span> {location}</p>
                    </div>
                    <Link to='/appliedjobs'><button onClick={()=> handleApplyNow(id)} className='my-btn w-full mt-6'>Apply Now</button></Link>
                </div>
            </div>
        </div>
    );
};

export default JobDetails;