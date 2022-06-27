import React, { useContext, useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import { UserContext } from '../User';
import JobCard from '../components/JobCard';

const Dashboard = () => {
  const [user, setUser] = useContext(UserContext);
  const [jobs, setJobs] = useState<any>([]);
  const fetchAPI = async () => {
    const requestOptions = {
      headers: {
        authorization: user
      }
    };
    const response = await fetch(`${process.env.REACT_APP_API_URL}/recruiters/jobs`, requestOptions);
    const data = await response.json();
    setJobs(data.data.data)
  }
  
  useEffect(() => {
    fetchAPI()
  }, [])
  return (
    <>
      <div className='flex flex-col h-screen'>
        <Navbar />
        <div className='h-full bg-[#EDF6FF] p-4 grid grid-rows-4 grid-cols-4 gap-x-2.5 gap-y-2.5'>
          {jobs && jobs.map((item:any)=>{
              return (
                  <JobCard key={item.id} title={item.title} description={item.description} location={item.location} />
              )
          })}
        </div>
      </div>
    </>
  )
}

export default Dashboard