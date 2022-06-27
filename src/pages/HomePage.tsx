import React from 'react'
import Navbar from '../components/Navbar';
import { Button } from '../components/Button';

const HomePage = () => {
  const images = ['/solaytic.png', '/kanba.png', '/lighting.png', '/ztos.png', '/kanba.png', '/goldline.png', '/ideaa.png', '/liva.png', '/velocity-9.png']
  return (
    <>
      <div className="flex flex-col h-screen">
        <Navbar />
        <div className='h-2/5 bg-[#303F60] flex justify-start sm:justify-around items-center p-4'>
          <div className=''>
            <div>
              <div className='text-4xl lg:text-6xl text-white'>
                <h1 className=''>Welcome to</h1>
                <h1 className='mb-10'>My<span className='text-[#43AFFF]'>Jobs</span></h1>
              </div>

              <Button label="Login/Signup" />
            </div>

          </div>
          <div className='rounded h-full z-10 hidden sm:block'>
            {/* <img className='hidden lg:block lg:absolute right-0 w-1/2 h-3/5 mr-9' src={'/myjobs.png'} />    */}
            <img className='' src={'/myjobs.png'} />
          </div>

        </div>
        <div className='bg-[#EDF6FF] p-4'>
          <p className='text-xl font-bold my-10 sm:mt-48'>Why Us</p>
          <div className='flex justify-around flex-wrap'>
            <div className='flex items-center drop-shadow-lg'>
              <div className='w-80 h-48 bg-white p-4 flex flex-col justify-around'>
                <p className='text-xl text-[#43afff]'> Get More <br />Visibility</p>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
            <div className='flex items-center drop-shadow-lg'>
              <div className='w-80 h-48 bg-white p-4 flex flex-col justify-around'>
                <p className='text-xl text-[#43afff]'> Organize Your <br /> Candidates</p>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
            <div className='flex items-center drop-shadow-lg'>
              <div className='w-80 h-48 bg-white p-4 flex flex-col justify-around'>
                <p className='text-xl text-[#43afff]'>  Verify Their <br /> Abilities</p>
                <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
              </div>
            </div>
          </div>
          <p className='text-xl font-bold my-10'>Companies Who Trust Us</p>
          <div className='flex flex-row flex-wrap justify-around'>
            {
              images.map((item: string) => {
                return <div className='flex-[1_1_20%] py-4'>
                  <img src={item} />
                </div>
              })
            }

          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage