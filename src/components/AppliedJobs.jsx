import React, { useContext, useEffect, useState } from 'react';
import { getFromDb } from '../utilities/fakedb';
import { FeaturedJobContext } from '../App';
import AppliedJobCard from './Card/AppliedJobCard';
import Banner from './Banner';

const AppliedJobs = () => {

    const jobDetails = useContext(FeaturedJobContext);
    const [jobData, setJobData] = useState([])
    const [filteredJob, setFilteredJob] = useState([])

    useEffect(() => {
        const storedJob = getFromDb()
        let jobArr = []
        for (const id in storedJob) {
            const matchedJob = jobDetails.find(singleJob => singleJob.id == id)
            if (matchedJob) {
                jobArr.push(matchedJob)
            }
        }
        setJobData(jobArr)
    }, [jobDetails])

    const handleFilter = () => {
        const value = event.target.value;
        const filterJob = jobData.filter(singleJob => singleJob.remoteOrOnsite == value)
        setFilteredJob(filterJob)
    }
    return (
        <div className=''>
            <Banner>Applied Jobs</Banner>
            <div className="my-container form-control flex mt-20">
                <div className="input-group justify-end ">
                    <select onChange={() => handleFilter()} className="select bg-slate-100 rounded-s-lg">
                        <option disabled selected>Filter by</option>
                        <option value='Remote'>Remote</option>
                        <option value='Onsite'>Onsite</option>
                    </select>
                </div>
            </div>
            <div className='mt-8 mb-20'>
                {
                    filteredJob.length > 0 ?
                        filteredJob.map(job => <AppliedJobCard
                            key={job.id}
                            job={job}
                        ></AppliedJobCard>)

                        : jobData.map(job => <AppliedJobCard
                            key={job.id}
                            job={job}
                        ></AppliedJobCard>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;