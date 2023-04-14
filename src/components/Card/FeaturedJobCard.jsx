import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationPin, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

const FeaturedJobCard = ({ featuredJob }) => {
    const {id, companyName, fullTimeOrPartTime, jobTitle, companyLogo, location, remoteOrOnsite, salary } = featuredJob;
    return (
        <div className='p-10 border border-slate-200 rounded-xl'>
            <figure className='w-28 h-10'><img className='object-contain h-full w-full' src={companyLogo} alt="" /></figure>
            <h4 className='font-extrabold text-2xl mt-7 mb-1'>{jobTitle}</h4>
            <p className='text-xl font-semibold text-gray-500'>{companyName}</p>
            <div className='flex gap-5 my-4'>
                <button className='btn-outlined'>{remoteOrOnsite}</button>
                <button className='btn-outlined '>{fullTimeOrPartTime}</button>
            </div>
           <div className='text-gray-400 space-x-4'>
           <span > <FontAwesomeIcon icon={faLocationPin} /> {location}</span> <span> <FontAwesomeIcon icon={faDollarSign} /> {salary}</span>
           </div>
        <Link to={`/job/${id}`} ><button  className="my-btn block mt-6">View Details</button></Link>
        </div>
    );
};

export default FeaturedJobCard;