import React from 'react'

interface JobCardProps{
    title: string;
    description: string;
    location: string;
}

const JobCard = (props:JobCardProps) => {
    return (
        <>
            <div className='w-auto h-auto bg-white p-4 flex flex-col justify-around'>
                <h1 className='text-[#303F60] font-bold'>{props.title}</h1>
                <p>{props.description}</p>
                <div className='flex justify-between'>
                    <div className='flex items-center'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="12" height="17" viewBox="0 0 12 17">
                            <path id="Icon_material-location-on" data-name="Icon material-location-on" d="M12.5,3a5.126,5.126,0,0,0-5,5.25c0,3.937,5,9.75,5,9.75s5-5.813,5-9.75A5.126,5.126,0,0,0,12.5,3Zm0,7.125A1.833,1.833,0,0,1,10.714,8.25a1.788,1.788,0,1,1,3.571,0A1.833,1.833,0,0,1,12.5,10.125Z" transform="translate(-6.5 -2)" fill="none" stroke="#43afff" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" />
                        </svg>
                        <p className='pl-2'>{props.location}</p>
                    </div>
                    <div>
                        <button className='bg-[#43AFFF33] p-2 rounded text-[#303F60] font-medium'>View Application</button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default JobCard