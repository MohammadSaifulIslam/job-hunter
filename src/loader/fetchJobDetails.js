export const fetchJobDetails = async (id) =>{
    const featuredJobData =await fetch('/job-details.json');
    const featuredJob = await featuredJobData.json()

    const specificJobDetails = featuredJob.find(sJob => sJob.id == id)

    return specificJobDetails;
} 