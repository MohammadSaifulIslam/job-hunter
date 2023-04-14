import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';


const AppliedJobCard = ({ job }) => {
    const { id, companyName, fullTimeOrPartTime, jobTitle, companyLogo, location, remoteOrOnsite, salary } = job;
    return (
        <div className='my-container'>
            <div className=' p-7 border border-gray-300 rounded-md mb-6 sm:flex gap-8 items-center'>
                <figure className='sm:w-44 sm:h-44 bg-slate-100'><img className='object-contain h-full w-full' src={companyLogo} alt="" /></figure>
                <div className='grow'>
                    <h4 className='font-extrabold text-2xl mt-7 mb-1'>{jobTitle}</h4>
                    <p className='text-xl font-semibold text-gray-500'>{companyName}</p>
                    <div className='flex gap-5 my-4'>
                        <button className='btn-outlined'>{remoteOrOnsite}</button>
                        <button className='btn-outlined '>{fullTimeOrPartTime}</button>
                    </div>
                    <div className='text-gray-400 space-x-4'>
                        <span > <FontAwesomeIcon icon={faLocationPin} /> {location}</span> <span> <FontAwesomeIcon icon={faDollarSign} /> {salary}</span>
                    </div>
                </div>
                <Link className='justify-end' to={`/job/${id}`} ><button  className="my-btn block mt-6">View Details</button></Link>
            </div>
        </div>
    );
};

export default AppliedJobCard;