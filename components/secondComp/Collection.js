import React from 'react'

const Collection = () => {
    return (
        <div className='w-[240px] h-full bg-white mx-6 shadow-xl'>
            <img src='https://images.unsplash.com/photo-1566579090262-51cde5ebe92e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJ1Z2J5fGVufDB8fDB8fHww'
                className='w-[220px] m-auto my-2 h-[430px] object-cover shadow-xl'></img>
            <div className='w-[200px] m-auto my-[15px] border-b-2 border-dashed border-slate-600'></div>

            <div className='w-[220px] m-auto text-center text-[14px]'>
                <p className='mb-[7px] font-semibold'>Las Vegas Aviators</p>
                <p className='mb-[7px] '>Oct 15 | Sun | 4:30 PM</p>
                <p className='mb-[7px] text-slate-500'>Las Vegas Ballpark, Las Vegas, Nevada</p>
                <button className='w-[200px] p-2 bg-[#1D1D1F] text-white'>Take Flight Collection</button>
            </div>
        </div>
    )
}

export default Collection
