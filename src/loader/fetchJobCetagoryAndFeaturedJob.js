export const fetchJobCetagoryAndFeaturedJob = async() =>{
    const jobCetagoryData = await fetch('/job-category.json');
    const jobCetagory = await jobCetagoryData.json();

    const featuredJobData =await fetch('/job-details.json');
    const featuredJob = await featuredJobData.json()


    return [jobCetagory,featuredJob]
}